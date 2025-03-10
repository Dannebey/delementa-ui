import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "outline"],
    },
    size: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl"],
    },
    type: {
      control: "select",
      options: ["text", "number", "password", "email"],
    },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    errorMessage: { control: "text" },
    hiddenCounter: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Primary input",
    type: "text",
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline input",
    size: "m",
    variant: "outline",
  },
};

export const XSSize: Story = {
  args: {
    label: "Input",
    type: "text",
    size: "xs",
    variant: "primary",
  },
};

export const SSize: Story = {
  args: {
    label: "Input",
    type: "text",
    size: "s",
    variant: "primary",
  },
};

export const MSize: Story = {
  args: {
    label: "Input",
    type: "text",
    size: "m",
    variant: "primary",
  },
};

export const LSize: Story = {
  args: {
    label: "Input",
    type: "text",
    size: "l",
    variant: "primary",
  },
};

export const XLSize: Story = {
  args: {
    label: "Input",
    type: "text",
    size: "xl",
    variant: "primary",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    size: "m",
    variant: "primary",
  },
};

export const NumberWithoutCounter: Story = {
  args: {
    type: "number",
    size: "m",
    variant: "primary",
    hiddenCounter: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    defaultValue: "1234",
    size: "m",
    variant: "primary",
  },
};

export const Error: Story = {
  args: {
    type: "text",
    label: "Error",
    size: "m",
    variant: "primary",
    error: true,
  },
};

export const ErrorWithText: Story = {
  args: {
    type: "text",
    label: "Error",
    size: "m",
    variant: "primary",
    error: true,
    errorMessage: "Enviloup",
  },
};

export const ErrorOutline: Story = {
  args: {
    type: "text",
    label: "Error",
    size: "m",
    variant: "outline",
    error: true,
  },
};

export const DisabledPrimary: Story = {
  args: {
    type: "text",
    label: "Disabled",
    size: "m",
    variant: "primary",
    value: "Ангуляй",
    disabled: true,
  },
};

export const DisabledOutline: Story = {
  args: {
    type: "text",
    label: "Disabled",
    size: "m",
    variant: "outline",
    value: "Ангуляй",
    disabled: true,
  },
};
