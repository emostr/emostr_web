<script lang="ts">
  import TechIcon from './TechIcon.svelte';
  import { stackFlat } from '$lib/data/stack';

  const lane = [...stackFlat, ...stackFlat];
</script>

<div class="relative overflow-hidden border-y border-line bg-surface/40 py-5" aria-hidden="true">
  <div class="ticker flex w-max items-center gap-10 px-5 md:gap-14">
    {#each lane as tech, i (tech.id + i)}
      <span class="flex shrink-0 items-center gap-2.5 text-muted">
        <TechIcon id={tech.id} name={tech.name} color={tech.color} size={20} />
        <span class="label whitespace-nowrap">{tech.name}</span>
      </span>
    {/each}
  </div>

  <div
    class="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent md:w-28"
  ></div>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent md:w-28"
  ></div>
</div>

<style>
  .ticker {
    animation: marquee 42s linear infinite;
  }
  .ticker:hover {
    animation-play-state: paused;
  }
</style>
