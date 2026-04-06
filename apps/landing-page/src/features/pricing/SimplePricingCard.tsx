import { CtaButtonLink } from "@/components/link";
import { enterpriseLeadTypebotUrl, registerUrl } from "@/constants";
import {
  PerkListItem,
  PlanNamePill,
  PricingCardFooter,
  PricingCardRoot,
} from "./components/pricing-card";

export const SimplePricingCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* Basic Tier */}
      <PricingCardRoot>
        <PlanNamePill className="bg-blue-400 text-white absolute top-0 flex flex-col">
          Basic
        </PlanNamePill>
        <div className="flex flex-col gap-10 items-center">
          <h2>
            $9<span className="text-lg">/month</span>
          </h2>
        </div>
        <BasicPerksList />
        <PricingCardFooter>
          <CtaButtonLink href={registerUrl} variant="secondary" size="lg">
            Get started
          </CtaButtonLink>
        </PricingCardFooter>
      </PricingCardRoot>

      {/* Pro Tier */}
      <PricingCardRoot className="border-purple-400 border-4">
        <PlanNamePill className="bg-purple-400 text-white absolute top-0 flex flex-col">
          Pro
        </PlanNamePill>
        <div className="flex flex-col gap-10 items-center">
          <h2>
            $29<span className="text-lg">/month</span>
          </h2>
        </div>
        <ProPerksList />
        <PricingCardFooter>
          <CtaButtonLink href={registerUrl} variant="secondary" size="lg">
            Subscribe now
          </CtaButtonLink>
        </PricingCardFooter>
      </PricingCardRoot>

      {/* Enterprise Tier */}
      <PricingCardRoot>
        <PlanNamePill className="bg-stone-950 text-white absolute top-0 flex flex-col">
          Enterprise
        </PlanNamePill>
        <div className="flex flex-col gap-10 items-center">
          <h2>
            <span className="text-lg">Contact us</span>
          </h2>
        </div>
        <EnterprisePerksList />
        <PricingCardFooter>
          <CtaButtonLink
            href={enterpriseLeadTypebotUrl}
            variant="secondary"
            size="lg"
          >
            Get a quote
          </CtaButtonLink>
        </PricingCardFooter>
      </PricingCardRoot>
    </div>
  );
};

const BasicPerksList = () => (
  <ul className="flex flex-col gap-3">
    <PerkListItem>Unlimited typebots</PerkListItem>
    <PerkListItem>Up to 1,000 chats/month</PerkListItem>
    <PerkListItem>Basic integrations</PerkListItem>
    <PerkListItem>Community support</PerkListItem>
    <PerkListItem>1 user seat</PerkListItem>
  </ul>
);

const ProPerksList = () => (
  <ul className="flex flex-col gap-3">
    <PerkListItem>Unlimited typebots</PerkListItem>
    <PerkListItem>Up to 10,000 chats/month</PerkListItem>
    <PerkListItem>Advanced integrations</PerkListItem>
    <PerkListItem>Email & chat support</PerkListItem>
    <PerkListItem>5 user seats</PerkListItem>
    <PerkListItem>Custom domain</PerkListItem>
    <PerkListItem>Advanced analytics</PerkListItem>
  </ul>
);

const EnterprisePerksList = () => (
  <ul className="flex flex-col gap-3">
    <PerkListItem>Custom chats limit</PerkListItem>
    <PerkListItem>Custom seats</PerkListItem>
    <PerkListItem>All integrations included</PerkListItem>
    <PerkListItem>24/7 priority support</PerkListItem>
    <PerkListItem>SSO & advanced security</PerkListItem>
    <PerkListItem>Dedicated account manager</PerkListItem>
    <PerkListItem>Custom SLA</PerkListItem>
  </ul>
);
