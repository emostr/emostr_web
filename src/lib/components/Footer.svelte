<script lang="ts">
  import BrandMark from './BrandMark.svelte';

  const year = new Date().getFullYear();
</script>

<footer class="border-t border-line py-10">
  <div class="shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
    <BrandMark size={26} text="text-base" />

    <p class="text-sm text-faint">
      © {year} emostr. Made on Svelte
    </p>

    <a
      href="#top"
      class="label link-underline text-muted transition-colors duration-300 hover:text-ink"
    >
      Наверх ↑
    </a>
  </div>
</footer>
