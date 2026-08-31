<script lang="ts">
  import SectionHead from './SectionHead.svelte';
  import TechIcon from './TechIcon.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { projects } from '$lib/data/projects';
</script>

<section id="projects" class="border-t border-line py-20 md:py-28">
  <div class="shell">
    <SectionHead
      label="Проекты"
      accent="var(--color-brand-yellow)"
      title="Что уже работает"
      text="Пока витрина короткая — зато всё в ней настоящее, с открытым исходным кодом и живым развёртыванием."
    />

    <div class="mt-14 flex flex-col gap-8">
      {#each projects as project (project.id)}
        <article
          class="tile p-0"
          style="--tile-accent: {project.accent}"
          use:reveal={{ threshold: 0.05 }}
        >
          <div class="grid md:grid-cols-[minmax(0,1fr)_15rem]">
            <div class="order-last p-7 md:order-first md:p-10">
              <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span class="label" style="color: {project.accent}">{project.status}</span>
                <span class="h-3 w-px bg-line-strong"></span>
                <span class="label text-faint">{project.year}</span>
              </div>

              <h3 class="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
                {project.name}
              </h3>
              <p class="mt-2 text-base font-semibold text-muted">{project.subtitle}</p>
              <p class="mt-5 max-w-2xl text-muted">{project.description}</p>

              <ul class="mt-7 grid gap-2.5 sm:grid-cols-2">
                {#each project.features as feature (feature)}
                  <li class="flex gap-3 text-sm text-muted">
                    <span
                      class="mt-2 h-1 w-1 shrink-0"
                      style="background: {project.accent}"
                      aria-hidden="true"
                    ></span>
                    {feature}
                  </li>
                {/each}
              </ul>

              <ul class="mt-8 flex flex-wrap gap-2">
                {#each project.tech as tech (tech)}
                  <li
                    class="label border border-line px-2.5 py-1.5 text-faint transition-colors duration-300 hover:border-line-strong hover:text-muted"
                  >
                    {tech}
                  </li>
                {/each}
              </ul>

              <div class="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  class="group flex items-center gap-3 bg-ink px-5 py-3 font-bold text-bg transition-all duration-300 hover:gap-4"
                >
                  <TechIcon id="github" name="GH" size={18} />
                  Открыть на GitHub
                  <span class="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </a>
                <a
                  href={project.licenseHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  class="label border border-line-strong px-4 py-3 text-muted transition-colors duration-300 hover:border-accent hover:text-ink"
                >
                  Лицензия {project.license}
                </a>
              </div>
            </div>

            <div
              class="order-first flex items-center justify-center border-line p-8 md:order-last md:border-l"
              style="background: linear-gradient(160deg, color-mix(in srgb, {project.accent} 12%, transparent), transparent 70%)"
            >
              <span
                class="text-[5rem] leading-none font-extrabold tracking-tighter opacity-20 md:text-[7rem]"
                style="color: {project.accent}"
                aria-hidden="true"></span
              >
            </div>
          </div>
        </article>
      {/each}

      <article
        class="relative overflow-hidden border border-dashed border-line-strong p-7 md:p-10"
        use:reveal={{ delay: 80 }}
      >
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="label text-faint">Следующий проект</p>
            <h3 class="mt-3 text-xl font-bold tracking-tight md:text-2xl">
              Никому не ведано, что будет дальше. Ясно одно — это будет что-то интересное.
            </h3>
            <p class="mt-3 max-w-xl text-muted">
              Новые платформы уже в работе — как только их можно будет показать, они появятся здесь.
              Если у вас есть задача, её место может быть следующим.
            </p>
          </div>
          <a
            href="#contact"
            class="group flex shrink-0 items-center gap-3 border border-line-strong px-5 py-3 font-bold transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Предложить задачу
            <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </article>
    </div>
  </div>
</section>
