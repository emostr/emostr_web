<script lang="ts">
  import MailIcon from '@lucide/svelte/icons/mail';
  import Logo from './Logo.svelte';
  import BrandIcon from './BrandIcon.svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { contacts } from '$lib/data/site';
</script>

<section class="flex min-h-svh flex-col items-center justify-center px-5 py-20 text-center">
  <div class="enter" style="--enter-delay: 40ms">
    <Logo class="h-24 w-auto sm:h-28" />
  </div>

  <div class="enter mt-10" style="--enter-delay: 160ms">
    <Badge variant="outline">Технические работы</Badge>
  </div>

  <h1
    class="enter mt-5 text-4xl font-bold tracking-tight sm:text-5xl"
    style="--enter-delay: 240ms"
  >
    Сайт на реконструкции
  </h1>

  <p class="enter mt-4 max-w-md text-muted-foreground" style="--enter-delay: 320ms">
    Скоро вернусь. А пока можно написать напрямую.
  </p>

  <div class="enter mt-8 flex flex-wrap justify-center gap-3" style="--enter-delay: 400ms">
    {#each contacts as contact (contact.id)}
      <Button
        href={contact.href}
        target={contact.href.startsWith('http') ? '_blank' : undefined}
        rel={contact.href.startsWith('http') ? 'noreferrer noopener' : undefined}
        variant="outline"
      >
        {#if contact.icon === 'mail'}
          <MailIcon />
        {:else}
          <BrandIcon id={contact.icon} />
        {/if}
        {contact.value}
      </Button>
    {/each}
  </div>
</section>
