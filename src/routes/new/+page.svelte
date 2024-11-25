<script lang="ts">
	import { page } from '$app/stores';

	const { url } = $page;

	let name = $state(url.searchParams.get('name') ?? '');
	let description = $state(url.searchParams.get('description') ?? '');
	let items = $state(url.searchParams.get('items')?.split(',') ?? []);

	url.searchParams.delete('name');
	url.searchParams.delete('description');
	url.searchParams.delete('items');

	function submit() {
		const data = {
			description,
			items: items.map((item) => ({ label: item, checked: false }))
		};

		localStorage.setItem(name, JSON.stringify(data));

		window.location.href = `/check/${name}`;
	}
</script>

<form onsubmit={submit}>
	<p>
		<label for="name">Name</label>
		<input id="name" type="text" bind:value={name} placeholder="Name" />
	</p>
	<p>
		<label for="description">Description</label>
		<input id="description" type="text" bind:value={description} placeholder="Description" />
	</p>
	<p>
		{#each items as item, i}
			<label for={`item${i}`}>Item #{i}</label>
			<input id={`item${i}`} type="text" bind:value={items[i]} placeholder="Item #{i}" />
		{/each}
		<button
			onclick={(event) => {
				event.preventDefault();
				items.push('new item');
			}}>Add</button
		>
	</p>
	<input type="submit" value="Create!" />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
	}

	form p {
		display: flex;
		flex-direction: column;
	}
</style>
