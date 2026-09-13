<script lang="ts">
  import MailIcon from '@lucide/svelte/icons/mail';
  import BrandIcon from './BrandIcon.svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import { reveal } from '$lib/actions/reveal';
  import { contacts } from '$lib/data/site';
</script>

<section id="contacts" class="mx-auto max-w-3xl px-5 pt-10 pb-16">
  <div use:reveal>
    <h2 class="text-2xl font-semibold tracking-tight">Контакты</h2>
    <p class="mt-2 text-muted-foreground">Проще всего написать в Telegram.</p>
  </div>

  <div class="mt-6 flex flex-wrap gap-3" use:reveal={{ delay: 80 }}>
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
