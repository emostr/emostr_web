export type Tech = {
  id: string;
  name: string;
  color: string;
  note: string;
};

export type StackGroup = {
  title: string;
  accent: string;
  items: Tech[];
};

export const stack: StackGroup[] = [
  {
    title: 'Языки',
    accent: 'var(--color-brand-teal)',
    items: [
      { id: 'typescript', name: 'TypeScript', color: '#4C9BE8', note: 'основной для фронтенда, иногда бэкенд' },
      { id: 'php', name: 'PHP', color: '#9296D4', note: 'основной язык бэкенда' },
      { id: 'go', name: 'Go', color: '#00ADD8', note: 'быстрые и лёгкие сервисы' }
    ]
  },
  {
    title: 'Фронтенд',
    accent: 'var(--color-brand-purple)',
    items: [
      { id: 'svelte', name: 'Svelte', color: '#FF3E00', note: 'основной UI-фреймворк' },
      { id: 'vue', name: 'Vue', color: '#4FC08D', note: 'дополнительный' },
      { id: 'htmx', name: 'HTMX', color: '#3366CC', note: 'сверхлёгкий и удобный вариант для простых UI' },
      { id: 'tailwind', name: 'TailwindCSS', color: '#06B6D4', note: 'удобный утилитарный CSS-фреймворк' }
    ]
  },
  {
    title: 'Бэкенд',
    accent: 'var(--color-brand-yellow)',
    items: [
      { id: 'laravel', name: 'Laravel', color: '#FF4C3F', note: 'основной фреймворк для PHP' },
      { id: 'node', name: 'Node.js', color: '#7DC96A', note: 'рантайм для JS' },
      { id: 'nest', name: 'NestJS', color: '#E0234E', note: 'enterprise-фреймворк для Node' }
    ]
  },
  {
    title: 'Данные',
    accent: 'var(--color-brand-red)',
    items: [
      { id: 'mariadb', name: 'MariaDB', color: '#7FB3C0', note: 'основная СУБД проектов' }
    ]
  }
];

export const stackFlat: Tech[] = stack.flatMap((group) => group.items);
