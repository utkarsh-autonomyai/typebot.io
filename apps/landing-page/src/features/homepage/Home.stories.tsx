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
import { AllFeatures } from "./all-features/AllFeatures";
import { Companies } from "./companies/components/Companies";
import { Faq } from "./components/Faq";
import { JoinTheCommunity } from "./components/JoinTheCommunity";
import { MadeForDevelopers } from "./components/MadeForDevelopers";
import { ForEveryDepartment } from "./departments/ForEveryDepartment";
import { GetStarted } from "./get-started/GetStarted";
import { MainFeatures } from "./main-features/MainFeatures";
import { ProductPrinciples } from "./product-principles/ProductPrinciples";
import { Testimonials } from "./testimonials/Testimonials";
import { UseCases } from "./use-cases/UseCases";
import { CtaButtonLink } from "@/components/link";
import { registerUrl } from "@/constants";

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
    className="relative isolate flex flex-col items-center w-full"
    style={{
      "--hero-text-height": `${heroTextHeight}px`,
    } as React.CSSProperties}
  >
    <div className="flex flex-col items-center px-2 gap-10 pb-44 shrink-0 pt-32">
      <h1 className="text-center uppercase font-bold text-balance">
        <span className="inline-block">
          Hack the bot game:
        </span>
        <br />
        <span className="inline-block">
          Build faster,{" "}
        </span>
        <br />
        <span className="inline-block">
          Chat smarter
        </span>
      </h1>
      <p className="text-center text-foreground/60 font-normal text-balance md:text-xl max-w-3xl">
        Typebot is a no-code platform that enables you to effortlessly create
        and integrate advanced chatbots into websites and chat platforms like
        WhatsApp.
      </p>
      <CtaButtonLink
        size="lg"
        href={registerUrl}
      >
        Start building
      </CtaButtonLink>
    </div>
  </main>
);

// Create a Home component for the story (simplified version of the route component)
const Home = () => {
  return (
    <div className="flex flex-col items-stretch">
      <Section className="dark py-0 md:py-0 gap-0">
        <HeroForStory />
      </Section>
      <Section className="relative isolate rounded-t-3xl bg-transparent">
        <UseCases />
        <Companies />
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
