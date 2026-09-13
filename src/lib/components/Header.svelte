<script lang="ts">
  import Logo from './Logo.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import BrandIcon from './BrandIcon.svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import { githubUrl, nav } from '$lib/data/site';

  let scrollY = $state(0);
  const scrolled = $derived(scrollY > 8);
</script>

<svelte:window bind:scrollY />

<header
  class="sticky top-0 z-50 border-b transition-colors duration-300 {scrolled
    ? 'border-border bg-background/80 backdrop-blur-lg'
    : 'border-transparent'}"
>
  <div class="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-5">
    <a href="#top" aria-label="emostr — в начало" class="shrink-0">
      <Logo class="h-9 w-auto" />
    </a>

    <div class="flex items-center gap-1">
      <nav class="hidden items-center gap-1 sm:flex" aria-label="Разделы">
        {#each nav as item (item.href)}
          <Button href={item.href} variant="ghost" size="sm" class="text-muted-foreground">
            {item.label}
          </Button>
        {/each}
      </nav>
      <Button
        href={githubUrl}
        target="_blank"
        rel="noreferrer noopener"
        variant="ghost"
        size="icon"
        aria-label="GitHub"
      >
        <BrandIcon id="github" />
      </Button>
      <ThemeToggle />
    </div>
  </div>
</header>
