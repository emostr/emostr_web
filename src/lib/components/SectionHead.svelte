<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  type Props = {
    label: string;
    title: string;
    text?: string;
    accent?: string;
  };

  let { label, title, text = '', accent = 'var(--color-accent)' }: Props = $props();
</script>

<div class="max-w-2xl">
  <p class="label flex items-center gap-3" style="color: {accent}" use:reveal>
    <span class="h-px w-8" style="background: {accent}"></span>
    {label}
  </p>
  <h2
    class="mt-4 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-[2.75rem]"
    use:reveal={{ delay: 60 }}
  >
    {title}
  </h2>
  {#if text}
    <p class="mt-5 text-base text-muted md:text-lg" use:reveal={{ delay: 120 }}>{text}</p>
  {/if}
</div>
