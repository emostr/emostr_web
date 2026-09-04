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
      { id: 'php', name: 'PHP', color: '#777BB4' },
      { id: 'ruby', name: 'Ruby', color: '#CC342D' },
      { id: 'typescript', name: 'TypeScript', color: '#4C9BE8' }
    ]
  },
  {
    title: 'Фронтенд',
    accent: 'var(--color-brand-purple)',
    items: [
      { id: 'svelte', name: 'Svelte', color: '#FF3E00' },
      { id: 'react', name: 'React', color: '#61DAFB' }
    ]
  },
  {
    title: 'Бэкенд',
    accent: 'var(--color-brand-yellow)',
    items: [
      { id: 'laravel', name: 'Laravel', color: '#FF2D20' },
      { id: 'rails', name: 'Ruby on Rails', color: '#D30001' }
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
      { id: 'caddy', name: 'Caddy', color: '#0000FF' },
      { id: 'debian', name: 'Debian', color: '#A81D33' }
    ]
  }
];

export const stackFlat: Tech[] = stack.flatMap((group) => group.items);
