<script lang="ts">
  import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
  import { base } from '$app/paths';
  import { page } from '$app/state';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Button } from '$lib/components/ui/button/index.js';

  const isMissing = $derived(page.status === 404);
</script>

<svelte:head>
  <title>{page.status} — emostr</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 py-20">
  <div class="enter">
    <Badge variant="outline">Ошибка {page.status}</Badge>
  </div>
  <h1 class="enter mt-5 text-4xl font-bold tracking-tight sm:text-5xl" style="--enter-delay: 80ms">
    {isMissing ? 'Такой страницы нет' : 'Что-то пошло не так'}
  </h1>
  <p class="enter mt-4 max-w-md text-muted-foreground" style="--enter-delay: 160ms">
    {isMissing
      ? 'Возможно, ссылка устарела или в адресе опечатка.'
      : (page.error?.message ?? 'Попробуйте обновить страницу.')}
  </p>
  <div class="enter mt-8" style="--enter-delay: 240ms">
    <Button href="{base}/">
      <ArrowLeftIcon />
      На главную
    </Button>
  </div>
</section>
