import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatsOverview } from "./StatsOverview";
import { mockDashboardStats } from "../constants";

const meta: Meta<typeof StatsOverview> = {
  title: "Dashboard/StatsOverview",
  component: StatsOverview,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof StatsOverview>;

export const Default: Story = {
  args: {
    stats: mockDashboardStats,
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    stats: mockDashboardStats,
    isLoading: true,
  },
};

export const LargeNumbers: Story = {
  args: {
    stats: {
      totalUsers: 1234567,
      activeSessions: 98765,
      revenue: 9876543,
    },
    isLoading: false,
  },
};
