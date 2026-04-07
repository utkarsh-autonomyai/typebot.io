import { cn } from "@typebot.io/ui/lib/cn";
import { cva, cx, type VariantProps } from "@typebot.io/ui/lib/cva";
import * as React from "react";

const tabBarVariants = cva(
  cx("flex items-center gap-0.5 w-fit rounded-lg transition-colors"),
  {
    variants: {
      variant: {
        default: "bg-gray-3 p-0.5",
        underline: "",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

const tabItemVariants = cva(
  cx(
    "flex items-center justify-center gap-1.5 relative whitespace-nowrap font-medium transition-[color,background-color] cursor-pointer outline-hidden focus-visible:ring-2 focus-visible:ring-orange-8 data-disabled:pointer-events-none data-disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ),
  {
    variants: {
      variant: {
        default:
          "rounded-md px-3 py-1 text-gray-12 hover:text-gray-12 data-selected:bg-gray-1 data-selected:shadow-xs dark:data-selected:bg-gray-2",
        underline:
          "px-3 py-1 text-gray-11 hover:text-gray-12 relative data-selected:text-orange-9",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface TabBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabBarVariants> {}

export interface TabItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabItemVariants> {
  icon?: React.ReactNode;
  isSelected?: boolean;
  onSelect?: () => void;
}

const TabBar = React.forwardRef<HTMLDivElement, TabBarProps>(
  (
    { className, variant = "default", size = "md", children, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="tab-bar"
        className={cn(tabBarVariants({ variant, size }), className)}
        role="tablist"
        {...props}
      >
        {children}
      </div>
    );
  },
);
TabBar.displayName = "TabBar";

const TabItem = React.forwardRef<HTMLButtonElement, TabItemProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      icon,
      isSelected = false,
      onSelect,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        data-slot="tab-item"
        data-selected={isSelected}
        type="button"
        role="tab"
        aria-selected={isSelected}
        className={cn(
          tabItemVariants({ variant, size }),
          variant === "underline" &&
            isSelected &&
            "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-9 after:rounded-full",
          className,
        )}
        onClick={() => onSelect?.()}
        {...props}
      >
        {icon && (
          <span className="flex items-center justify-center">{icon}</span>
        )}
        {children}
      </button>
    );
  },
);
TabItem.displayName = "TabItem";

export { TabBar, TabItem };
