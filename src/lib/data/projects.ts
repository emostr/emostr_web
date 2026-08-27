export type Project = {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  status: string;
  accent: string;
  description: string;
  features: string[];
  tech: string[];
  license: string;
  licenseHref: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: 'csuam',
    name: 'ЦСУАМ «Архивли»',
    subtitle: 'Цифровая система управления архивными материалами школы',
    year: '2026',
    status: 'Готовый продукт',
    accent: 'var(--color-brand-teal)',
    description:
      'Платформа для долгосрочного хранения, систематизации и учёта школьных материалов: наград, фотографий, видео, библиотеки и архивных документов. Экспонат живёт в карточке: файлы открываются прямо в браузере, у каждого есть состояние, местонахождение физического экземпляра и время происхождения.',
    features: [
      'Пять категорий материалов и поиск по ключевым словам, датам и категориям',
      'Карточка экспоната с несколькими файлами и встроенным просмотрщиком',
      'Генерация QR-кодов, которые наклеиваются на физический экземпляр',
      'Прокат книг: сроки возврата, уведомления о просрочке, архив выдач',
      'Аналитика, экспорт и импорт карточек в JSON и XML',
      'Три роли: завуч, библиотекарь и учитель (с премодерацией материалов)',
      'Развёртывание одним скриптом: Docker, Caddy, TLS и резервные копии'
    ],
    tech: ['TypeScript', 'Vue', 'TailwindCSS', 'Go', 'chi', 'MariaDB', 'S3-хранилище MinIO', 'Docker', 'Caddy'],
    license: 'Apache License 2.0',
    licenseHref: 'https://www.apache.org/licenses/LICENSE-2.0',
    href: 'https://github.com/emostr/csuam'
  }
];
