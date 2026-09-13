export const site = {
  name: 'emostr',
  url: 'https://emostr.com',
  title: 'emostr — личный сайт',
  description:
    'Личный сайт emostr: изучаю Ruby, веду GitHub и собираю небольшие проекты вместе с нейросетью.'
} as const;

export const maintenance = false;

export const githubUrl = 'https://github.com/emostr';

export type Contact = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: 'github' | 'telegram' | 'mail';
};

export const contacts: Contact[] = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/emostr',
    href: githubUrl,
    icon: 'github'
  },
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@crefixa',
    href: 'https://t.me/crefixa',
    icon: 'telegram'
  },
  {
    id: 'email',
    label: 'Почта',
    value: 'mail@emostr.com',
    href: 'mailto:mail@emostr.com',
    icon: 'mail'
  }
];

export const nav = [
  { href: '#ruby', label: 'Ruby' },
  { href: '#projects', label: 'Проекты' },
  { href: '#contacts', label: 'Контакты' }
];
