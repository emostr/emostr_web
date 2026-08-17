<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/state';

  const isMissing = $derived(page.status === 404);
</script>

<svelte:head>
  <title>{page.status} — emostr</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="shell flex min-h-[80vh] flex-col justify-center py-24">
  <p class="enter label flex items-center gap-3 text-brand-red">
    <span class="h-px w-8 bg-brand-red"></span>
    Ошибка {page.status}
  </p>

  <h1
    class="enter mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
    style="--enter-delay: 80ms"
  >
    {isMissing ? 'Такой страницы нет' : 'Что-то пошло не так'}
  </h1>

  <p class="enter mt-6 max-w-xl text-muted md:text-lg" style="--enter-delay: 160ms">
    {isMissing
      ? 'Возможно, ссылка устарела или в адресе опечатка. На главной есть всё: стек, проекты и контакты.'
      : page.error?.message ?? 'Попробуйте обновить страницу или вернуться на главную.'}
  </p>

  <div class="enter mt-9 flex flex-wrap gap-3" style="--enter-delay: 240ms">
    <a
      href="{base}/"
      class="group flex items-center gap-3 bg-accent px-6 py-3.5 font-bold text-on-accent transition-all duration-300 hover:gap-4 hover:bg-accent-strong"
    >
      <span class="transition-transform duration-300 group-hover:-translate-x-1">←</span>
      На главную
    </a>
    <a
      href="{base}/#contact"
      class="border border-line-strong px-6 py-3.5 font-bold transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      Контакты
    </a>
  </div>
</section>
