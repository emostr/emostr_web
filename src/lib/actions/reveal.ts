import type { Action } from 'svelte/action';

type RevealOptions = {
  delay?: number;
  threshold?: number;
};

export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
  const reduced =
    typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || typeof IntersectionObserver === 'undefined') return;

  const { delay = 0, threshold = 0.15 } = options ?? {};

  if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);
  node.classList.add('reveal');

  const rect = node.getBoundingClientRect();
  if (rect.top < innerHeight && rect.bottom > 0) {
    requestAnimationFrame(() => node.classList.add('is-visible'));
    return {
      destroy() {
        node.classList.remove('reveal', 'is-visible');
      }
    };
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        node.classList.add('is-visible');
        observer.disconnect();
      }
    },
    { threshold, rootMargin: '0px 0px -8% 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
      node.classList.remove('reveal', 'is-visible');
    }
  };
};
