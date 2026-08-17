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
      { id: 'typescript', name: 'TypeScript', color: '#4C9BE8', note: 'типизированный фронт и тулинг' },
      { id: 'go', name: 'Go', color: '#00ADD8', note: 'быстрые сервисы и API' },
      { id: 'php', name: 'PHP', color: '#9296D4', note: 'классика веб-бэкенда' },
      { id: 'csharp', name: 'C#', color: '#A179DC', note: 'корпоративные приложения' },
      { id: 'java', name: 'Java', color: '#E76F00', note: 'долгоживущие системы' }
    ]
  },
  {
    title: 'Фронтенд',
    accent: 'var(--color-brand-purple)',
    items: [
      { id: 'vue', name: 'Vue', color: '#4FC08D', note: 'основной UI-фреймворк' },
      { id: 'svelte', name: 'Svelte', color: '#FF3E00', note: 'лёгкие и быстрые интерфейсы' }
    ]
  },
  {
    title: 'Бэкенд',
    accent: 'var(--color-brand-yellow)',
    items: [
      { id: 'chi', name: 'chi', color: '#5FD3E8', note: 'маршрутизация в Go' },
      { id: 'node', name: 'Node.js', color: '#7DC96A', note: 'серверный JavaScript' },
      { id: 'express', name: 'Express', color: '#E8E8E8', note: 'минималистичные API' },
      { id: 'laravel', name: 'Laravel', color: '#FF4C3F', note: 'полноценные PHP-приложения' },
      { id: 'dotnet', name: '.NET', color: '#8B6FF0', note: 'платформа для C#' }
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
