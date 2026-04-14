import { BasicPricingCard } from "./components/BasicPricingCard";
import { ProPricingCard } from "./components/ProPricingCard";
import { EnterprisePricingCard } from "./components/EnterprisePricingCard";

export const PricingCardShowcase = () => {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple Pricing</h1>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your needs
          </p>
        </div>

        {/* Desktop - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          <BasicPricingCard />
          <ProPricingCard />
          <div />
        </div>

        {/* Enterprise - Full width below */}
        <div className="flex justify-center mb-12">
          <EnterprisePricingCard />
        </div>

        {/* Mobile/Tablet - Stacked */}
        <div className="md:hidden flex flex-col gap-8">
          <BasicPricingCard />
          <ProPricingCard />
          <EnterprisePricingCard />
        </div>
      </div>
    </div>
  );
};
