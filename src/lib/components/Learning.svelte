<script lang="ts">
  import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
  import BrandIcon from './BrandIcon.svelte';
  import * as Card from '$lib/components/ui/card/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { reveal } from '$lib/actions/reveal';
  import { githubUrl } from '$lib/data/site';
</script>

<section id="ruby" class="mx-auto max-w-3xl px-5 py-10">
  <div class="grid gap-4 sm:grid-cols-2">
    <div use:reveal>
      <Card.Root class="h-full">
        <Card.Header>
          <div class="mb-3 flex size-10 items-center justify-center rounded-lg bg-ruby/10 text-ruby">
            <BrandIcon id="ruby" class="size-5" />
          </div>
          <Card.Title>Изучаю Ruby</Card.Title>
          <Card.Description>Текущий фокус</Card.Description>
        </Card.Header>
        <Card.Content class="text-sm text-muted-foreground">
          Разбираюсь с языком: синтаксис, стандартная библиотека и то, как на Ruby принято писать.
        </Card.Content>
        <Card.Footer class="mt-auto">
          <Button
            href="https://www.ruby-lang.org/ru/"
            target="_blank"
            rel="noreferrer noopener"
            variant="outline"
            size="sm"
          >
            ruby-lang.org
            <ArrowUpRightIcon />
          </Button>
        </Card.Footer>
      </Card.Root>
    </div>

    <div use:reveal={{ delay: 90 }}>
      <Card.Root class="h-full">
        <Card.Header>
          <div
            class="mb-3 flex size-10 items-center justify-center rounded-lg bg-foreground/10 text-foreground"
          >
            <BrandIcon id="github" class="size-5" />
          </div>
          <Card.Title>GitHub</Card.Title>
          <Card.Description>github.com/emostr</Card.Description>
        </Card.Header>
        <Card.Content class="text-sm text-muted-foreground">
          Здесь всё, что я пишу: учебный код на Ruby и исходники проектов.
        </Card.Content>
        <Card.Footer class="mt-auto">
          <Button href={githubUrl} target="_blank" rel="noreferrer noopener" variant="outline" size="sm">
            Открыть профиль
            <ArrowUpRightIcon />
          </Button>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
</section>
