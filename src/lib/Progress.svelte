<script lang="ts">
  let { value, max } = $props<{ value: number; max: number }>();
  const percent: number = $derived(max === 0 ? 0 : (value / max) * 100);
</script>

<div class="progress-container">
  <div class="progress-border"></div>
  <div class="progress-text">
    {value} / {max} ({percent.toFixed(0)}%)
  </div>
  <div class="progress-bar" style="--progress-percent: {percent}%;"></div>
</div>

<style>
  .progress-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: var(--color, hsl(var(--primary)));
    border-radius: 5px;
    filter: invert(1);

    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .progress-border {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid var(--color, hsl(var(--primary)));
    border-radius: 5px;
    filter: invert(1);
  }

  .progress-bar {
    position: absolute;
    height: 100%;
    width: var(--progress-percent);

    background-color: black;
    filter: invert(1);
    mix-blend-mode: difference;
    transition: width 0.2s ease;
  }

  .progress-text {
    align-self: center;
    font-size: var(--progress-text-size, 1rem);
    color: var(--color, hsl(var(--primary)));
    filter: invert(1);
  }
</style>
