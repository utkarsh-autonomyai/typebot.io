import { Badge } from "@typebot.io/ui/components/Badge";
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

export const ProPricingCard = () => {
  return (
    <PricingCardSimple tier="pro">
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <Badge variant="solid" colorScheme="orange">
          Most Popular
        </Badge>
      </div>

      <PricingCardHeader>
        <PlanName>Pro</PlanName>
        <div>
          <div className="text-3xl font-bold">$49</div>
          <div className="text-sm text-muted-foreground">/month</div>
        </div>
        <PlanDescription>
          Best for growing teams and businesses scaling up
        </PlanDescription>
      </PricingCardHeader>

      <PlanFeatures>
        <FeatureItem>Unlimited messages</FeatureItem>
        <FeatureItem>Advanced analytics & reporting</FeatureItem>
        <FeatureItem>Priority email & chat support</FeatureItem>
        <FeatureItem>API access</FeatureItem>
        <FeatureItem>Team collaboration (up to 5 users)</FeatureItem>
        <FeatureItem>Custom integrations</FeatureItem>
      </PlanFeatures>

      <PricingCardFooter>
        <Button variant="secondary" size="lg">
          Subscribe Now
        </Button>
      </PricingCardFooter>
    </PricingCardSimple>
  );
};
