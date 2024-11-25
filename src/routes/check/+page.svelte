<script lang="ts">
	const data = Object.entries(localStorage);
</script>

<h1>Checklists</h1>
{#each data as checklist}
	{@const name = checklist[0]}
	{@const { description, items } = JSON.parse(checklist[1])}
	<a href={`/check/${name}`}
		><section>
			<h1>{name}</h1>
			<p>{description}</p>
			<p>{items.length} items</p>
		</section></a
	>
{/each}

<style>
	section {
		display: flex;
		flex-direction: column;
		padding: 12px;
		border: 1px solid #ccc;
		border-radius: 4px;
		margin: 12px;
	}

	section h1 {
		margin: 0;
	}

	section p {
		margin: 0;
	}
</style>
