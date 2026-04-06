import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Cta } from "@/components/cta/Cta";
import { AllFeatures } from "@/features/homepage/all-features/AllFeatures";
import { Companies } from "@/features/homepage/companies/components/Companies";
import { Faq } from "@/features/homepage/components/Faq";
import { JoinTheCommunity } from "@/features/homepage/components/JoinTheCommunity";
import { MadeForDevelopers } from "@/features/homepage/components/MadeForDevelopers";
import { ForEveryDepartment } from "@/features/homepage/departments/ForEveryDepartment";
import { GetStarted } from "@/features/homepage/get-started/GetStarted";
// Hero section simplified for Storybook (excludes TopBar with env dependencies)
import { CtaButtonLink } from "@/components/link";
import { registerUrl } from "@/constants";
import { MainFeatures } from "@/features/homepage/main-features/MainFeatures";
import { ProductPrinciples } from "@/features/homepage/product-principles/ProductPrinciples";
import { Testimonials } from "@/features/homepage/testimonials/Testimonials";
import { UseCases } from "@/features/homepage/use-cases/UseCases";

// Create a mock router for Storybook
const createMockRouter = () => {
  const rootRoute = createRootRoute();
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
  });
  rootRoute.addChildren([indexRoute]);
  const memoryHistory = createMemoryHistory({ initialEntries: ["/"] });
  return createRouter({
    routeTree: rootRoute,
    history: memoryHistory,
  });
};

// Simplified Hero component for Storybook (no env-dependent TopBar)
const heroTextHeight = 276;
const HeroForStory = () => (
  <main
    className="relative isolate flex flex-col items-center md:h-[300vh] w-full"
    style={{
      viewTimelineName: "--hero",
      "--hero-text-height": `${heroTextHeight}px`,
    } as React.CSSProperties}
  >
    <div className="flex flex-col items-center px-2 gap-10 pb-44 md:sticky md:top-[calc(100vh/2-var(--hero-text-height)/2)] shrink-0 pt-32 md:pt-0">
      <h1 className="text-center uppercase font-bold text-balance">
        <span className="animate-in fade-in slide-in-from-bottom-10 blur-in-sm inline-block fill-mode-both duration-800 delay-700">
          Hack the bot game:
        </span>
        <br />
        <span className="animate-in fade-in slide-in-from-bottom-10 blur-in-sm inline-block fill-mode-both delay-1900 duration-300">
          Build faster,{" "}
        </span>
        <br />
        <span className="animate-in fade-in slide-in-from-bottom-10 blur-in-sm inline-block fill-mode-both delay-2500 duration-300">
          Chat smarter
        </span>
      </h1>
      <p className="text-center text-foreground/60 font-normal text-balance md:text-xl max-w-3xl animate-in fade-in slide-in-from-bottom-10 blur-in-sm fill-mode-both delay-3000 duration-600">
        Typebot is a no-code platform that enables you to effortlessly create
        and integrate advanced chatbots into websites and chat platforms like
        WhatsApp.
      </p>
      <CtaButtonLink
        className="animate-in fade-in slide-in-from-bottom-10 blur-in-sm fill-mode-both delay-3300 duration-600 md:hidden"
        size="lg"
        href={registerUrl}
      >
        Start building
      </CtaButtonLink>
    </div>
    <div
      className="h-screen w-full sticky inset-0 px-0 rounded-3xl animate-magic-zoom opacity-0 hidden md:motion-reduce:hidden md:supports-[animation-timeline:scroll()]:block bg-[url('$magicBackgrounds/magic-background-desktop.png')] bg-no-repeat bg-size-[100%]"
      style={{
        animationTimeline: "--hero",
        animationRange: "contain 0% exit-crossing 50%",
      }}
    >
      <div
        className="bg-[url('$magicBackgrounds/magic-background.png')] bg-no-repeat bg-size-[100%] size-full absolute top-0 animate-magic-zoom-blur"
        style={{
          animationTimeline: "--hero",
          animationRange: "contain 0% exit-crossing 50%",
        }}
      />
    </div>
  </main>
);

// Create a Home component for the story (identical to the route component)
const Home = () => {
  return (
    <div className="flex flex-col items-stretch">
      <Section className="dark py-0 md:py-0 md:px-0 gap-0">
        <HeroForStory />
      </Section>
      <div className="-mt-24 md:-mt-[120vh]">
        <Section className="relative isolate px-0 rounded-t-3xl motion-opacity-in-0 animate-in fade-in slide-in-from-bottom-[40px] fill-mode-both duration-600 delay-4000 md:animate-none md:pt-32 bg-transparent">
          <div className="motion-safe:md-scroll-magic-container-fade-in absolute inset-0 size-full rounded-t-3xl -z-10 bg-[url('$magicBackgrounds/magic-background.png')] bg-no-repeat bg-size-[100%] md:motion-safe:opacity-0" />
          <div className="md:h-[200vh] motion-safe:md-scroll-use-cases-fade-in md:motion-safe:opacity-0">
            <UseCases className="md:sticky top-0" />
          </div>
          <Companies />
          <div data-magic-animation-separator className="invisible -mt-32" />
          <MainFeatures />
        </Section>
        <Section className="dark">
          <ForEveryDepartment />
        </Section>
        <Section>
          <MadeForDevelopers />
          <JoinTheCommunity />
          <ProductPrinciples />
        </Section>
        <Section className="dark md:py-0 px-0 md:px-0 gap-0">
          <AllFeatures />
        </Section>
        <Section>
          <GetStarted />
          <Testimonials />
          <Cta />
          <Faq />
        </Section>
      </div>
    </div>
  );
};

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const router = createMockRouter();
      return (
        <RouterProvider router={router}>
          <Story />
        </RouterProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {};
