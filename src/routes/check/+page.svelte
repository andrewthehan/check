<script lang="ts">
	import { checklistsStore } from '$lib/checklistUtils.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Progress } from '$lib/components/ui/progress';
	import Plus from 'lucide-svelte/icons/plus';

	const checklists = checklistsStore();

	let filter = $state('');

	const filteredChecklists = $derived(
		checklists.value.filter((c) => c.name.toLocaleUpperCase().includes(filter.toLocaleUpperCase()))
	);
</script>

<section class="header">
	<Input type="text" bind:value={filter} placeholder="Search" />
	<Button class="mx-2" href="/new" size="sm"><Plus class="mr-2 h-4 w-4" />Create</Button>
</section>

<section>
	{#if filteredChecklists.length === 0}
		<p>No checklists found</p>
	{/if}

	{#each filteredChecklists as checklist}
		{@const { name, description, items, createDate, updateDate } = checklist}

		<a href={`/check/${name}`}>
			<Card.Root class="my-2">
				<Card.Content>
					<Card.Title class="flex items-center">
						{name}
						<Badge class="ml-2" variant="secondary">{items.length} items</Badge>
						{#if items.every((i) => i.completed)}
							<Badge class="ml-1" variant="secondary">Completed</Badge>
						{/if}
					</Card.Title>
					<Card.Description
						>{description.length > 0 ? description : 'No description'}</Card.Description
					>
				</Card.Content>
				<Card.Footer>
					<Progress
						value={checklist.items.filter((i) => i.completed).length / checklist.items.length}
						max={1}
						class="h-2"
					/>
				</Card.Footer>
			</Card.Root>
		</a>
	{/each}
</section>

<style>
	.header {
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;
	}

	section {
		margin: 12px 0;
	}
</style>
