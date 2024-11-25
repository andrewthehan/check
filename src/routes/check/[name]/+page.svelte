<script lang="ts">
	import { page } from '$app/stores';
	import { checklistsStore, createShareLink } from '$lib/checklistUtils.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Progress } from '$lib/components/ui/progress';
	import QR from '@svelte-put/qr/svg/QR.svelte';
	import QrCode from 'lucide-svelte/icons/qr-code';
	import Trash2 from 'lucide-svelte/icons/trash-2';

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
	<Progress
		class="my-4 h-2"
		value={checklist.items.filter((i) => i.completed).length / checklist.items.length}
		max={1}
	/>
	<section class="header">
		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex items-center">
			{name}
			{#if checklist.items.every((i) => i.completed)}
				<Badge class="ml-2" variant="secondary">Completed</Badge>
			{/if}
		</h1>
		<Dialog.Root>
			<Dialog.Trigger><QrCode /></Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[425px]">
				<Dialog.Header>
					<Dialog.Title>Copy checklist</Dialog.Title>
				</Dialog.Header>
				<QR
					data={shareUrl}
					moduleFill="white"
					anchorOuterFill="#3F3FAA"
					anchorInnerFill="#FFA400"
				/>
			</Dialog.Content>
		</Dialog.Root>
	</section>
	<p class="my-4 text-lg font-semibold">{checklist.description}</p>
	<p class="text-muted-foreground text-sm">
		Created: {new Date(checklist.createDate).toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>
	<p class="text-muted-foreground text-sm">
		Last updated: {new Date(checklist.updateDate).toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>

	<form
		class="my-4 flex"
		onsubmit={() => {
			if (newItem.trim() === '') {
				return;
			}
			checklist.items.push({ name: newItem, completed: false });
		}}
	>
		<Input type="text" placeholder="Add item" bind:value={newItem} />
		<Button class="ml-4" type="submit">Add</Button>
	</form>

	{#each checklist.items as item, i}
		<section class="item">
			<Checkbox id={`item${i}`} bind:checked={checklist.items[i].completed} />
			<Label
				class={`flex-1 ml-6 ${checklist.items[i].completed ? 'line-through' : ''}`}
				for={`item${i}`}>{checklist.items[i].name}</Label
			>
			<Button
				class="align-self-end"
				onclick={() => checklist.items.splice(i, 1)}
				size="icon"
				variant="ghost"><Trash2 class="h-4 w-4" /></Button
			>
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
		margin: 12px;
	}
</style>
