import { Button } from "@typebot.io/ui/components/Button";
import {
  PricingCardSimple,
  PricingCardHeader,
  PlanName,
  PlanDescription,
  PlanFeatures,
  FeatureItem,
  PricingCardFooter,
} from "./PricingCardSimple";

export const BasicPricingCard = () => {
  return (
    <PricingCardSimple tier="basic">
      <PricingCardHeader>
        <PlanName>Basic</PlanName>
        <div>
          <div className="text-3xl font-bold">$9</div>
          <div className="text-sm text-muted-foreground">/month</div>
        </div>
        <PlanDescription>
          Perfect for getting started with essential features
        </PlanDescription>
      </PricingCardHeader>

      <PlanFeatures>
        <FeatureItem>Up to 1,000 messages/month</FeatureItem>
        <FeatureItem>Basic analytics</FeatureItem>
        <FeatureItem>Email support</FeatureItem>
        <FeatureItem>Community access</FeatureItem>
      </PlanFeatures>

      <PricingCardFooter>
        <Button variant="secondary" size="lg">
          Get Started
        </Button>
      </PricingCardFooter>
    </PricingCardSimple>
  );
};
