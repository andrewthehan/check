<script lang="ts">
	import { type Snippet } from 'svelte';
	import '../app.css';
	export let children: Snippet;
</script>

<svelte:head>
	<title>Check</title>
	<meta name="description" content="Checklist app" />
</svelte:head>

<div class="root">
	<header>
		<a href="/" class="header-label">Check</a>
	</header>

	<main>
		{@render children()}
	</main>

	<footer></footer>
</div>

<style>
	.root {
		display: flex;
		flex-flow: column;
		align-items: center;
		min-height: 100vh;
	}

	header {
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;
		padding: 12px;

		width: 768px;
		max-width: 90vw;
	}

	.header-label {
		font-size: 1.5rem;
	}

	main {
		flex: 1;

		display: flex;
		flex-direction: column;

		width: 768px;
		max-width: 90vw;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
</style>
