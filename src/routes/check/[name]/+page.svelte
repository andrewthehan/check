<script lang="ts">
  import { page } from '$app/stores';
  import {
    checklistsStore,
    createShareLink,
    newChecklist,
    removeChecklist
  } from '$lib/checklistUtils.svelte';
  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import * as Dialog from '$lib/components/ui/dialog/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Progress } from '$lib/components/ui/progress';
  import QR from '@svelte-put/qr/svg/QR.svelte';
  import MoreVertical from 'lucide-svelte/icons/more-vertical';
  import QrCode from 'lucide-svelte/icons/qr-code';
  import Share2 from 'lucide-svelte/icons/share-2';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import { getCompletionPercentage } from '../../../model/SortOptions';

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
  let isEditingDescription = $state(false);

  const sortedItems = $derived(
    checklist != null ? checklist.items.toSorted((a, b) => a.name.localeCompare(b.name)) : []
  );
</script>

{#if checklist == null}
  <section>
    <h1 class="flex scroll-m-20 items-center text-4xl font-extrabold tracking-tight lg:text-5xl">
      {name}
    </h1>
    <p class="text-md my-4 italic">Checklist not found</p>
    <Button onclick={() => checklists.value.push(newChecklist({ name }))}>Create</Button>
  </section>
{:else}
  <section class="header">
    <h1 class="flex scroll-m-20 items-center text-4xl font-extrabold tracking-tight lg:text-5xl">
      {name}
      <Badge class="ml-2" variant="secondary">{checklist.items.length}&nbsp;items</Badge>
      {#if checklist.items.length > 0 && checklist.items.every((i) => i.completeDate != null)}
        <Badge class="ml-1" variant="secondary">Completed</Badge>
      {/if}
    </h1>
    <div class="flex items-center">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger><MoreVertical class="h-4 w-4" /></DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label class="flex items-center">
            Created: {checklist.createDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            })}
          </DropdownMenu.Label>
          <!-- <DropdownMenu.Label class="flex items-center">
            Last updated: {checklist.updateDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            })}
          </DropdownMenu.Label> -->
          <DropdownMenu.Separator />
          <Dialog.Root>
            <Dialog.Trigger
              ><DropdownMenu.Label class="flex items-center"
                ><QrCode class="mr-2 h-4 w-4" />
                Copy
              </DropdownMenu.Label></Dialog.Trigger
            >
            <Dialog.Content class="w-[90vw] max-w-[512px]">
              <Dialog.Header>
                <Dialog.Title>Copy checklist</Dialog.Title>
              </Dialog.Header>
              <div class="flex items-center">
                <Input value={shareUrl} readonly />
                <Button
                  class="ml-2"
                  on:click={async () => {
                    navigator.share({
                      title: checklist.name,
                      text: checklist.description,
                      url: shareUrl
                    });
                  }}
                  size="icon"
                  ><Share2 class="h-4 w-4" />
                </Button>
              </div>
              <QR data={shareUrl} anchorOuterFill="#3F3FAA" anchorInnerFill="#FFA400" />
            </Dialog.Content>
          </Dialog.Root>
          <DropdownMenu.Separator />
          <DropdownMenu.Item
            onclick={() => {
              removeChecklist(checklist.name);
              window.location.href = '/check';
            }}><Trash2 class="mr-2 h-4 w-4" />Delete</DropdownMenu.Item
          >
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  </section>
  {#if isEditingDescription}
    <form class="my-4" onsubmit={() => (isEditingDescription = false)}>
      <Input
        type="text"
        placeholder="Description"
        bind:value={checklist.description}
        on:blur={() => (isEditingDescription = false)}
        autofocus
      />
    </form>
  {:else}
    <button
      type="button"
      class="text-md my-4 text-left italic"
      onclick={() => (isEditingDescription = true)}
    >
      {checklist.description.trim().length > 0 ? checklist.description : 'No description'}
    </button>
  {/if}
  <Progress class="my-4 max-h-2 min-h-2" value={getCompletionPercentage(checklist)} max={1} />
  <form
    class="my-4 flex"
    onsubmit={() => {
      if (newItem.trim() === '') {
        return;
      }
      checklist.items.push({ name: newItem.trim(), completeDate: null });
      newItem = '';
    }}
  >
    <Input type="text" placeholder="Add item" bind:value={newItem} />
    <Button class="ml-4" type="submit">Add</Button>
  </form>

  {#each sortedItems as item, i (item.name)}
    <section class="item">
      <Checkbox
        id={`item${i}`}
        checked={sortedItems[i].completeDate != null}
        on:click={(e) => {
          if (sortedItems[i].completeDate != null) {
            sortedItems[i].completeDate = null;
          } else {
            sortedItems[i].completeDate = new Date();
          }
        }}
      />
      <Label
        class={`ml-6 flex-1 text-xl ${sortedItems[i].completeDate != null ? 'line-through' : ''}`}
        for={`item${i}`}>&nbsp;{sortedItems[i].name}&nbsp;</Label
      >
      <DropdownMenu.Root>
        <DropdownMenu.Trigger><MoreVertical class="h-4 w-4" /></DropdownMenu.Trigger>
        <DropdownMenu.Content>
          {#if sortedItems[i].completeDate != null}
            <DropdownMenu.Label class="flex items-center"
              >Complete: {sortedItems[i].completeDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
              })}</DropdownMenu.Label
            >
            <DropdownMenu.Separator />
          {/if}
          <DropdownMenu.Item
            onclick={() =>
              checklist.items.splice(
                checklist.items.findIndex((item) => item.name === sortedItems[i].name),
                1
              )}><Trash2 class="mr-2 h-4 w-4" />Delete</DropdownMenu.Item
          >
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

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 6px;
  }
</style>
