<script lang="ts">
  import { base } from '$app/paths';

  type Props = {
    class?: string;
  };

  let { class: className = 'h-8 w-auto' }: Props = $props();
</script>

<img
  src="{base}/logo-on-light.svg"
  alt="emostr"
  width="190"
  height="80"
  draggable="false"
  class="block select-none dark:hidden {className}"
/>
<img
  src="{base}/logo-on-dark.svg"
  alt="emostr"
  width="190"
  height="80"
  draggable="false"
  class="hidden select-none dark:block {className}"
/>
