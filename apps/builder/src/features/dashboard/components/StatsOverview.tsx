import { useTranslate } from "@tolgee/react";
import { parseNumberWithCommas } from "@typebot.io/lib/utils";
import { cn } from "@typebot.io/ui/lib/cn";
import { UsersIcon } from "@typebot.io/ui/icons/UsersIcon";
import { ZapIcon } from "@typebot.io/ui/icons/ZapIcon";
import { Wallet01Icon } from "@typebot.io/ui/icons/Wallet01Icon";
import { StatCard } from "./StatCard";
import type { DashboardStats } from "../types";

type Props = {
  stats: DashboardStats;
  isLoading?: boolean;
  className?: string;
};

export const StatsOverview = ({
  stats,
  isLoading,
  className,
}: Props) => {
  const { t } = useTranslate();

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", className)}>
      <StatCard
        icon={<UsersIcon className="size-5" />}
        label={t("dashboard.stats.totalUsers")}
        value={parseNumberWithCommas(stats.totalUsers)}
        iconClassName="bg-blue-4 text-blue-10"
        isLoading={isLoading}
      />
      <StatCard
        icon={<ZapIcon className="size-5" />}
        label={t("dashboard.stats.activeSessions")}
        value={parseNumberWithCommas(stats.activeSessions)}
        iconClassName="bg-green-4 text-green-10"
        isLoading={isLoading}
      />
      <StatCard
        icon={<Wallet01Icon className="size-5" />}
        label={t("dashboard.stats.revenue")}
        value={`$${parseNumberWithCommas(stats.revenue)}`}
        iconClassName="bg-orange-4 text-orange-10"
        isLoading={isLoading}
      />
    </div>
  );
};
