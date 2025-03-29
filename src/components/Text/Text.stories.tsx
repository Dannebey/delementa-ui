import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  argTypes: {
    variant: {
      control: "select",
      options: ["display-xl", "display-lg", "h1", "h2", "h3", "h4", "h5", "h6", "body-lg", "body-md", "body-sm", "caption", "overline"],
    },
    component: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
    color: { control: "color" },
    truncate: { control: "boolean" },
    gutterBottom: { control: "boolean" },
    noWrap: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const DisplayXL: Story = {
  args: {
    children: "Display XL",
    variant: "display-xl",
  },
};

export const DisplayLG: Story = {
  args: {
    children: "Display LG",
    variant: "display-lg",
  },
};

export const Heading1: Story = {
  args: {
    children: "Heading 1",
    variant: "h1",
  },
};

export const Heading2: Story = {
  args: {
    children: "Heading 2",
    variant: "h2",
  },
};

export const Heading3: Story = {
  args: {
    children: "Heading 3",
    variant: "h3",
  },
};

export const BodyLarge: Story = {
  args: {
    children: "Body Large - основной текст большого размера",
    variant: "body-lg",
  },
};

export const BodyMedium: Story = {
  args: {
    children: "Body Medium - основной текст среднего размера",
    variant: "body-md",
  },
};

export const BodySmall: Story = {
  args: {
    children: "Body Small - основной текст малого размера",
    variant: "body-sm",
  },
};

export const Caption: Story = {
  args: {
    children: "Caption - подпись",
    variant: "caption",
  },
};

export const Overline: Story = {
  args: {
    children: "OVERLINE - НАДЗАГОЛОВОК",
    variant: "overline",
  },
};

export const CustomComponent: Story = {
  args: {
    children: "Текст со стилем h2, но отрендеренный как div",
    variant: "h2",
    component: "div",
  },
};

export const WithAlignment: Story = {
  args: {
    children: "Текст с выравниванием по центру",
    variant: "body-md",
    align: "center",
  },
};

export const WithCustomColor: Story = {
  args: {
    children: "Текст с пользовательским цветом",
    variant: "body-md",
    color: "#ff5722",
  },
};

export const WithCustomWeight: Story = {
  args: {
    children: "Текст с полужирным начертанием",
    variant: "body-md",
    weight: "semibold",
  },
};

export const WithTruncate: Story = {
  args: {
    children:
      "Этот текст будет обрезан с многоточием, если он не помещается в контейнер. Это очень длинный текст, который должен быть обрезан.",
    variant: "body-md",
    truncate: true,
    style: { width: "300px" },
  },
};

export const WithGutterBottom: Story = {
  args: {
    children: "Этот текст имеет отступ снизу",
    variant: "body-md",
    gutterBottom: true,
  },
};

export const WithNoWrap: Story = {
  args: {
    children: "Этот текст не будет переноситься на новую строку",
    variant: "body-md",
    noWrap: true,
    style: { width: "300px" },
  },
};
