import { cn } from "@typebot.io/ui/lib/cn";
import { CtaButtonLink } from "./link";
import { registerUrl } from "@/constants";

export type HeroBannerProps = {
  heading: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  headingClassName?: string;
  subtitleClassName?: string;
  buttonClassName?: string;
};

export const HeroBanner = ({
  heading,
  subtitle,
  ctaLabel = "Get started free",
  ctaHref = registerUrl,
  className,
  headingClassName,
  subtitleClassName,
  buttonClassName,
}: HeroBannerProps) => {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-10 px-4 py-20 md:py-32",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-6 max-w-4xl">
        <h1
          className={cn(
            "text-center text-balance text-4xl md:text-6xl font-bold",
            headingClassName,
          )}
        >
          {heading}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "text-center text-foreground/60 text-lg md:text-xl text-balance",
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      <CtaButtonLink
        className={cn("", buttonClassName)}
        size="lg"
        href={ctaHref}
      >
        {ctaLabel}
      </CtaButtonLink>
    </section>
  );
};
