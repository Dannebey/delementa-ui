import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

export default {
  title: "UI/Loader",
  component: Loader,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl"],
    },
    color: { control: "color" },
    className: { control: false },
  },
} as Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    size: "m",
    color: "#007bff",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Loader {...args} size="xs" />
      <Loader {...args} size="s" />
      <Loader {...args} size="m" />
      <Loader {...args} size="l" />
      <Loader {...args} size="xl" />
    </div>
  ),
  args: {
    color: "#007bff",
  },
};

export const CustomColor: Story = {
  args: {
    size: "m",
    color: "#ff4500",
  },
};
