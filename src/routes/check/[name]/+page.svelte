<script lang="ts">
	import { page } from '$app/stores';
	import QR from '@svelte-put/qr/svg/QR.svelte';

	const { params, url } = $page;
	const { name } = params;

	const initialData = localStorage.getItem(name);
	const data = $state(initialData != null ? JSON.parse(initialData) : null);
	$effect(() => {
		if (data == null) {
			return;
		}
		localStorage.setItem(name, JSON.stringify(data));
	});

	let showQR = $state(false);
	const shareUrl = $derived(
		encodeURI(
			`${url.origin}/new?name=${name}&description=${data.description}&items=${data.items.map((item) => item.label).join(',')}`
		)
	);
</script>

{#if initialData == null}
	<p>Checklist not found.</p>
	<button onclick={() => (window.location.href = `/new?name=${name}`)}>Create {name}</button>
{:else}
	<h1>{name}</h1>
	<p>{data.description}</p>
	<div>
		<button onclick={() => (showQR = !showQR)}>{showQR ? 'Hide QR' : 'Share QR'}</button>
		{#if showQR}
			<QR data={shareUrl} moduleFill="white" anchorOuterFill="#3F3FAA" anchorInnerFill="#FFA400" />
		{/if}
	</div>
	{#each data.items as item, i}
		<section class="item">
			<input id={`item${i}`} type="checkbox" bind:checked={data.items[i].checked} />
			<label for={`item${i}`}>{data.items[i].label}</label>
		</section>
	{/each}
{/if}

<style>
	.item {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 12px;
		border: 1px solid #ccc;
		border-radius: 4px;
		margin: 12px;
	}

	.item input {
		margin-right: 12px;
	}

	/* strikethrough when checked */
	.item input:checked + label {
		text-decoration: line-through;
	}
</style>
