import { cn } from "@typebot.io/ui/lib/cn";
import { cva, cx, type VariantProps } from "@typebot.io/ui/lib/cva";
import * as React from "react";

/**
 * TabBar styling variants using CVA (Class Variance Authority).
 *
 * The component supports two visual variants:
 * - "default": Background highlight with gray container and padding for a pill-button appearance
 * - "underline": No container styling; uses an underline indicator for the selected tab
 *
 * Three size options control text size and proportions throughout the tab bar.
 */
const tabBarVariants = cva(
  cx("flex items-center gap-0.5 w-fit rounded-lg transition-colors"),
  {
    variants: {
      variant: {
        // Default variant wraps items in a rounded container with subtle background
        default: "bg-gray-3 p-0.5",
        // Underline variant has no container; styling is handled by TabItem
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

/**
 * TabItem styling variants.
 *
 * Tab items render as buttons with semantic HTML and ARIA attributes.
 * The component includes:
 * - Disabled state support via data-disabled attribute
 * - Keyboard navigation with focus-visible ring styling
 * - Icon sizing rules: auto-size to 4x4 if no explicit size class
 *
 * Variant styles:
 * - "default": Rounded background highlight on selection (for pill-like appearance)
 * - "underline": Text color change on selection with underline added dynamically
 */
const tabItemVariants = cva(
  cx(
    "flex items-center justify-center gap-1.5 relative whitespace-nowrap font-medium transition-[color,background-color] cursor-pointer outline-hidden focus-visible:ring-2 focus-visible:ring-orange-8 data-disabled:pointer-events-none data-disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ),
  {
    variants: {
      variant: {
        // Default: light background highlight when selected, with shadow for depth
        default:
          "rounded-md px-3 py-1 text-gray-12 hover:text-gray-12 data-selected:bg-gray-1 data-selected:shadow-xs dark:data-selected:bg-gray-2",
        // Underline: text color change with orange indicator added via ::after pseudo-element
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

/**
 * TabItem component - individual tab button.
 *
 * Handles the visual and interactive state of a single tab within the TabBar.
 * Uses semantic HTML (role="tab", aria-selected) for accessibility.
 *
 * For underline variants, the selected indicator is created with an ::after pseudo-element
 * positioned absolutely at the bottom of the button. This keeps the DOM clean while achieving
 * the visual effect.
 */
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
          // Add orange underline indicator for selected tabs in underline variant
          // The ::after pseudo-element stretches full width at the bottom
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
