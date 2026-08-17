<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
  <div class="grid-lines absolute inset-0"></div>
  <div class="blob blob-teal"></div>
  <div class="blob blob-purple"></div>
  <div class="blob blob-yellow"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-bg/30 to-bg"></div>
</div>

<style>
  .grid-lines {
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, #000 30%, transparent 100%);
  }

  .blob {
    position: absolute;
    width: 46rem;
    height: 46rem;
    border-radius: 9999px;
    filter: blur(80px);
    opacity: 0.14;
    animation: drift 26s ease-in-out infinite;
  }

  .blob-teal {
    top: -18rem;
    right: -12rem;
    background: radial-gradient(circle, var(--color-brand-teal), transparent 65%);
  }

  .blob-purple {
    top: 38%;
    left: -20rem;
    background: radial-gradient(circle, var(--color-brand-purple), transparent 65%);
    animation-duration: 34s;
    animation-delay: -8s;
    opacity: 0.12;
  }

  .blob-yellow {
    bottom: -22rem;
    right: -8rem;
    background: radial-gradient(circle, var(--color-brand-yellow), transparent 65%);
    animation-duration: 30s;
    animation-delay: -16s;
    opacity: 0.07;
  }

  @media (max-width: 767px) {
    .blob {
      width: 26rem;
      height: 26rem;
      filter: blur(60px);
    }
  }
</style>
