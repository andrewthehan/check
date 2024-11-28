<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { createChecklist, parseFromQueryParams } from '$lib/checklistUtils.svelte';
  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { generateChecklist } from '$lib/llm';
  import LoaderCircle from 'lucide-svelte/icons/loader-circle';
  import Pencil from 'lucide-svelte/icons/pencil';
  import WandSparkles from 'lucide-svelte/icons/wand-sparkles';
  import { type Checklist } from '../../model/Checklist';

  const { url } = $page;

  const checklist = $state<Checklist>(parseFromQueryParams(url.searchParams));

  async function create(checklistToCreate: Checklist) {
    try {
      createChecklist(checklistToCreate);
      await goto(`/check/${checklistToCreate.name}`);
    } catch (error: any) {
      alert(error.message);
    }
  }

  let generatedChecklist = $state<Promise<Checklist>>();

  $effect(() => {
    if (generatedChecklist == null) {
      return;
    }

    generatedChecklist.then(create);
  });
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
  <div class="my-4 flex self-center">
    <Button type="submit" disabled={checklist.name.length === 0}
      ><Pencil class="mr-2 h-4 w-4" />Create</Button
    >

    {#if checklist.items.length === 0}
      {#if generatedChecklist == null}
        <Button
          class="mx-2"
          disabled={checklist.name.length === 0}
          onclick={() => (generatedChecklist = generateChecklist(checklist.name, 10))}
        >
          <WandSparkles class="mr-2 h-4 w-4" />Create with AI
        </Button>
      {:else}
        <Button class="mx-2" disabled>
          <LoaderCircle class="mr-2 h-4 w-4 animate-spin" />Generating
        </Button>
      {/if}
    {/if}
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
