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
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{pascalCase name}}",
        base: "generator/templates/component",
        templateFiles: "generator/templates/component/**/*.hbs",
      },
      {
        type: "modify",
        path: "src/styles/theme.scss",
        pattern: /(\/\* COMPONENT VARS IMPORTS \*\/)/g,
        template:
          '$1\n@forward "../components/{{pascalCase name}}/{{camelCase name}}.vars";',
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
