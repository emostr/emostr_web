<script lang="ts">
  import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
  import SparklesIcon from '@lucide/svelte/icons/sparkles';
  import * as Card from '$lib/components/ui/card/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { reveal } from '$lib/actions/reveal';
  import { displayUrl, projects } from '$lib/data/projects';
</script>

<section id="projects" class="mx-auto max-w-3xl px-5 py-10">
  <div use:reveal>
    <h2 class="text-2xl font-semibold tracking-tight">Проекты</h2>
    <p class="mt-2 flex items-center gap-2 text-muted-foreground">
      <SparklesIcon class="size-4 shrink-0" />
      Все проекты ниже сделаны нейросетью.
    </p>
  </div>

  <div class="mt-6" use:reveal={{ delay: 80 }}>
    <Card.Root class="gap-0 py-0">
      <ul class="divide-y">
        {#each projects as project (project.id)}
          <li>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              class="group flex flex-col gap-3 px-6 py-5 transition-colors duration-200 hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="font-medium">{project.name}</span>
                  {#if project.status}
                    <Badge variant="secondary">{project.status}</Badge>
                  {/if}
                  {#if project.ai}
                    <Badge variant="outline" class="gap-1 text-muted-foreground">
                      <SparklesIcon />
                      Сделано нейросетью
                    </Badge>
                  {/if}
                </div>
                <p class="mt-1 text-sm text-muted-foreground">{project.summary}</p>
              </div>

              <span
                class="flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
              >
                {displayUrl(project.href)}
                <ArrowUpRightIcon
                  class="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </li>
        {/each}
      </ul>
    </Card.Root>
  </div>
</section>
