import type { Meta, StoryObj } from "@storybook/react-vite";
import { Section } from "@/components/Section";
import { Hero } from "@/features/homepage/hero-simplified/Hero";
import { FeaturesGrid } from "@/features/homepage/hero-simplified/FeaturesGrid";

// Since the Home component uses createFileRoute which requires router context,
// we'll create a standalone component that renders the same content
const HomePage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <Section className="py-0 md:py-0 md:px-0 gap-0">
        <Hero />
      </Section>
      <Section>
        <FeaturesGrid />
      </Section>
    </div>
  );
};

const meta: Meta<typeof HomePage> = {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
