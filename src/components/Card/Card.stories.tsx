import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button/Button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outlined", "flat"],
      description: "Вариант отображения карточки",
    },
    hoverable: {
      control: "boolean",
      description: "Эффект при наведении",
    },
    fullWidth: {
      control: "boolean",
      description: "Растянуть на всю ширину",
    },
    padding: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
      description: "Размер отступов",
    },
    radius: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
      description: "Скругление углов",
    },
    shadow: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
      description: "Размер тени",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    variant: "elevated",
    padding: "m",
    radius: "m",
    shadow: "m",
    children: "Базовая карточка с текстом",
  },
};

export const WithHeaderAndContent: Story = {
  args: {
    variant: "elevated",
    children: (
      <>
        <Card.Header
          title="Заголовок карточки"
          subtitle="Подзаголовок карточки"
        />
        <Card.Content>
          Содержимое карточки. Здесь может быть любой контент, включая текст,
          изображения, формы и другие компоненты.
        </Card.Content>
      </>
    ),
  },
};

export const WithMedia: Story = {
  args: {
    variant: "elevated",
    children: (
      <>
        <Card.Media
          image="https://via.placeholder.com/800x400"
          alt="Пример изображения"
          height={200}
        />
        <Card.Header
          title="Карточка с изображением"
          subtitle="Пример карточки с медиа-контентом"
        />
        <Card.Content>
          Карточка с изображением и текстовым содержимым.
        </Card.Content>
      </>
    ),
  },
};

export const Interactive: Story = {
  args: {
    variant: "outlined",
    hoverable: true,
    onClick: () => alert("Клик по карточке"),
    children: (
      <>
        <Card.Header
          title="Интерактивная карточка"
          subtitle="Нажмите на карточку"
        />
        <Card.Content>
          Эта карточка интерактивна. При наведении она приподнимается, а при
          клике вызывает действие.
        </Card.Content>
      </>
    ),
  },
};

export const WithActions: Story = {
  args: {
    variant: "elevated",
    children: (
      <>
        <Card.Header
          title="Карточка с действиями"
          subtitle="Пример карточки с кнопками действий"
        />
        <Card.Content>Карточка с кнопками действий внизу.</Card.Content>
        <Card.Actions>
          <Button variant="outline" label="Отмена" size="m" />
          <Button variant="primary" label="Подтвердить" size="m" />
        </Card.Actions>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    variant: "elevated",
    children: (
      <>
        <Card.Header
          title="Карточка с футером"
          subtitle="Пример карточки с дополнительной информацией внизу"
        />
        <Card.Content>Основное содержимое карточки.</Card.Content>
        <Card.Footer>
          Дополнительная информация или метаданные могут быть размещены в футере
          карточки.
        </Card.Footer>
      </>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Card variant="elevated" style={{ width: "250px" }}>
        <Card.Header title="Elevated" />
        <Card.Content>Карточка с тенью</Card.Content>
      </Card>

      <Card variant="outlined" style={{ width: "250px" }}>
        <Card.Header title="Outlined" />
        <Card.Content>Карточка с границей</Card.Content>
      </Card>

      <Card variant="flat" style={{ width: "250px" }}>
        <Card.Header title="Flat" />
        <Card.Content>Плоская карточка</Card.Content>
      </Card>
    </div>
  ),
};
