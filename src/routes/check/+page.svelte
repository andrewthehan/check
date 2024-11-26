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
      <Card.Content>
        <Card.Title class="flex items-center">
          {name}
          <Badge class="ml-2" variant="secondary">{items.length} items</Badge>
          {#if items.length > 0 && items.every((i) => i.completeDate != null)}
            <Badge class="ml-1" variant="secondary">Completed</Badge>
          {/if}
        </Card.Title>
        <Card.Description class="overflow-hidden text-ellipsis whitespace-nowrap italic">
          {description.length > 0 ? description : 'No description'}
        </Card.Description>
      </Card.Content>
      <Card.Footer>
        <Progress value={getCompletionPercentage(checklist)} max={1} class="h-2" />
      </Card.Footer>
    </Card.Root>
  </a>
{/each}
