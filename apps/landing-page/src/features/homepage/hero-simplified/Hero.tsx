import { CtaButtonLink } from "@/components/link";
import { registerUrl } from "@/constants";

export const Hero = () => (
  <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4">
    <h1 className="text-center text-5xl md:text-6xl font-bold text-balance max-w-4xl leading-tight">
      Build Advanced Chatbots Without Coding
    </h1>
    <p className="text-center text-xl text-foreground/70 text-balance max-w-2xl">
      Typebot is the easiest way to create and integrate powerful chatbots into
      your website and chat platforms. Get started in minutes, not months.
    </p>
    <CtaButtonLink size="lg" href={registerUrl} className="mt-4">
      Start Building Free
    </CtaButtonLink>
  </div>
);
