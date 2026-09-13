<script lang="ts">
  import { iconPaths } from '$lib/data/icons';

  type Props = {
    id: string;
    class?: string;
  };

  let { id, class: className = 'size-4' }: Props = $props();
</script>

<svg class={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d={iconPaths[id]} />
</svg>
