import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactForm } from "./ContactForm";

const meta: Meta<typeof ContactForm> = {
  title: "Components/ContactForm",
  component: ContactForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      console.log("Form submitted:", data);
    },
  },
};
