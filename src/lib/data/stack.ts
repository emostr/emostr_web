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
      { id: 'php', name: 'PHP', color: '#777BB4', note: 'Бэкенд' },
      { id: 'typescript', name: 'TypeScript', color: '#4C9BE8', note: 'Фронтенд' }
    ]
  },
  {
    title: 'Фронтенд',
    accent: 'var(--color-brand-purple)',
    items: [
      { id: 'svelte', name: 'Svelte', color: '#FF3E00' }
    ]
  },
  {
    title: 'Бэкенд',
    accent: 'var(--color-brand-yellow)',
    items: [
      { id: 'laravel', name: 'Laravel', color: '#FF2D20' }
    ]
  },
  {
    title: 'СУБД',
    accent: 'var(--color-brand-red)',
    items: [
      { id: 'postgres', name: 'PostgreSQL', color: '#4169E1' },
      { id: 'mongo', name: 'MongoDB', color: '#47A248' }
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
