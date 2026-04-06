import type { Meta, StoryObj } from "@storybook/react-vite";
import { Counter } from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg"],
    },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    defaultValue: 5,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const Secondary: Story = {
  args: {
    defaultValue: 10,
    variant: "secondary",
    min: 0,
    max: 100,
  },
};

export const Outline: Story = {
  args: {
    defaultValue: 25,
    variant: "outline",
    min: 0,
    max: 50,
  },
};

export const Ghost: Story = {
  args: {
    defaultValue: 0,
    variant: "ghost",
    min: 0,
    max: 20,
  },
};

export const Large: Story = {
  args: {
    defaultValue: 15,
    size: "lg",
    min: 0,
    max: 100,
  },
};

export const Small: Story = {
  args: {
    defaultValue: 3,
    size: "sm",
    min: 0,
    max: 10,
  },
};

export const ExtraSmall: Story = {
  args: {
    defaultValue: 1,
    size: "xs",
    min: 0,
    max: 5,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
    min: 0,
    max: 100,
  },
};

export const CustomRange: Story = {
  args: {
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
  },
};
