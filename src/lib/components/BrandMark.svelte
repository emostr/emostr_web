<script lang="ts">
  import { base } from '$app/paths';

  type Props = {
    size?: number;
    text?: string;
    class?: string;
    float?: boolean;
  };

  let { size = 32, text = 'text-xl', class: className = '', float = false }: Props = $props();
</script>

<span class="flex items-center gap-2.5 {className}">
  <picture class="block shrink-0">
    <source srcset="{base}/logo.webp" type="image/webp" />
    <img
      src="{base}/logo.png"
      alt="Логотип emostr"
      width={size}
      height={size}
      style="width:{size}px; height:{size}px; {float ? 'animation: float-slow 7s ease-in-out infinite;' : ''}"
      class="block select-none object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      draggable="false"
      fetchpriority={float ? 'high' : 'auto'}
    />
  </picture>
  <span class="{text} font-extrabold tracking-tight lowercase">emostr</span>
</span>
