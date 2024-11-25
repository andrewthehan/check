<script lang="ts">
  import { page } from '$app/stores';
  import { createChecklist, parseFromQueryParams } from '$lib/checklistUtils.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { type Checklist } from '../../model/Checklist';

  const { url } = $page;

  const checklist = $state<Checklist>(parseFromQueryParams(url.searchParams));

  function submit() {
    try {
      createChecklist(checklist);
      window.location.href = `/check/${checklist.name}`;
    } catch (error: any) {
      alert(error.message);
    }
  }
</script>

<form onsubmit={submit}>
  <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">New checklist</h1>
  {#if checklist.description}
    <p class="text-sm text-muted-foreground">{checklist.description}</p>
  {/if}
  {#if checklist.items.length > 0}
    <p class="text-sm text-muted-foreground">{checklist.items.length} items</p>
  {/if}
  <p></p>
  <Input class="my-4" type="text" bind:value={checklist.name} placeholder="Name" />
  <Button class="my-4 self-center" type="submit">Create</Button>
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
