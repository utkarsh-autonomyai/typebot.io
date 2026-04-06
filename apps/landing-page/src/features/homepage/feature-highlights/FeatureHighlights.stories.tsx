import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeatureHighlights } from "./FeatureHighlights";

const meta: Meta<typeof FeatureHighlights> = {
  title: "Features/Homepage/FeatureHighlights",
  component: FeatureHighlights,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FeatureHighlights>;

export const Default: Story = {};
