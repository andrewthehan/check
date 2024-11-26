<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { Button } from '$lib/components/ui/button';
  import CheckCircle from 'lucide-svelte/icons/check-circle';
  import Layers from 'lucide-svelte/icons/layers';
  import Plus from 'lucide-svelte/icons/plus';
  import { ModeWatcher } from 'mode-watcher';
  import { type Snippet } from 'svelte';
  import '../app.css';

  export let children: Snippet;

  afterNavigate(() => document.getElementById('main')?.scrollTo(0, 0));
</script>

<svelte:head>
  <title>Check</title>
  <meta name="description" content="Checklist app" />
</svelte:head>

<ModeWatcher />
<div class="root">
  <header>
    <a href="/" class="home"><CheckCircle class="mr-2 h-4 w-4" />Check</a>
    <div>
      <Button class="mr-2" href="/check" variant="outline">
        <Layers class="mr-2 h-4 w-4" />
        My checklists
      </Button>
      <Button href="/new" size="icon">
        <Plus class="h-4 w-4" />
      </Button>
    </div>
  </header>

  <main id="main">
    <div class="main-content">
      {@render children()}
    </div>
  </main>
</div>

<style>
  .root {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100vh;
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
    font-weight: bold;
  }

  main {
    width: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
  }

  .main-content {
    display: flex;
    flex-direction: column;

    width: 768px;
    max-width: 90vw;

    height: 100%;
  }
</style>
