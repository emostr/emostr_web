export type Project = {
  id: string;
  name: string;
  summary: string;
  href: string;
  ai: boolean;
  status?: string;
};

export const projects: Project[] = [
  {
    id: 'opora',
    name: 'Опора',
    summary: 'Платформа доступной психотерапии',
    href: 'https://oporaforyou.ru',
    ai: true,
    status: 'В разработке'
  },
  {
    id: 'psychologic',
    name: 'Психолоджик',
    summary: 'Кабинет школьного психолога',
    href: 'https://github.com/emostr/psychologic',
    ai: true
  },
  {
    id: 'edwayspace',
    name: 'edway.space',
    summary: 'Тестирование школьников',
    href: 'https://github.com/emostr/edway-space',
    ai: true
  },
  {
    id: 'csuam',
    name: 'ЦСУАМ «Архивли»',
    summary: 'Архив школьных материалов',
    href: 'https://github.com/emostr/csuam',
    ai: true
  }
];

export function displayUrl(href: string): string {
  const url = new URL(href);
  return (url.host + url.pathname).replace(/\/$/, '');
}
