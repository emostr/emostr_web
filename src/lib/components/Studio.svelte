<script lang="ts">
  import SectionHead from './SectionHead.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { services } from '$lib/data/services';
</script>

<section id="studio" class="py-20 md:py-28">
  <div class="shell">
    <SectionHead
      label="Студия"
      title="Один человек, полный цикл и ИИ в качестве инструмента"
      text="emostr берёт задачу целиком: от разговора о том, что вообще нужно, до сервера, на котором это работает. Ниже — то, из чего обычно состоит проект."
    />

    <div class="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
      {#each services as service, i (service.index)}
        <article
          class="tile group flex flex-col gap-4 border-0 p-7 md:p-9"
          style="--tile-accent: {service.accent}"
          use:reveal={{ delay: i * 90 }}
        >
          <div class="flex items-baseline justify-between gap-4">
            <span
              class="text-3xl font-extrabold tracking-tight tabular-nums opacity-25 transition-opacity duration-500 group-hover:opacity-100"
              style="color: {service.accent}">{service.index}</span
            >
            <span
              class="h-px flex-1 origin-right scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              style="background: {service.accent}"
            ></span>
          </div>

          <h3 class="text-xl font-bold tracking-tight md:text-2xl">{service.title}</h3>
          <p class="text-muted">{service.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
