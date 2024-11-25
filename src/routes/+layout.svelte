<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import CheckCircle from 'lucide-svelte/icons/check-circle';
  import Layers from 'lucide-svelte/icons/layers';
  import { ModeWatcher } from 'mode-watcher';
  import { type Snippet } from 'svelte';
  import '../app.css';

  export let children: Snippet;
</script>

<svelte:head>
  <title>Check</title>
  <meta name="description" content="Checklist app" />
</svelte:head>

<ModeWatcher />
<div class="root">
  <header>
    <a href="/" class="home"><CheckCircle class="mr-2 h-4 w-4" />Check</a>
    <Button href="/check" variant="outline">
      <Layers class="mr-2 h-4 w-4" />
      My checklists
    </Button>
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
    padding: 12px 0;

    width: 768px;
    max-width: 90vw;
  }

  .home {
    display: flex;
    flex-flow: row;
    align-items: center;

    font-size: 1.3rem;
  }

  main {
    flex: 1;

    display: flex;
    flex-direction: column;

    width: 768px;
    max-width: 88vw;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }
</style>
