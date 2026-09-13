<script lang="ts">
  import SendIcon from '@lucide/svelte/icons/send';
  import BrandIcon from './BrandIcon.svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { githubUrl } from '$lib/data/site';
</script>

<section id="top" class="mx-auto max-w-3xl px-5 pt-16 pb-6 sm:pt-24 sm:pb-10">
  <div class="enter" style="--enter-delay: 40ms">
    <Badge variant="outline" class="gap-1.5 py-1 pr-2.5 pl-2">
      <span class="relative flex size-2">
        <span class="absolute inline-flex size-full animate-ping rounded-full bg-ruby opacity-60"></span>
        <span class="relative inline-flex size-2 rounded-full bg-ruby"></span>
      </span>
      Сейчас изучаю Ruby
    </Badge>
  </div>

  <h1
    class="enter mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl"
    style="--enter-delay: 120ms"
  >
    Привет, я Матвей Серов
    (aka Crefixa)
  </h1>

  <p
    class="enter mt-5 max-w-xl text-lg text-pretty text-muted-foreground"
    style="--enter-delay: 200ms"
  >
    Это мой личный сайт. Сейчас разбираюсь с Ruby, код складываю на GitHub, а ещё у меня есть
    пара небольших проектов, собранных вместе с нейросетью.
  </p>

  <div class="enter mt-8 flex flex-wrap gap-3" style="--enter-delay: 280ms">
    <Button href={githubUrl} target="_blank" rel="noreferrer noopener" size="lg">
      <BrandIcon id="github" />
      Мой GitHub
    </Button>
    <Button
      href="https://t.me/crefixa"
      target="_blank"
      rel="noreferrer noopener"
      variant="outline"
      size="lg"
    >
      <SendIcon />
      Написать
    </Button>
  </div>
</section>
