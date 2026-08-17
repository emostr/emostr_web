<script lang="ts">
  import SectionHead from './SectionHead.svelte';
  import TechIcon from './TechIcon.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { stack } from '$lib/data/stack';
</script>

<section id="stack" class="border-t border-line py-20 md:py-28">
  <div class="shell">
    <SectionHead
      label="Стек"
      accent="var(--color-brand-purple)"
      title="Инструменты подбираются под задачу, а не наоборот"
      text="Язык и фреймворк — это следствие требований: где-то нужен быстрый сервис на Go, где-то привычный заказчику PHP, где-то интерфейс, который должен летать на слабом железе."
    />

    <div class="mt-14 flex flex-col gap-12 md:gap-16">
      {#each stack as group (group.title)}
        <div class="grid gap-6 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10">
          <div class="flex items-center gap-4 md:block" use:reveal>
            <h3 class="label" style="color: {group.accent}">{group.title}</h3>
            <span class="mt-2 hidden h-px w-10 md:block" style="background: {group.accent}"></span>
            <span class="text-xs text-faint tabular-nums md:mt-2 md:block"
              >{group.items.length}</span
            >
          </div>

          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {#each group.items as tech, i (tech.id)}
              <div
                class="tile group flex items-start gap-4 p-5"
                style="--tile-accent: {tech.color}"
                use:reveal={{ delay: i * 60 }}
              >
                <span
                  class="mt-0.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                >
                  <TechIcon id={tech.id} name={tech.name} color={tech.color} size={26} />
                </span>
                <span class="flex flex-col">
                  <span class="font-bold tracking-tight">{tech.name}</span>
                  <span class="text-sm text-muted">{tech.note}</span>
                </span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
