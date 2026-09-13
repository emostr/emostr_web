<script lang="ts">
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { maintenance } from '$lib/data/site';

  let { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />

{#if maintenance}
  <main>
    {@render children?.()}
  </main>
{:else}
  <Header />

  <main>
    {@render children?.()}
  </main>

  <Footer />
{/if}
