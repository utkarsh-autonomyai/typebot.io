import { cn } from "@typebot.io/ui/lib/cn";
import { Skeleton } from "@typebot.io/ui/components/Skeleton";

type Props = {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconClassName?: string;
  isLoading?: boolean;
  className?: string;
};

export const StatCard = ({
  icon,
  label,
  value,
  iconClassName,
  isLoading,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "bg-gray-1 rounded-md shadow-md border py-4 px-5 flex flex-col gap-3",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-full p-2 w-fit",
          iconClassName,
        )}
      >
        {icon}
      </div>
      {isLoading ? (
        <Skeleton className="h-6 w-20" />
      ) : (
        <p className="text-2xl font-bold">{value}</p>
      )}
      {isLoading ? (
        <Skeleton className="h-4 w-16" />
      ) : (
        <p className="text-sm text-gray-9">{label}</p>
      )}
    </div>
  );
};
