<script lang="ts">
  import { slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import BrandMark from './BrandMark.svelte';
  import TechIcon from './TechIcon.svelte';
  import { nav } from '$lib/data/site';

  let scrollY = $state(0);
  let docHeight = $state(1);
  let viewport = $state(1);
  let open = $state(false);
  let active = $state('');

  const scrolled = $derived(scrollY > 12);
  const progress = $derived(Math.min(1, scrollY / Math.max(1, docHeight - viewport)));

  $effect(() => {
    const measure = () => {
      docHeight = document.documentElement.scrollHeight;
      viewport = window.innerHeight;
    };
    measure();
    window.addEventListener('resize', measure);
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    return () => {
      window.removeEventListener('resize', measure);
      observer.disconnect();
    };
  });

  $effect(() => {
    const sections = nav
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) active = `#${visible.target.id}`;
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  });

  function close() {
    open = false;
  }
</script>

<svelte:window
  bind:scrollY
  onkeydown={(event: KeyboardEvent) => event.key === 'Escape' && close()}
/>

<header
  class="fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 {scrolled ||
  open
    ? 'border-line bg-bg/95 backdrop-blur-xl'
    : 'border-transparent'}"
>
  <div
    class="absolute inset-x-0 top-0 h-px origin-left bg-accent transition-opacity duration-500"
    style="transform: scaleX({progress}); opacity: {scrolled ? 1 : 0}"
  ></div>

  <div class="shell flex h-16 items-center justify-between gap-4 md:h-20">
    <a href="#top" class="-m-2 p-2" onclick={close} aria-label="emostr — в начало">
      <BrandMark
        size={scrolled ? 28 : 32}
        text="text-lg md:text-xl"
        class="transition-all duration-500"
      />
    </a>

    <nav class="hidden items-center gap-1 md:flex" aria-label="Разделы сайта">
      {#each nav as item (item.href)}
        <a
          href={item.href}
          class="label px-3 py-2 transition-colors duration-300 hover:text-ink {active === item.href
            ? 'text-ink'
            : 'text-muted'}"
        >
          <span class="relative">
            {item.label}
            <span
              class="absolute -bottom-1.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style="transform: scaleX({active === item.href ? 1 : 0})"
            ></span>
          </span>
        </a>
      {/each}

      <a
        href="https://github.com/emostr"
        target="_blank"
        rel="noreferrer noopener"
        class="ml-3 flex items-center gap-2 border border-line-strong px-3.5 py-2 text-muted transition-colors duration-300 hover:border-accent hover:text-ink"
      >
        <TechIcon id="github" name="GH" size={16} />
        <span class="label">GitHub</span>
      </a>
    </nav>

    <button
      type="button"
      class="relative h-10 w-10 border border-line-strong transition-colors duration-300 hover:border-accent md:hidden"
      onclick={() => (open = !open)}
      aria-expanded={open}
      aria-controls="mobile-nav"
      aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
    >
      <span
        class="absolute left-1/2 h-px w-5 bg-ink transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style="top: {open ? '50%' : 'calc(50% - 4px)'}; transform: translateX(-50%) rotate({open
          ? 45
          : 0}deg)"
      ></span>
      <span
        class="absolute left-1/2 h-px w-5 bg-ink transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style="top: {open ? '50%' : 'calc(50% + 4px)'}; transform: translateX(-50%) rotate({open
          ? -45
          : 0}deg)"
      ></span>
    </button>
  </div>

  {#if open}
    <nav
      id="mobile-nav"
      class="overflow-hidden border-t border-line md:hidden"
      transition:slide={{ duration: 320, easing: cubicOut }}
      aria-label="Разделы сайта"
    >
      <div class="shell flex flex-col py-2">
        {#each nav as item, i (item.href)}
          <a
            href={item.href}
            onclick={close}
            class="enter flex items-center justify-between border-b border-line py-4 text-base font-semibold transition-colors duration-300 last:border-0 hover:text-accent"
            style="--enter-delay: {i * 45}ms"
          >
            {item.label}
            <span class="text-faint">→</span>
          </a>
        {/each}
        <a
          href="https://github.com/emostr"
          target="_blank"
          rel="noreferrer noopener"
          onclick={close}
          class="mt-4 mb-3 flex items-center justify-center gap-2 bg-accent px-4 py-3 font-bold text-on-accent"
        >
          <TechIcon id="github" name="GH" size={16} />
          GitHub
        </a>
      </div>
    </nav>
  {/if}
</header>
