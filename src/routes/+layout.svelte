<script lang="ts">
  import '../app.css';
  import Backdrop from '$lib/components/Backdrop.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<a
  href="#studio"
  class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-on-accent"
>
  Перейти к содержимому
</a>

<Backdrop />
<Header />

<main>
  {@render children?.()}
</main>

<Footer />
