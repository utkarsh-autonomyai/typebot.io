import type { ActivityEvent, ActivityEventType, DashboardStats } from "./types";

export const mockDashboardStats: DashboardStats = {
  totalUsers: 12847,
  activeSessions: 348,
  revenue: 4521,
};

export const mockActivities: ActivityEvent[] = [
  {
    id: "1",
    type: "user_signup",
    description: "Sarah Johnson signed up and created an account",
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
  },
  {
    id: "2",
    type: "bot_created",
    description: "Michael Chen created a new bot: Customer Support Bot",
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 minutes ago
  },
  {
    id: "3",
    type: "bot_published",
    description: "Emma Williams published: Email Newsletter Bot",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
  },
  {
    id: "4",
    type: "payment_received",
    description: "Payment received from Acme Corporation - $2,500",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
  },
  {
    id: "5",
    type: "user_signup",
    description: "David Martinez signed up and created an account",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
  },
  {
    id: "6",
    type: "bot_created",
    description: "Lisa Anderson created a new bot: Form Submission Bot",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
  },
];

export const activityTypeConfig: Record<
  ActivityEventType,
  {
    label: string;
    colorScheme: "blue" | "purple" | "green" | "orange";
  }
> = {
  user_signup: {
    label: "New signup",
    colorScheme: "blue",
  },
  bot_created: {
    label: "Bot created",
    colorScheme: "purple",
  },
  bot_published: {
    label: "Bot published",
    colorScheme: "green",
  },
  payment_received: {
    label: "Payment",
    colorScheme: "orange",
  },
};
