import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { TickIcon } from "@typebot.io/ui/icons/TickIcon";
import { cn } from "@typebot.io/ui/lib/cn";

/**
 * Pricing Card Tier Type
 */
export type PricingTier = "basic" | "pro" | "enterprise";

/**
 * Pricing Card variant styles
 */
const pricingCardVariants = cva(
  "rounded-2xl border bg-card text-card-foreground flex flex-col relative isolate items-center justify-between w-full pt-20 gap-10",
  {
    variants: {
      tier: {
        basic:
          "border-gray-6 hover:border-gray-7 hover:shadow-md transition-all",
        pro: "border-orange-9 border-4 hover:shadow-lg transition-all",
        enterprise:
          "border-gray-6 hover:border-gray-7 hover:shadow-md transition-all pt-10",
      },
    },
    defaultVariants: {
      tier: "basic",
    },
  },
);

const planPillVariants = cva(
  "rounded-b-lg text-white p-1.5 uppercase font-bold text-xs px-4 absolute top-0",
  {
    variants: {
      tier: {
        basic: "bg-gray-11",
        pro: "bg-orange-9",
        enterprise: "hidden",
      },
    },
    defaultVariants: {
      tier: "basic",
    },
  },
);

/**
 * Simple Pricing Card Root Component
 */
export const PricingCardSimple = ({
  children,
  tier = "basic",
  className,
}: {
  children: ReactNode;
  tier?: PricingTier;
  className?: string;
}) => (
  <div className={cn(pricingCardVariants({ tier }), className)}>
    {tier !== "enterprise" && <PlanPill tier={tier} />}
    {children}
  </div>
);

/**
 * Plan Name Pill Badge
 */
const PlanPill = ({ tier }: { tier: PricingTier }) => {
  const tierNames: Record<PricingTier, string> = {
    basic: "Basic",
    pro: "Pro",
    enterprise: "Enterprise",
  };

  return (
    <div className={planPillVariants({ tier })}>{tierNames[tier]}</div>
  );
};

/**
 * Pricing Card Header (for plan name and description)
 */
export const PricingCardHeader = ({
  children,
}: {
  children: ReactNode;
}) => <div className="flex flex-col gap-10 items-center">{children}</div>;

/**
 * Plan Name
 */
export const PlanName = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <h2 className={cn("text-3xl font-bold", className)}>{children}</h2>;

/**
 * Plan Description
 */
export const PlanDescription = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={cn("text-sm text-muted-foreground text-center max-w-sm", className)}
  >
    {children}
  </p>
);

/**
 * Plan Features List
 */
export const PlanFeatures = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <ul className={cn("flex flex-col gap-3", className)}>{children}</ul>
);

/**
 * Feature List Item with Checkmark
 */
export const FeatureItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <li className={cn("flex gap-3", className)}>
    <CheckIcon className="mt-1 shrink-0" />
    {children}
  </li>
);

/**
 * Check Icon
 */
const CheckIcon = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "rounded-full size-4 bg-stone-950 flex items-center justify-center flex-shrink-0",
      className,
    )}
  >
    <TickIcon className="text-white p-0.5" />
  </div>
);

/**
 * Pricing Card Footer (for CTA buttons)
 */
export const PricingCardFooter = ({
  children,
}: {
  children: ReactNode;
}) => (
  <div className="border-t w-full py-6 flex justify-center">{children}</div>
);
