import type { Typebot } from "@typebot.io/typebot/schemas/typebot";

export type TypebotInDashboard = Pick<
  Typebot,
  "id" | "name" | "icon" | "spaceId"
> & {
  publishedTypebotId?: string;
};

export type DashboardStats = {
  totalUsers: number;
  activeSessions: number;
  revenue: number;
};

export type ActivityEventType = "user_signup" | "bot_created" | "bot_published" | "payment_received";

export type ActivityEvent = {
  id: string;
  type: ActivityEventType;
  description: string;
  timestamp: string;
};
