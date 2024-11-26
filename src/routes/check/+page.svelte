<script lang="ts">
  import { checklistsStore } from '$lib/checklistUtils.svelte';
  import { Badge } from '$lib/components/ui/badge';
  import * as Card from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { Progress } from '$lib/components/ui/progress';
  import * as Select from '$lib/components/ui/select';
  import {
    ChecklistSortOptions,
    checklistsSortOptionStore,
    getCompletionPercentage,
    sortChecklists
  } from '../../model/SortOptions';

  const checklists = checklistsStore();

  let filter = $state('');
  const filteredChecklists = $derived(
    checklists.value.filter((c) => c.name.toLocaleUpperCase().includes(filter.toLocaleUpperCase()))
  );

  const sortOption = checklistsSortOptionStore();
  const sortedFilteredChecklists = $derived(sortChecklists(filteredChecklists, sortOption.value));
</script>

<section class="flex-2 my-2 flex">
  <Input class="flex-[3]" type="text" bind:value={filter} placeholder="Search" />

  <Select.Root selected={{ value: sortOption.value, label: sortOption.value }}>
    <Select.Trigger class="ml-2 flex-[2]">
      <Select.Value placeholder="Sort" />
    </Select.Trigger>
    <Select.Content>
      {#each Object.values(ChecklistSortOptions) as option}
        <Select.Item value={option} on:click={() => (sortOption.value = option)}>
          {option}
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
</section>

{#if sortedFilteredChecklists.length === 0}
  <section class="flex flex-1 items-center justify-center">
    <p class="text-lg font-semibold">No checklists found</p>
  </section>
{/if}

{#each sortedFilteredChecklists as checklist (checklist.name)}
  {@const { name, description, items, createDate, updateDate } = checklist}
  <a href={`/check/${name}`}>
    <Card.Root class="my-2">
      <Card.Header class="pt-2">
        <Progress value={getCompletionPercentage(checklist)} max={1} class="mt-2 h-2" />
      </Card.Header>
      <Card.Content>
        <Card.Title class="flex items-center">
          {name}
        </Card.Title>
        {#if checklist.description}
          <Card.Description class="mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {description}
          </Card.Description>
        {/if}
      </Card.Content>
      <Card.Footer class="flex-wrap space-x-1">
        <Badge variant="secondary">Created:&nbsp;{createDate.toLocaleDateString('en-US')}</Badge>
        <Badge variant="secondary">{items.length}&nbsp;items</Badge>
        {#if items.length > 0 && items.every((i) => i.completeDate != null)}
          <Badge variant="secondary">Completed</Badge>
        {/if}
      </Card.Footer>
    </Card.Root>
  </a>
{/each}
