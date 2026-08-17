<script lang="ts">
  import { iconPaths } from '$lib/data/icons';

  type Props = {
    id: string;
    name: string;
    color?: string;
    size?: number;
    class?: string;
  };

  let { id, name, color = 'currentColor', size = 24, class: className = '' }: Props = $props();

  const path = $derived(iconPaths[id]);
  const markFont = $derived(name.length <= 2 ? size * 0.44 : size * 0.3);
</script>

{#if path}
  <svg
    class={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    role="img"
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
{:else}
  <span
    class="grid shrink-0 place-items-center border font-extrabold tracking-tight {className}"
    style="color:{color}; border-color:{color}; width:{size}px; height:{size}px; font-size:{markFont}px; line-height:1"
    aria-hidden="true">{name}</span
  >
{/if}
