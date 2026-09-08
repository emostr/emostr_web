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
    title: 'Язык',
    accent: 'var(--color-brand-teal)',
    items: [
      { id: 'ruby', name: 'Ruby', color: '#CC342D' },
      { id: 'php', name: 'PHP', color: '#777BB4' },
      { id: 'elixir', name: 'Elixir', color: '#4B275F' },
      { id: 'typescript', name: 'TypeScript', color: '#4C9BE8' }
    ]
  },
  {
    title: 'Фронтенд',
    accent: 'var(--color-brand-purple)',
    items: [
      { id: 'react', name: 'React', color: '#61DAFB' },
      { id: 'next', name: 'Next.js', color: '#FFFFFF' },
      { id: 'vue', name: 'Vue', color: '#42B883' },
      { id: 'nuxt', name: 'Nuxt.js', color: '#00C58E' },
      { id: 'svelte', name: 'Svelte', color: '#FF3E00' },
      { id: 'angular', name: 'Angular', color: '#DD0031' },
      { id: 'tailwind', name: 'Tailwind CSS', color: '#38BDF8' }
    ]
  },
  {
    title: 'Бэкенд',
    accent: 'var(--color-brand-yellow)',
    items: [
      { id: 'rails', name: 'Ruby on Rails', color: '#D30001' },
      { id: 'laravel', name: 'Laravel', color: '#FF2D20' },
      { id: 'phoenix', name: 'Phoenix', color: '#FD4F00' },
      { id: 'nest', name: 'NestJS', color: '#E0234E' },
    ]
  },
  {
    title: 'СУБД',
    accent: 'var(--color-brand-red)',
    items: [
      { id: 'postgres', name: 'PostgreSQL', color: '#4169E1' }
    ]
  },
  {
    title: 'Серверное',
    accent: 'var(--color-brand-teal)',
    items: [
      { id: 'caddy', name: 'Caddy', color: '#1F88C0' },
      { id: 'debian', name: 'Debian', color: '#A81D33' }
    ]
  }
];

export const stackFlat: Tech[] = stack.flatMap((group) => group.items);
