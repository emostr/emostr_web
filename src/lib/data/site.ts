export const site = {
  name: 'emostr',
  domain: 'emostr.com',
  url: 'https://emostr.com',
  title: 'emostr — креативная студия цифровых платформ',
  description:
    'emostr — студия цифровых платформ: порталы, панели управления и учётные системы. Полный цикл — от схемы базы до продакшн-деплоя, код пишется вместе с ИИ и проверяется вручную.'
} as const;

export type Contact = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
  color: string;
};

export const contacts: Contact[] = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/emostr',
    href: 'https://github.com/emostr',
    icon: 'github',
    color: '#f5f5f5'
  },
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@crefixa',
    href: 'https://t.me/crefixa',
    icon: 'telegram',
    color: '#26A5E4'
  },
  {
    id: 'email',
    label: 'Почта',
    value: 'crefixa@proton.me',
    href: 'mailto:crefixa@proton.me',
    icon: 'protonmail',
    color: '#b455ff'
  }
];

export const nav = [
  { href: '#studio', label: 'Студия' },
  { href: '#stack', label: 'Стек' },
  { href: '#projects', label: 'Проекты' },
  { href: '#contact', label: 'Контакты' }
];
