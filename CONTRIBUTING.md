# Руководство для участников (CONTRIBUTING.md)

## Введение

Благодарим вас за интерес к участию в нашем проекте! Данное руководство поможет вам понять, как правильно работать с репозиторием: от создания задачи (Issue) до отправки Pull Request'а. Обратите внимание, что все наименования (названия веток, commit-сообщения, заголовки Pull Request'ов) **должны быть на английском языке**.

## Как участвовать

1. **Создание Issue:**
    - Перед началом работы создайте Issue, в котором подробно опишите задачу или необходимую доработку (например, "Develop button component" или "Add text input component").
    - Если Issue уже существует, внимательно ознакомьтесь с его описанием и требованиями.

2. **Fork репозитория:**
    - Сначала сделайте fork нашего репозитория. Это позволит вам работать в своей копии проекта.
    - После этого клонируйте ваш fork на локальную машину:
      ```bash
      git clone https://github.com/your-username/your-repository.git
      ```

3. **Создание ветки:**
    - Из вашего fork'а создайте новую ветку для работы. Рекомендуется включать номер Issue в название ветки для наглядности.  
      Например, для Issue #12 название ветки может быть `feature/12-button-component`.
    - Используйте команду:
      ```bash
      git checkout -b feature/12-button-component
      ```

4. **Внесение изменений и коммиты:**
    - Реализуйте требуемую функциональность в созданной ветке.
    - Делайте осмысленные коммиты с указанием номера Issue. **Важно:** commit-сообщения должны писаться на английском языке. Например:
      ```bash
      git commit -m "docs: add CONTRIBUTING.md with contribution guidelines (ru/en) (#12)"
      ```
    - При разработке компонентов используйте декомпозицию пропсов для повышения читаемости кода:
      ```tsx
      const Button: React.FC<ButtonProps> = (props) => {
        const { label, onClick } = props;
        return <button onClick={onClick}>{label}</button>;
      };
      ```

5. **Отправка ветки на GitHub:**
    - Опубликуйте свою ветку в вашем fork'е:
      ```bash
      git push origin feature/12-button-component
      ```

6. **Создание Pull Request:**
    - Перейдите в раздел Pull Requests в основном репозитории на GitHub.
    - Нажмите кнопку **New Pull Request**.
    - Выберите вашу ветку из вашего fork'а, где содержатся изменения.
    - Заполните заголовок и описание Pull Request'а. Обязательно укажите, какие изменения внесены, и добавьте ссылку на Issue (например, `fixes #12` или `closes #12`), чтобы Issue автоматически закрывалось при слиянии.
    - Проверьте заполнение и создайте Pull Request.

7. **Код-ревью и слияние:**
    - После создания Pull Request участники проекта проведут код-ревью.
    - При необходимости внесите корректировки.
    - После одобрения ваш Pull Request будет слит в основную ветку, и изменения станут частью проекта.

## Благодарим за вклад!

Каждый вклад важен для нас. Если у вас возникли вопросы, не стесняйтесь обращаться к участникам команды.

---

# Contribution Guidelines (CONTRIBUTING.md)

## Introduction

Thank you for your interest in contributing to our project! This guide will help you understand how to work with our repository—from creating an Issue to submitting a Pull Request. Please note that all naming conventions (branch names, commit messages, pull request titles) must be in English.

## How to Contribute

1. **Creating an Issue:**
    - Before starting work, create an Issue that details the task or enhancement (e.g., "Develop button component" or "Add text input component").
    - If an Issue already exists, review its description and requirements carefully.

2. **Forking the Repository:**
    - First, fork the repository to create your own copy of the project.
    - Then, clone your fork to your local machine:
      ```bash
      git clone https://github.com/your-username/your-repository.git
      ```

3. **Creating a Branch:**
    - Create a new branch from your fork for your changes. It is recommended to include the Issue number in the branch name for clarity.  
      For example, for Issue #12, the branch name can be `feature/12-button-component`.
    - Use the command:
      ```bash
      git checkout -b feature/12-button-component
      ```

4. **Making Changes and Committing:**
    - Implement the required functionality on your branch.
    - Commit your changes with meaningful messages that reference the Issue number. **Important:** Commit messages must be written in English. For example:
      ```bash
      git commit -m "docs: add CONTRIBUTING.md with contribution guidelines (ru/en) (#12)"
      ```
    - When working on React components, you can use prop destructuring for clarity:
      ```tsx
      const Button: React.FC<ButtonProps> = (props) => {
        const { label, onClick } = props;
        return <button onClick={onClick}>{label}</button>;
      };
      ```

5. **Pushing Your Branch:**
    - Push your branch to your fork on GitHub:
      ```bash
      git push origin feature/12-button-component
      ```

6. **Creating a Pull Request:**
    - Navigate to the Pull Requests section in the main repository on GitHub.
    - Click the **New Pull Request** button.
    - Select your branch from your fork that contains the changes.
    - Fill in the title and description of the Pull Request. Be sure to explain what changes were made and reference the Issue (e.g., `fixes #12` or `closes #12`) to automatically close it upon merging.
    - Once everything is clear and detailed, create the Pull Request.

7. **Code Review and Merging:**
    - Your Pull Request will be reviewed by the project team.
    - If there are any suggestions or issues, make the necessary changes.
    - After approval, your Pull Request will be merged into the main branch, and your changes will become part of the project.

## Thank You for Your Contribution!

Every contribution is valuable. If you have any questions, feel free to reach out to the team.
