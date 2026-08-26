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
      { id: 'typescript', name: 'TypeScript', color: '#4C9BE8' },
      { id: 'php', name: 'PHP', color: '#9296D4' },
      { id: 'go', name: 'Go', color: '#00ADD8' },
      { id: 'ruby', name: 'Ruby', color: '#CC342D' }
    ]
  },
  {
    title: 'Фронтенд',
    accent: 'var(--color-brand-purple)',
    items: [
      { id: 'svelte', name: 'Svelte', color: '#FF3E00' },
      { id: 'htmx', name: 'HTMX', color: '#3366CC' }
    ]
  },
  {
    title: 'Бэкенд',
    accent: 'var(--color-brand-yellow)',
    items: [
      { id: 'laravel', name: 'Laravel', color: '#FF4C3F' }
    ]
  },
  {
    title: 'СУБД',
    accent: 'var(--color-brand-red)',
    items: [
      { id: 'mariadb', name: 'MariaDB', color: '#7FB3C0' },
      { id: 'postgres', name: 'PostgreSQL', color: '#4169E1' }
    ]
  },
  {
    title: 'Серверное',
    accent: 'var(--color-brand-teal)',
    items: [
      { id: 'nginx', name: 'NGINX', color: '#009639' },
      { id: 'caddy', name: 'Caddy', color: '#1F88C0' },
      { id: 'debian', name: 'Debian', color: '#A81D33' }
    ]
  }
];

export const stackFlat: Tech[] = stack.flatMap((group) => group.items);
