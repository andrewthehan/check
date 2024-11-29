<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import {
    checkIfCanCreate,
    createChecklist,
    parseFromQueryParams
  } from '$lib/checklistUtils.svelte';
  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { generateChecklist } from '$lib/llm';
  import LoaderCircle from 'lucide-svelte/icons/loader-circle';
  import Pencil from 'lucide-svelte/icons/pencil';
  import WandSparkles from 'lucide-svelte/icons/wand-sparkles';
  import { type Checklist } from '../../model/Checklist';
  import { toast } from 'svelte-sonner';

  const { url } = $page;

  const checklist = $state<Checklist>(parseFromQueryParams(url.searchParams));

  async function create(checklistToCreate: Checklist) {
    try {
      createChecklist(checklistToCreate);
      await goto(`/check/${checklistToCreate.name}`);
    } catch (error: any) {
      toast.warning(error.message, {
        action: {
          label: 'OK',
          onClick: () => {}
        }
      });
    }
  }

  let generatedChecklist = $state<Promise<Checklist> | null>();

  $effect(() => {
    if (generatedChecklist == null) {
      return;
    }

    generatedChecklist.then(create).catch((error) => {
      toast.warning(error.message, {
        action: {
          label: 'OK',
          onClick: () => {}
        }
      });
      aiProgressText = '';
      generatedChecklist = null;
    });
  });

  let aiProgressText = $state('');
</script>

<form
  onsubmit={(e) => {
    e.preventDefault();
    create(checklist);
  }}
>
  <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight">
    {checklist.items.length > 0 ? 'Copy checklist' : 'New checklist'}
  </h1>
  {#if checklist.description}
    <p class="mt-2 text-sm text-muted-foreground">{checklist.description}</p>
  {/if}
  {#if checklist.items.length > 0}
    <section class="mt-2">
      <Badge variant="secondary">{checklist.items.length}&nbsp;items</Badge>
    </section>
  {/if}
  <Input class="my-4" type="text" bind:value={checklist.name} placeholder="Name" />
  <div class="my-4 flex flex-col items-center self-center">
    <div class="flex">
      <Button type="submit" disabled={checklist.name.length === 0}
        ><Pencil class="mr-2 h-4 w-4" />Create</Button
      >

      {#if checklist.items.length === 0}
        <div>
          {#if generatedChecklist == null}
            <Button
              class="mx-2"
              disabled={checklist.name.length === 0}
              onclick={() => {
                try {
                  checkIfCanCreate(checklist.name);
                } catch (error: any) {
                  toast.warning(error.message, {
                    action: {
                      label: 'OK',
                      onClick: () => {}
                    }
                  });
                  return;
                }
                generatedChecklist = generateChecklist(
                  checklist.name,
                  10,
                  (progress) => (aiProgressText = progress.text)
                );
              }}
            >
              <WandSparkles class="mr-2 h-4 w-4" />Create with AI
            </Button>
          {:else}
            {#await generatedChecklist}
              <Button class="mx-2" disabled>
                <LoaderCircle class="mr-2 h-4 w-4 animate-spin" />Generating
              </Button>
            {/await}
          {/if}
        </div>
      {/if}
    </div>
    <span>{aiProgressText}</span>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    flex: 1;
  }
</style>
