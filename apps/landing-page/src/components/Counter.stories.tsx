import type { Meta, StoryObj } from "@storybook/react-vite";
import { Counter } from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    initialCount: 0,
  },
};

export const WithInitialValue: Story = {
  args: {
    initialCount: 10,
  },
};

export const Disabled: Story = {
  args: {
    initialCount: 5,
    disabled: true,
  },
};
