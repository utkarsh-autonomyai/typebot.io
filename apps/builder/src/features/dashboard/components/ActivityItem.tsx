import { Badge } from "@typebot.io/ui/components/Badge";
import { UserAccountIcon } from "@typebot.io/ui/icons/UserAccountIcon";
import { PlusSignIcon } from "@typebot.io/ui/icons/PlusSignIcon";
import { Megaphone03Icon } from "@typebot.io/ui/icons/Megaphone03Icon";
import { CreditCardIcon } from "@typebot.io/ui/icons/CreditCardIcon";
import { cn } from "@typebot.io/ui/lib/cn";
import { useTimeSince } from "@/hooks/useTimeSince";
import { activityTypeConfig } from "../constants";
import type { ActivityEvent, ActivityEventType } from "../types";

type Props = {
  activity: ActivityEvent;
};

const getActivityIcon = (type: ActivityEventType) => {
  switch (type) {
    case "user_signup":
      return UserAccountIcon;
    case "bot_created":
      return PlusSignIcon;
    case "bot_published":
      return Megaphone03Icon;
    case "payment_received":
      return CreditCardIcon;
  }
};

const getActivityIconBackground = (type: ActivityEventType) => {
  switch (type) {
    case "user_signup":
      return "bg-blue-4 text-blue-10";
    case "bot_created":
      return "bg-purple-4 text-purple-10";
    case "bot_published":
      return "bg-green-4 text-green-10";
    case "payment_received":
      return "bg-orange-4 text-orange-10";
  }
};

export const ActivityItem = ({ activity }: Props) => {
  const timeSince = useTimeSince(activity.timestamp);
  const IconComponent = getActivityIcon(activity.type);
  const iconBg = getActivityIconBackground(activity.type);
  const config = activityTypeConfig[activity.type];

  return (
    <div className="flex items-center gap-3 py-3">
      <div
        className={cn(
          "flex items-center justify-center rounded-full p-1.5 shrink-0",
          iconBg,
        )}
      >
        <IconComponent className="size-3.5" />
      </div>
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <Badge variant="solid" colorScheme={config.colorScheme}>
          {config.label}
        </Badge>
        <p className="text-sm text-gray-11 truncate">{activity.description}</p>
      </div>
      <p className="text-xs text-gray-8 shrink-0">{timeSince}</p>
    </div>
  );
};
