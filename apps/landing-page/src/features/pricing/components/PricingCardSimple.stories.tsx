import type { Meta, StoryObj } from "@storybook/react-vite";
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

const meta: Meta<typeof PricingCardSimple> = {
  title: "Features/Pricing/PricingCardSimple",
  component: PricingCardSimple,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PricingCardSimple>;

/**
 * Basic tier pricing card - perfect for getting started
 */
export const Basic: Story = {
  render: () => (
    <div className="w-80">
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
    </div>
  ),
};

/**
 * Pro tier pricing card - best for growing teams
 */
export const Pro: Story = {
  render: () => (
    <div className="w-80">
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
    </div>
  ),
};

/**
 * Enterprise tier pricing card - for large organizations
 */
export const Enterprise: Story = {
  render: () => (
    <div className="w-[600px]">
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
    </div>
  ),
};

/**
 * All three tiers side by side
 */
export const AllTiers: Story = {
  render: () => (
    <div className="flex gap-6 items-start flex-wrap justify-center">
      {/* Basic */}
      <div className="w-80">
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
      </div>

      {/* Pro */}
      <div className="w-80">
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
      </div>

      {/* Enterprise */}
      <div className="w-80">
        <PricingCardSimple tier="enterprise">
          <PricingCardHeader>
            <PlanName>Enterprise</PlanName>
            <div>
              <div className="text-3xl font-bold">Custom</div>
              <div className="text-sm text-muted-foreground">
                Tailored to your needs
              </div>
            </div>
            <PlanDescription>
              For large organizations with advanced requirements
            </PlanDescription>
          </PricingCardHeader>

          <PlanFeatures>
            <FeatureItem>Unlimited everything</FeatureItem>
            <FeatureItem>Dedicated account manager</FeatureItem>
            <FeatureItem>24/7 phone & email support</FeatureItem>
            <FeatureItem>Custom SLA agreements</FeatureItem>
          </PlanFeatures>

          <PricingCardFooter>
            <Button variant="secondary" size="lg">
              Contact Sales
            </Button>
          </PricingCardFooter>
        </PricingCardSimple>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
