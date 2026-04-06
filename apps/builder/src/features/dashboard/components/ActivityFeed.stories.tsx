import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActivityFeed } from "./ActivityFeed";
import { mockActivities } from "../constants";

const meta: Meta<typeof ActivityFeed> = {
  title: "Dashboard/ActivityFeed",
  component: ActivityFeed,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ActivityFeed>;

export const Default: Story = {
  args: {
    activities: mockActivities,
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    activities: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    activities: [],
    isLoading: false,
  },
};

export const SingleActivity: Story = {
  args: {
    activities: [mockActivities[0]],
    isLoading: false,
  },
};
