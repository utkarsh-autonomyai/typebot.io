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

export const EnterprisePricingCard = () => {
  return (
    <PricingCardSimple tier="enterprise" className="max-w-3xl">
      <PricingCardHeader>
        <PlanName>Enterprise</PlanName>
        <div>
          <div className="text-3xl font-bold">Custom Pricing</div>
          <div className="text-sm text-muted-foreground">
            Tailored to your needs
          </div>
        </div>
        <PlanDescription>
          For large organizations with advanced requirements and dedicated
          support
        </PlanDescription>
      </PricingCardHeader>

      <PlanFeatures className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-8">
        <FeatureItem>Unlimited everything</FeatureItem>
        <FeatureItem>Dedicated account manager</FeatureItem>
        <FeatureItem>24/7 phone & email support</FeatureItem>
        <FeatureItem>Custom SLA agreements</FeatureItem>
        <FeatureItem>Single Sign-On (SSO)</FeatureItem>
        <FeatureItem>Advanced security features</FeatureItem>
        <FeatureItem>Unlimited team members</FeatureItem>
        <FeatureItem>Custom integrations & API</FeatureItem>
        <FeatureItem>On-premise deployment option</FeatureItem>
        <FeatureItem>Quarterly business reviews</FeatureItem>
      </PlanFeatures>

      <PricingCardFooter>
        <Button variant="secondary" size="lg">
          Contact Sales
        </Button>
      </PricingCardFooter>
    </PricingCardSimple>
  );
};
