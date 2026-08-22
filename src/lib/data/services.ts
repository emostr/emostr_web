export type Service = {
  title: string;
  text: string;
  accent: string;
  index: string;
};

export const services: Service[] = [
  {
    index: '1',
    title: 'Цифровые платформы',
    text: 'Порталы, каталоги, панели управления и учётные системы. От схемы базы данных и API до последней кнопки в интерфейсе',
    accent: 'var(--color-brand-teal)'
  },
  {
    index: '2',
    title: 'Кастомные интерфейсы под задачу',
    text: 'Собственные UI-шаблоны вместо готовых решений: интерфейс подстраивается под проект',
    accent: 'var(--color-brand-purple)'
  },
  {
    index: '3',
    title: 'Код вместе с ИИ',
    text: 'ИИ-агенты помогают в разработке',
    accent: 'var(--color-brand-yellow)'
  },
  {
    index: '4',
    title: 'Развёртывание под ключ',
    text: 'Все на наших плечах',
    accent: 'var(--color-brand-red)'
  }
];
