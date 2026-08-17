<script lang="ts">
  import SectionHead from './SectionHead.svelte';
  import TechIcon from './TechIcon.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { contacts } from '$lib/data/site';
</script>

<section id="contact" class="border-t border-line py-20 md:py-28">
  <div class="shell">
    <SectionHead
      label="Контакты"
      accent="var(--color-brand-red)"
      title="Расскажите, что нужно собрать"
      text="Опишите задачу в двух словах — отвечу, что из этого реально сделать, за какой срок и каким стеком. Первичная оценка ничего не стоит."
    />

    <div class="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
      {#each contacts as contact, i (contact.id)}
        <a
          href={contact.href}
          target={contact.href.startsWith('http') ? '_blank' : undefined}
          rel={contact.href.startsWith('http') ? 'noreferrer noopener' : undefined}
          class="tile group flex flex-col justify-between gap-8 border-0 p-7 md:p-9"
          style="--tile-accent: {contact.color}"
          use:reveal={{ delay: i * 90 }}
        >
          <span
            class="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1"
          >
            <TechIcon id={contact.icon} name={contact.label} color={contact.color} size={28} />
          </span>

          <span class="flex flex-col gap-1">
            <span class="label text-faint">{contact.label}</span>
            <span class="flex items-center gap-2 text-lg font-bold tracking-tight break-all">
              {contact.value}
              <span
                class="shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true">↗</span
              >
            </span>
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>
