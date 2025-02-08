<script lang="ts">
  let { value, max } = $props<{ value: number; max: number }>();
  const percent: number = $derived((value / max) * 100);
</script>

<div class="progress-container">
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
    background-color: hsl(var(--primary));
    outline: 1px solid hsl(var(--secondary));
    border-radius: 5px;
    filter: invert(1);

    display: flex;
    flex-flow: column;
    justify-content: center;
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
    color: hsl(var(--primary));
    filter: invert(1);
  }
</style>
