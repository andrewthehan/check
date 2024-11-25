<script lang="ts">
  import { page } from '$app/stores';
  import { checklistsStore, createShareLink } from '$lib/checklistUtils.svelte';
  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import * as Dialog from '$lib/components/ui/dialog/index.js';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { Progress } from '$lib/components/ui/progress';
  import QR from '@svelte-put/qr/svg/QR.svelte';
  import Clock from 'lucide-svelte/icons/clock';
  import QrCode from 'lucide-svelte/icons/qr-code';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import MoreVertical from 'lucide-svelte/icons/more-vertical';

  const { params, url } = $page;
  const { name } = params;

  const checklists = checklistsStore();
  const checklist = $derived(checklists.value.find((c) => c.name === name));

  const shareUrl = $derived(checklist != null ? createShareLink(url.origin, checklist) : '');

  let newItem = $state('');

  // $effect(() => {
  // 	if (checklist == null) {
  // 		return;
  // 	}

  // 	console.log('update date');
  // 	checklist.updateDate = new Date();
  // });
</script>

{#if checklist == null}
  <section class="not-found">
    <p>Checklist "{name}" not found.</p>
    <Button onclick={() => (window.location.href = `/new?name=${name}`)}>Create</Button>
  </section>
{:else}
  <section class="header">
    <h1 class="flex scroll-m-20 items-center text-4xl font-extrabold tracking-tight lg:text-5xl">
      {name}
      {#if checklist.items.every((i) => i.completeDate != null)}
        <Badge class="ml-2" variant="secondary">Completed</Badge>
      {/if}
    </h1>
    <Dialog.Root>
      <Dialog.Trigger><QrCode /></Dialog.Trigger>
      <Dialog.Content class="sm:max-w-[425px]">
        <Dialog.Header>
          <Dialog.Title>Copy checklist</Dialog.Title>
        </Dialog.Header>
        <QR data={shareUrl} anchorOuterFill="#3F3FAA" anchorInnerFill="#FFA400" />
      </Dialog.Content>
    </Dialog.Root>
  </section>
  <p class="my-4 text-lg font-semibold">{checklist.description}</p>
  <p class="text-sm text-muted-foreground">
    Created: {checklist.createDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
  </p>
  <p class="text-sm text-muted-foreground">
    Last updated: {checklist.updateDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
  </p>

  <Progress
    class="my-4 h-2"
    value={checklist.items.filter((i) => i.completeDate != null).length / checklist.items.length}
    max={1}
  />
  <form
    class="my-4 flex"
    onsubmit={() => {
      if (newItem.trim() === '') {
        return;
      }
      checklist.items.push({ name: newItem, completeDate: null });
      newItem = '';
    }}
  >
    <Input type="text" placeholder="Add item" bind:value={newItem} />
    <Button class="ml-4" type="submit">Add</Button>
  </form>

  {#each checklist.items as item, i (item.name)}
    <section class="item">
      <Checkbox
        id={`item${i}`}
        checked={checklist.items[i].completeDate != null}
        on:click={(e) => {
          if (checklist.items[i].completeDate != null) {
            checklist.items[i].completeDate = null;
          } else {
            checklist.items[i].completeDate = new Date();
          }
        }}
      />
      <Label
        class={`ml-6 flex-1 text-xl ${checklist.items[i].completeDate != null ? 'line-through' : ''}`}
        for={`item${i}`}>&nbsp;{checklist.items[i].name}&nbsp;</Label
      >
      <DropdownMenu.Root>
        <DropdownMenu.Trigger><MoreVertical class="h-4 w-4" /></DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            {#if checklist.items[i].completeDate != null}
              <DropdownMenu.Label class="flex items-center"
                ><Clock class="mr-2 h-4 w-4" />{checklist.items[i].completeDate.toLocaleDateString(
                  'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                  }
                )}</DropdownMenu.Label
              >
              <DropdownMenu.Separator />
            {/if}
            <DropdownMenu.Item onclick={() => checklist.items.splice(i, 1)}
              ><Trash2 class="mr-2 h-4 w-4" />Delete</DropdownMenu.Item
            >
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </section>
  {/each}
{/if}

<style>
  .header {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }

  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 6px;
  }
</style>
