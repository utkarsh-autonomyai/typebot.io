import { Card } from "@/components/Card";
import { ZapIcon } from "@typebot.io/ui/icons/ZapIcon";
import { UsersIcon } from "@typebot.io/ui/icons/UsersIcon";
import { CodeIcon } from "@typebot.io/ui/icons/CodeIcon";

const features = [
  {
    icon: ZapIcon,
    title: "Lightning Fast",
    description: "Build and deploy chatbots in minutes with our intuitive drag-and-drop builder.",
  },
  {
    icon: UsersIcon,
    title: "Multi-Channel",
    description: "Reach your audience everywhere. Embed on websites or integrate with WhatsApp, Discord, and more.",
  },
  {
    icon: CodeIcon,
    title: "Powerful Integrations",
    description: "Connect to 5000+ apps including Zapier, Google Sheets, HTTP webhooks, and AI models.",
  },
];

export const FeaturesGrid = () => (
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
    {features.map((feature) => {
      const Icon = feature.icon;
      return (
        <Card
          key={feature.title}
          className="p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-200"
        >
          <Icon className="w-8 h-8 text-orange-500" />
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-sm text-foreground/60">{feature.description}</p>
        </Card>
      );
    })}
  </div>
);
