import { cn } from "@typebot.io/ui/lib/cn";
import { Card } from "@/components/Card";

const features = [
  {
    title: "Feature One",
    description:
      "A concise description of the first key feature that highlights its value and benefits to users.",
  },
  {
    title: "Feature Two",
    description:
      "Explain how the second feature helps solve a specific problem or improves the user experience.",
  },
  {
    title: "Feature Three",
    description:
      "Describe the third feature and its unique advantages that set it apart from competitors.",
  },
] as const;

export const FeatureHighlights = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center gap-4">
        <h2>Key Features</h2>
        <p className="text-muted-foreground max-w-xl text-center">
          Everything you need to get started
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col items-center gap-4">
            {/* Icon Placeholder */}
            <div className="size-16 rounded-lg bg-muted flex items-center justify-center" />
            <div className="flex flex-col gap-2 text-center">
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
