# Руководство по структуре проекта

Данный UI Kit создаётся с использованием **React**, **TypeScript** и **SCSS**. Ниже описана рекомендуемая структура каталогов и файлов, а также некоторые принципы, которых стоит придерживаться для удобства сопровождения и расширения проекта.

## Общий вид структуры

```
delementa-ui/
├── .husky/
│   └── pre-commit
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── (другие конфиги Storybook)
├── docs/
│   ├── getting-started.md
│   ├── contributing.md
│   └── (прочие руководства и гайды)
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.scss
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── Input.module.scss
│   │   │   ├── Input.stories.tsx
│   │   │   ├── Input.test.tsx
│   │   │   └── index.ts
│   │   └── (остальные компоненты)
│   ├── hooks/
│   │   └── (кастомные React-хуки)
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _globals.scss
│   │   └── index.scss
│   ├── utils/
│   │   └── (утилитарные функции)
│   ├── types/
│   │   └── (глобальные типы/интерфейсы TypeScript)
│   ├── index.ts
│   └── (дополнительные модули при необходимости)
├── package.json
├── README.md
├── tsconfig.json
├── eslintrc.js (или .eslintrc, .eslint.js)
├── commitlint.config.js (если используете commitlint)
├── stylelint.config.js (если используете stylelint)
└── (другие конфигурационные файлы)
```

## Описание основных папок

### `.husky/`
- Содержит **Git Hooks** (например, `pre-commit`), где можно настроить:
    - Запуск линтеров (ESLint, Stylelint) перед коммитом.
    - Проверку формата коммитов через commitlint (если необходимо).

### `.storybook/`
- Конфигурационные файлы **Storybook**: `main.ts`, `preview.ts` и др.
- С помощью Storybook вы можете:
    - Создавать интерактивную документацию для каждого компонента (файлы `.stories.tsx` в папке компонентов).
    - Визуально проверять работу UI-компонентов.

### `docs/`
- Папка для более развернутой документации: руководств, гайдов, описаний процессов, `getting-started.md` и т. д.
- Можно хранить документацию в Markdown-файлах или использовать генераторы статических сайтов (Docusaurus, GitBook и пр.).
- Если нужно опубликовать документацию, можно настроить GitHub Pages или аналогичный сервис.

### `public/`
- Хранит статические файлы, которые не обрабатываются сборщиком (например, `index.html`).

### `src/`
- **Основная рабочая директория** с исходным кодом и стилями.

#### `src/components/`
- Каждому компоненту выделяется отдельная папка, содержащая:
    - **`Component.tsx`** — основной код компонента.
        - Для удобства чтения и поддержки пропсов:
          ```tsx
          interface ComponentProps {
            param: string;
            param2: number;
          }
    
          export const Component = (props: ComponentProps) => {
            const { param, param2 } = props;
            // ...
          };
          ```
    - **`Component.module.scss`** — стили, связанные исключительно с этим компонентом (использование SCSS-модулей).
    - **`Component.stories.tsx`** — файлы Storybook для демонстрации и документации компонента.
    - **`Component.test.tsx`** — тесты (Jest, React Testing Library или другой фреймворк).
    - **`index.ts`** — точка экспорта, чтобы можно было импортировать компонент одной строкой из папки.
- Такой подход облегчает переиспользование компонентов и упрощает поддержку.

#### `src/hooks/`
- Хранит **кастомные React-хуки**, если они необходимы (например, `useMediaQuery`, `useDebounce` и т. д.).

#### `src/styles/`
- **Глобальные стили**, переменные, миксины, базовые SCSS-файлы.
- Рекомендуется разбивать на логические файлы (например, `_variables.scss`, `_mixins.scss`) и импортировать их в `index.scss`.

#### `src/utils/`
- **Утилитарные функции**, которые не привязаны к конкретному компоненту (форматирование даты, парсинг и т. д.).

#### `src/types/`
- Общие **типизации** и интерфейсы TypeScript, которые могут использоваться во всём проекте.

#### `src/index.ts`
- Точка входа/реэкспорта, где можно экспортировать все компоненты, чтобы пакет был удобнее импортировать извне:
  ```ts
  export * from './components/Button';
  export * from './components/Input';
  // ...

Конфигурационные файлы
•	tsconfig.json — настройки TypeScript.
•	.eslintrc.js (или .eslintrc) — настройки ESLint.
•	stylelint.config.js — настройки Stylelint для SCSS.
•	commitlint.config.js — настройки commitlint (если используете).
•	package.json — список зависимостей, скрипты для сборки, тестирования и запуска Storybook.


