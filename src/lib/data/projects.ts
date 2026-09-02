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
  },
  {
    id: 'psychologic',
    name: 'Психолоджик',
    subtitle: 'Кабинет школьного психолога',
    year: '2026',
    status: 'ГОТОВЫЙ ПРОДУКТ',
    accent: 'var(--color-brand-purple)',
    description:
      'Платформа для школьных психологов, позволяющая проводить психологическое тестирование учеников',
    features: [
      'Тестирование учеников с помощью психологических опросников',
      'Несколько встроенных тестов, возможность добавления своих',
      'Удобная система учёта учеников и их результатов',
      'Подробная аналитика'
    ],
    tech: ['TypeScript', 'Svelte', 'TailwindCSS', 'NestJS + Fastify', 'PostgreSQL', 'Docker', 'Caddy'],
    license: 'Apache License 2.0',
    licenseHref: 'https://www.apache.org/licenses/LICENSE-2.0',
    href: 'https://github.com/emostr/psychologic'
  },
  {
    id: 'edwayspace',
    name: 'edway.space',
    subtitle: 'Платформа для удобного тестирования школьников',
    year: '2026',
    status: 'ГОТОВЫЙ ПРОДУКТ',
    accent: 'var(--color-brand-red)',
    description:
      'Платформа для проведения тестирования школьников. Позволяет создавать тесты, проводить их и анализировать результаты.',
    features: [
      'Удобный визуальный редактор с поддержкой формул LaTeX',
      'Аналитика результатов тестирования с графиками и диаграммами',
      'Поддержка нескольких типов вопросов: тесты, тесты с несколькими вариантами ответа, ответы с развернутым текстом',
      'Автоматическое распознование тестовых ответов'
    ],
    tech: ['Typescript', 'Next.js', 'TailwindCSS', 'NestJS + Fastify', 'PostgreSQL', 'Docker', 'Caddy'],
    license: 'Apache License 2.0',
    licenseHref: 'https://www.apache.org/licenses/LICENSE-2.0',
    href: 'https://github.com/emostr/edway-space'
  }
];
