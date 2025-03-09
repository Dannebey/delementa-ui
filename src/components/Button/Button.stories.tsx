import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { FaBeer } from "react-icons/fa";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl"],
    },
    loading: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: ["primary", "outline", "text", "link"],
    },
    icon: {
      control: "boolean",
      mapping: { false: null, true: <FaBeer /> },
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    size: "m",
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline Button",
    size: "m",
    variant: "outline",
  },
};

export const Text: Story = {
  args: {
    label: "Text Button",
    size: "m",
    variant: "text",
  },
};

export const Link: Story = {
  args: {
    label: "Link Button",
    size: "m",
    variant: "link",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Button with Icon",
    size: "m",
    variant: "primary",
    icon: <FaBeer />,
  },
};
