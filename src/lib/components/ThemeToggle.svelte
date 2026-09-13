<script lang="ts">
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import { toggleMode } from 'mode-watcher';
  import { Button } from '$lib/components/ui/button/index.js';
</script>

<Button variant="ghost" size="icon" onclick={toggleMode} aria-label="Сменить тему">
  <SunIcon class="scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-90" />
  <MoonIcon
    class="absolute scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0"
  />
</Button>
