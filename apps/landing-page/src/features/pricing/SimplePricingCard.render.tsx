import { SimplePricingCard } from "./SimplePricingCard";

export default function SimplePricingCardRender() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Pricing Plans</h1>
        <p className="text-gray-600 mb-12">
          Choose the perfect plan for your needs
        </p>
        <SimplePricingCard />
      </div>
    </div>
  );
}
