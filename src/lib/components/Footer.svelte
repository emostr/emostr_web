<script lang="ts">
  import { Separator } from '$lib/components/ui/separator/index.js';

  const year = new Date().getFullYear();
</script>

<footer class="mx-auto max-w-3xl px-5 pb-10">
  <Separator />
  <div
    class="flex flex-col gap-2 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
  >
    <p>© {year} emostr</p>
    <p>Сделано на Svelte и shadcn-svelte</p>
  </div>
</footer>
