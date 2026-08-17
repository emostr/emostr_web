<script lang="ts">
  import { base } from '$app/paths';

  const chips = ['Full-stack', 'Открытый код', 'Код вместе с ИИ', 'Прод под ключ'];
</script>

<section id="top" class="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
  <div
    class="shell grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16"
  >
    <div class="order-last lg:order-first">
      <p class="enter label flex items-center gap-2.5 text-accent" style="--enter-delay: 60ms">
        <span class="relative flex h-1.5 w-1.5">
          <span class="absolute inline-flex h-full w-full animate-ping bg-accent opacity-70"></span>
          <span class="relative inline-flex h-1.5 w-1.5 bg-accent"></span>
        </span>
        Креативная студия
      </p>

      <h1
        class="enter mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        style="--enter-delay: 140ms"
      >
        Собираем цифровые<br class="hidden sm:block" />
        платформы
        <span class="relative inline-block text-accent">
          целиком
          <span class="absolute -bottom-1 left-0 h-[3px] w-full bg-accent/40"></span>
        </span>
      </h1>

      <p class="enter mt-7 max-w-xl text-base text-muted md:text-lg" style="--enter-delay: 220ms">
        emostr — студия цифровых продуктов. Проектирую архитектуру, пишу код вместе с ИИ и довожу
        проект до работающего прода: интерфейс, API, база и развёртывание — в одних руках.
      </p>

      <div class="enter mt-9 flex flex-wrap items-center gap-3" style="--enter-delay: 300ms">
        <a
          href="#projects"
          class="group flex items-center gap-3 bg-accent px-6 py-3.5 font-bold text-on-accent transition-all duration-300 hover:bg-accent-strong hover:gap-4"
        >
          Смотреть проекты
          <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
        <a
          href="#contact"
          class="border border-line-strong px-6 py-3.5 font-bold transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Обсудить задачу
        </a>
      </div>

      <ul class="enter mt-10 flex flex-wrap gap-x-6 gap-y-3" style="--enter-delay: 380ms">
        {#each chips as chip (chip)}
          <li class="label flex items-center gap-2 text-faint">
            <span class="h-px w-4 bg-line-strong"></span>
            {chip}
          </li>
        {/each}
      </ul>
    </div>

    <div class="order-first flex justify-center lg:order-last lg:justify-end">
      <div class="enter relative" style="--enter-delay: 40ms">
        <div
          class="pointer-events-none absolute inset-0 -z-10 scale-150 opacity-45 blur-3xl"
          style="background: radial-gradient(circle at 50% 50%, rgba(0,201,159,0.35), rgba(180,85,255,0.22) 45%, transparent 70%)"
          aria-hidden="true"
        ></div>

        <span
          class="absolute -top-4 -left-4 h-8 w-8 border-t-2 border-l-2 border-brand-teal/70"
          aria-hidden="true"
        ></span>
        <span
          class="absolute -right-4 -bottom-4 h-8 w-8 border-r-2 border-b-2 border-brand-purple/70"
          aria-hidden="true"
        ></span>

        <picture>
          <source srcset="{base}/logo.webp" type="image/webp" />
          <img
            src="{base}/logo.png"
            alt="Логотип студии emostr"
            width="360"
            height="360"
            fetchpriority="high"
            draggable="false"
            class="hero-logo w-52 max-w-full select-none sm:w-64 lg:w-[22rem]"
          />
        </picture>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-logo {
    animation: float-slow 8s ease-in-out infinite;
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .hero-logo:hover {
    transform: rotate(-4deg) scale(1.04);
  }
</style>
