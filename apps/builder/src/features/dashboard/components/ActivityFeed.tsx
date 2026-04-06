import { useTranslate } from "@tolgee/react";
import { cn } from "@typebot.io/ui/lib/cn";
import { Skeleton } from "@typebot.io/ui/components/Skeleton";
import { Empty } from "@typebot.io/ui/components/Empty";
import { Clock01Icon } from "@typebot.io/ui/icons/Clock01Icon";
import { ActivityItem } from "./ActivityItem";
import type { ActivityEvent } from "../types";

type Props = {
  activities: ActivityEvent[];
  isLoading?: boolean;
  className?: string;
};

export const ActivityFeed = ({
  activities,
  isLoading,
  className,
}: Props) => {
  const { t } = useTranslate();

  return (
    <div
      className={cn(
        "bg-gray-1 rounded-md shadow-md border",
        className,
      )}
    >
      <div className="flex items-center justify-between px-5 py-3 border-b">
        <h3 className="font-medium">{t("dashboard.activity.title")}</h3>
      </div>
      <div className="px-5 max-h-80 overflow-y-auto divide-y divide-gray-5">
        {isLoading ? (
          <>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3 py-3">
                <Skeleton className="size-8 rounded-full" />
                <div className="flex-1 flex flex-col gap-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-48" />
                </div>
                <Skeleton className="h-3 w-12" />
              </div>
            ))}
          </>
        ) : activities.length === 0 ? (
          <Empty.Root className="border-0 py-8">
            <Empty.Media variant="icon">
              <Clock01Icon />
            </Empty.Media>
            <Empty.Header>
              <Empty.Title>{t("dashboard.activity.empty.title")}</Empty.Title>
              <Empty.Description>
                {t("dashboard.activity.empty.description")}
              </Empty.Description>
            </Empty.Header>
          </Empty.Root>
        ) : (
          activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))
        )}
      </div>
    </div>
  );
};
