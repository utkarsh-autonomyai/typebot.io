import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cta } from "@/components/cta/Cta";
import { Section } from "@/components/Section";
import { AllFeatures } from "@/features/homepage/all-features/AllFeatures";
import { Companies } from "@/features/homepage/companies/components/Companies";
import { Faq } from "@/features/homepage/components/Faq";
import { JoinTheCommunity } from "@/features/homepage/components/JoinTheCommunity";
import { MadeForDevelopers } from "@/features/homepage/components/MadeForDevelopers";
import { ForEveryDepartment } from "@/features/homepage/departments/ForEveryDepartment";
import { GetStarted } from "@/features/homepage/get-started/GetStarted";
import { Hero } from "@/features/homepage/hero/Hero";
import { MainFeatures } from "@/features/homepage/main-features/MainFeatures";
import { ProductPrinciples } from "@/features/homepage/product-principles/ProductPrinciples";
import { Testimonials } from "@/features/homepage/testimonials/Testimonials";
import { UseCases } from "@/features/homepage/use-cases/UseCases";

function Homepage() {
  return (
    <div className="flex flex-col items-stretch">
      <Section className="dark py-0 md:py-0 md:px-0 gap-0">
        <Hero />
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
}

const meta: Meta<typeof Homepage> = {
  title: "Pages/Homepage",
  component: Homepage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Homepage>;

export const Default: Story = {};

export const HeroSection: Story = {
  render: () => (
    <Section className="dark py-0 md:py-0 md:px-0 gap-0">
      <Hero />
    </Section>
  ),
};

export const UseCasesSection: Story = {
  render: () => (
    <Section className="relative isolate px-0 rounded-t-3xl bg-transparent">
      <UseCases />
    </Section>
  ),
};

export const CompaniesSection: Story = {
  render: () => (
    <Section>
      <Companies />
    </Section>
  ),
};

export const MainFeaturesSection: Story = {
  render: () => (
    <Section>
      <MainFeatures />
    </Section>
  ),
};

export const ForEveryDepartmentSection: Story = {
  render: () => (
    <Section className="dark">
      <ForEveryDepartment />
    </Section>
  ),
};

export const MadeForDevelopersSection: Story = {
  render: () => (
    <Section>
      <MadeForDevelopers />
    </Section>
  ),
};

export const JoinTheCommunitySection: Story = {
  render: () => (
    <Section>
      <JoinTheCommunity />
    </Section>
  ),
};

export const ProductPrinciplesSection: Story = {
  render: () => (
    <Section>
      <ProductPrinciples />
    </Section>
  ),
};

export const AllFeaturesSection: Story = {
  render: () => (
    <Section className="dark md:py-0 px-0 md:px-0 gap-0">
      <AllFeatures />
    </Section>
  ),
};

export const GetStartedSection: Story = {
  render: () => (
    <Section>
      <GetStarted />
    </Section>
  ),
};

export const TestimonialsSection: Story = {
  render: () => (
    <Section>
      <Testimonials />
    </Section>
  ),
};

export const CtaSection: Story = {
  render: () => (
    <Section>
      <Cta />
    </Section>
  ),
};

export const FaqSection: Story = {
  render: () => (
    <Section>
      <Faq />
    </Section>
  ),
};
