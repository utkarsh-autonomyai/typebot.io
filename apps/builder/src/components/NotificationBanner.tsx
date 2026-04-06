import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { Button } from "@typebot.io/ui/components/Button";
import { Cancel01Icon } from "@typebot.io/ui/icons/Cancel01Icon";
import { cn } from "@typebot.io/ui/lib/cn";

const notificationBannerVariants = cva(
  "w-full flex items-center justify-between gap-4 rounded-lg p-4 transition-all",
  {
    variants: {
      variant: {
        warning: "bg-yellow-200 text-yellow-900 dark:bg-yellow-500 dark:text-yellow-950",
        success: "bg-green-2 border border-green-6 text-green-10 dark:text-green-11",
      },
    },
    defaultVariants: {
      variant: "warning",
    },
  },
);

type NotificationBannerVariants = VariantProps<typeof notificationBannerVariants>;

type NotificationBannerProps = NotificationBannerVariants & {
  message?: React.ReactNode;
  children?: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
};

export const NotificationBanner = ({
  variant = "warning",
  message,
  children,
  onDismiss,
  className,
}: NotificationBannerProps) => {
  return (
    <div
      role="alert"
      className={cn(notificationBannerVariants({ variant }), className)}
    >
      <div className="flex-1">
        {message ? <p className="text-sm font-medium">{message}</p> : children}
      </div>
      {onDismiss && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onDismiss}
          className={cn(
            "shrink-0",
            variant === "warning" && "hover:bg-yellow-300 dark:hover:bg-yellow-600",
            variant === "success" && "hover:bg-green-3 dark:hover:bg-green-4",
          )}
          aria-label="Dismiss notification"
        >
          <Cancel01Icon className="size-4" />
        </Button>
      )}
    </div>
  );
};
