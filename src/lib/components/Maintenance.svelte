<script lang="ts">
  import { base } from '$app/paths';
  import { contacts } from '$lib/data/site';
</script>

<section class="relative flex min-h-svh flex-col items-center justify-center px-5 py-20 text-center">
  <img
    src="{base}/LogoWhiteLetters.svg"
    alt="emostr"
    width="384"
    height="192"
    fetchpriority="high"
    draggable="false"
    class="mark w-64 max-w-full select-none sm:w-80 md:w-96"
  />

  <p class="enter label mt-10 flex items-center gap-3 text-accent" style="--enter-delay: 200ms">
    <span class="h-px w-8 bg-accent"></span>
    Технические работы
    <span class="h-px w-8 bg-accent"></span>
  </p>

  <h1
    class="enter mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
    style="--enter-delay: 280ms"
  >
    Сайт на реконструкции
  </h1>

  <p class="enter mt-6 max-w-xl text-base text-muted md:text-lg" style="--enter-delay: 360ms">
    Обновляем витрину студии — скоро вернёмся. Если есть задача, напишите напрямую, это работает
    и сейчас.
  </p>

  <div
    class="enter mt-10 h-1 w-64 max-w-full overflow-hidden bg-surface-3"
    style="--enter-delay: 440ms"
  >
    <span class="bar block h-full w-1/3"></span>
  </div>

  <ul
    class="enter mt-10 flex flex-wrap items-center justify-center gap-3"
    style="--enter-delay: 520ms"
  >
    {#each contacts as contact (contact.id)}
      <li>
        <a
          href={contact.href}
          target={contact.href.startsWith('http') ? '_blank' : undefined}
          rel={contact.href.startsWith('http') ? 'noreferrer noopener' : undefined}
          class="flex items-center gap-2 border border-line-strong px-4 py-2.5 font-semibold transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          <span class="label text-faint">{contact.label}</span>
          {contact.value}
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  .mark {
    height: auto;
    animation:
      enter-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both,
      float-slow 8s ease-in-out 0.8s infinite;
  }

  .bar {
    background: linear-gradient(
      90deg,
      var(--color-brand-teal),
      var(--color-brand-purple),
      var(--color-brand-yellow),
      var(--color-brand-red)
    );
    animation: sweep 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite;
  }

  @keyframes sweep {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(300%);
    }
  }
</style>
