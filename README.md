# emostr — сайт-визитка

Одностраничный сайт студии emostr: SvelteKit (Svelte 5) + Tailwind CSS 4, статическая сборка под GitHub Pages.

## Стек

- SvelteKit 2 с `adapter-static` — страница целиком раскатывается в HTML на этапе сборки
- Svelte 5 (руны), TypeScript
- Tailwind CSS 4 через `@tailwindcss/vite`
- Open Sans, подключён локально из `static/fonts` — внешних запросов у страницы нет
- Иконки технологий — simple-icons, вшиты в `src/lib/data/icons.ts` генератором

## Разработка

```bash
npm install
npm run dev
```

Дев-сервер поднимется на http://localhost:5173

Прочие команды:

```bash
npm run build     # сборка в ./build
npm run preview   # локальный просмотр собранного сайта
npm run check     # svelte-check + типы
npm run icons     # перегенерировать src/lib/data/icons.ts из simple-icons
```

## Что где лежит

```
├── src/
│   ├── app.css                 палитра, шрифты, базовые стили и анимации
│   ├── app.html                каркас страницы
│   ├── lib/
│   │   ├── actions/reveal.ts   появление блоков при скролле
│   │   ├── components/         секции страницы
│   │   └── data/               контакты, стек, проекты, услуги, иконки
│   └── routes/                 +layout и главная страница
├── scripts/gen-icons.mjs       генератор icons.ts
├── static/                     логотип, фавикон, шрифты, CNAME, robots.txt, sitemap.xml
└── .github/workflows/deploy.yml
```

Тексты, список технологий, проекты и контакты правятся в `src/lib/data/` — трогать разметку для этого не нужно.

### Добавить проект

Допишите объект в массив в `src/lib/data/projects.ts`. Порядковый номер в карточке и вся вёрстка подставятся сами.

### Добавить технологию

1. Если у технологии есть иконка в simple-icons — добавьте её слаг в `MAP` в `scripts/gen-icons.mjs` и выполните `npm run icons`.
2. Добавьте запись в нужную группу в `src/lib/data/stack.ts`. Если иконки нет, вместо неё отрисуется типографическая марка с названием — так сделаны C#, Java и chi.

## Деплой

Настроен на кастомный домен **emostr.com**: в `static/CNAME` лежит домен, база путей пустая.

1. Залейте репозиторий на GitHub, ветка `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. В DNS домена пропишите записи GitHub Pages: `A` на `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (и `AAAA` на `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`), либо `CNAME` для `www` на `emostr.github.io`.
4. Settings → Pages → Custom domain: `emostr.com`, затем включите Enforce HTTPS.

Пуш в `main` собирает и публикует сайт сам.

### Деплой без своего домена

Если сайт должен жить по адресу `https://<логин>.github.io/<репозиторий>/`:

1. Удалите `static/CNAME`.
2. Settings → Secrets and variables → Actions → Variables: заведите переменную `BASE_PATH` со значением `/<репозиторий>`.
3. Поправьте пути к шрифтам в `src/app.css` и адреса в `static/robots.txt`, `static/sitemap.xml`, `src/lib/data/site.ts` — там прописан корень.

Для `<логин>.github.io` переменная `BASE_PATH` не нужна: сайт и так лежит в корне.

## Лицензии

Логотипы технологий взяты из simple-icons (CC0-1.0) и принадлежат их правообладателям.
