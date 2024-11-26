<script lang="ts">
  import { exportData, importData } from '$lib/checklistUtils.svelte';
  import { Button } from '$lib/components/ui/button';
  import Input from '$lib/components/ui/input/input.svelte';
  import Moon from 'lucide-svelte/icons/moon';
  import Sun from 'lucide-svelte/icons/sun';
  import { toggleMode } from 'mode-watcher';
</script>

<section>
  <p class="text-lg font-semibold">
    A minimal checklist app by <a
      href="https://github.com/andrewthehan/check"
      target="_blank"
      class="underline">@andrewthehan</a
    >.
  </p>
</section>

<section>
  <h1
    class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
  >
    Features
  </h1>
  <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
    <li>
      Use <a href="https://webllm.mlc.ai/" target="_blank" class="underline">in-browser AI</a> to generate
      your checklists.
    </li>
    <li>
      Store all your data
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
        target="_blank"
        class="underline"
      >
        locally
      </a>.
    </li>
    <li>Reuse and share checklists.</li>
  </ul>
</section>

<section>
  <h1
    class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
  >
    Settings
  </h1>
  <div class="setting-item">
    Theme:
    <Button class="ml-2" on:click={toggleMode} variant="outline" size="icon">
      <Sun
        class="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </Button>
  </div>

  <div class="setting-item">
    <Button class="cursor-pointer" variant="outline">
      <label class="cursor-pointer" for="import">Import data</label>
      <Input
        id="import"
        class="hidden"
        type="file"
        accept="application/JSON"
        onchange={async (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
          const file = e.currentTarget.files?.[0];
          if (file == null) return;
          const checklists = await importData(file);
          alert(`Imported ${checklists.length} checklists.`);
        }}
      />
    </Button>
    <Button class="ml-2" variant="outline" onclick={exportData}>Export all data</Button>
  </div>
</section>

<style>
  section {
    margin: 12px 0;
  }

  .setting-item {
    display: flex;
    align-items: center;
    margin: 12px 0;
  }
</style>
