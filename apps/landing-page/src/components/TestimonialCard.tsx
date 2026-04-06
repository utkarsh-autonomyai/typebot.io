import { cn } from "@typebot.io/ui/lib/cn";
import { cva, type VariantProps } from "@typebot.io/ui/lib/cva";
import * as React from "react";

const testimonialCardVariants = cva(
  "rounded-2xl border bg-white transition-all duration-200 hover:shadow-lg hover:border-gray-7",
  {
    variants: {
      variant: {
        default:
          "border-gray-5 shadow-sm hover:shadow-md",
        elevated:
          "border-gray-6 shadow-md hover:shadow-lg",
        minimal:
          "border-gray-3 shadow-none hover:shadow-sm",
        featured:
          "border-orange-4 bg-gradient-to-br from-orange-1/50 to-white shadow-md hover:shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface LogoPlaceholderProps {
  initials?: string;
  backgroundColor?: string;
}

interface TestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof testimonialCardVariants> {
  quote: React.ReactNode;
  authorName: string;
  authorRole: string;
  authorCompany?: string;
  logoSrc?: string;
  logoPlaceholder?: LogoPlaceholderProps;
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  (
    {
      className,
      variant,
      quote,
      authorName,
      authorRole,
      authorCompany,
      logoSrc,
      logoPlaceholder,
      ...props
    },
    ref,
  ) => {
    const logoInitials =
      logoPlaceholder?.initials || authorCompany?.charAt(0).toUpperCase() || "•";
    const logoBgColor =
      logoPlaceholder?.backgroundColor || "bg-gradient-to-br from-orange-5 to-orange-6";

    return (
      <div
        ref={ref}
        className={cn(testimonialCardVariants({ variant, className }))}
        data-slot="testimonial-card"
        {...props}
      >
        <div className="flex flex-col gap-4 p-6">
          {/* Quote Section */}
          <div className="flex gap-3">
            <div className="text-2xl text-orange-9 shrink-0 mt-1">
              "
            </div>
            <p className="text-sm leading-relaxed text-gray-12 font-regular">
              {quote}
            </p>
            <div className="text-2xl text-orange-9 shrink-0 self-end">
              "
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-4" />

          {/* Author Section */}
          <div className="flex items-center gap-3">
            {/* Logo Placeholder */}
            <div
              className={cn(
                "size-10 rounded-lg shrink-0 flex items-center justify-center font-semibold text-white text-sm",
                logoBgColor,
              )}
              data-slot="testimonial-card-logo"
            >
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={`${authorCompany} logo`}
                  className="size-full object-contain p-1.5 rounded-lg"
                />
              ) : (
                logoInitials
              )}
            </div>

            {/* Author Info */}
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-12 truncate">
                {authorName}
              </p>
              <p className="text-xs text-gray-8 truncate">
                {authorRole}
                {authorCompany && ` at ${authorCompany}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

TestimonialCard.displayName = "TestimonialCard";

export { TestimonialCard, testimonialCardVariants };
export type { TestimonialCardProps, LogoPlaceholderProps };
