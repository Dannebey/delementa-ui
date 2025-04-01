export default function (plop) {
  // Генератор для React компонента (TS + SCSS)
  plop.setGenerator("component", {
    description: "Создание нового React компонента (TS + SCSS)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Введите имя компонента (например, Button):",
      },
      {
        type: "confirm",
        name: "withStories",
        message: "Создать Storybook-истории для компонента?",
        default: true,
      },
      {
        type: "confirm",
        name: "withTests",
        message: "Создать тесты (Jest + Testing Library)?",
        default: true,
      },
      {
        type: "confirm",
        name: "withVars",
        message: "Создать SCSS-файл с переменными для компонента?",
        default: true,
      },
    ],
    actions: [
      // 1) Проверка наличия директории /src/components/{{pascalCase name}}
      //    Если уже существует, генерация будет прервана.
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: "generator/templates/component/index.ts.hbs",
        abortOnFail: true,
      },
      // 2) Основной файл компонента
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "generator/templates/component/component.tsx.hbs",
        abortOnFail: true,
      },
      // 3) Файл стилей (module.scss)
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "generator/templates/component/component.module.scss.hbs",
        abortOnFail: true,
      },
      // 4) Файл с локальными SCSS-переменными (создаётся, только если пользователь согласился)
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/_{{kebabCase name}}.vars.scss",
        templateFile: "generator/templates/component/_component.vars.scss.hbs",
        skip: (data) => (data.withVars ? undefined : "Пользователь выбрал не создавать SCSS-переменные."),
        abortOnFail: true,
      },
      // 5) Storybook-истории (создаётся, только если пользователь согласился)
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "generator/templates/component/component.stories.tsx.hbs",
        skip: (data) => (data.withStories ? undefined : "Пользователь выбрал не создавать stories."),
        abortOnFail: true,
      },
      // 6) Тесты (создаются, только если пользователь согласился)
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "generator/templates/component/component.test.tsx.hbs",
        skip: (data) => (data.withTests ? undefined : "Пользователь выбрал не создавать тесты."),
        abortOnFail: true,
      },
      // 7) Модификация (при необходимости) файла темы — например, если нужно добавить
      //    @forward для переменных в глобальную тему. Используем pattern/modify.
      {
        type: "modify",
        path: "src/styles/theme.scss",
        pattern: /(\/\* COMPONENT IMPORTS \*\/)/g,
        template: '$1\n@forward "components/{{pascalCase name}}/_{{kebabCase name}}.vars.scss";',
        skip: (data) => (data.withVars ? undefined : "Пользователь выбрал не создавать SCSS-переменные, не добавляем forward в тему."),
      },
    ],
  });

  // Генератор для React хука
  plop.setGenerator("hook", {
    description: "Создание нового React хука (TS)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Введите имя хука:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/hooks/{{camelCase name}}",
        base: "generator/templates/hook",
        templateFiles: "generator/templates/hook/**/*.hbs",
      },
    ],
  });

  // Генератор для TypeScript типа
  plop.setGenerator("type", {
    description: "Создание нового TypeScript типа",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Введите имя типа:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/types",
        base: "generator/templates/type",
        templateFiles: "generator/templates/type/**/*.hbs",
      },
    ],
  });

  // Генератор для утилит
  plop.setGenerator("util", {
    description: "Создание нового утилитного модуля",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Введите имя утилиты (например, formatDate):",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/utils/{{camelCase name}}",
        base: "generator/templates/util",
        templateFiles: "generator/templates/util/**/*.hbs",
      },
    ],
  });
}
