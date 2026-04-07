import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { TabBar, TabItem } from "./TabBar";

const meta: Meta<typeof TabBar> = {
  title: "Components/TabBar",
  component: TabBar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "underline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabBar>;

/**
 * Interactive TabBar wrapper for Storybook demonstrations.
 *
 * This component manages the selected tab state and provides a working example
 * of the TabBar component. In production, consumers should manage tab selection
 * state in their own components.
 */
const TabBarInteractive = ({
  variant,
  size,
  tabs,
}: {
  variant?: "default" | "underline";
  size?: "sm" | "md" | "lg";
  tabs: Array<{ label: string; icon?: React.ReactNode }>;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Helper to find tab index by label — used for determining selected state and handling selection
  const getTabIndex = (label: string) =>
    tabs.findIndex((t) => t.label === label);

  return (
    <TabBar variant={variant} size={size}>
      {tabs.map((tab) => (
        <TabItem
          key={tab.label}
          variant={variant}
          size={size}
          icon={tab.icon}
          isSelected={selectedIndex === getTabIndex(tab.label)}
          onSelect={() => setSelectedIndex(getTabIndex(tab.label))}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabBar>
  );
};

// Default variant with background highlight
export const Default: Story = {
  render: () => (
    <TabBarInteractive
      variant="default"
      tabs={[
        { label: "Overview" },
        { label: "Analytics" },
        { label: "Settings" },
      ]}
    />
  ),
};

// Underline variant
export const Underline: Story = {
  render: () => (
    <TabBarInteractive
      variant="underline"
      tabs={[
        { label: "Overview" },
        { label: "Analytics" },
        { label: "Settings" },
      ]}
    />
  ),
};

/**
 * Reusable icon components for Storybook examples.
 * These are simple SVG icons used to demonstrate the TabBar with icons.
 */
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4"
  >
    <title>Home</title>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4"
  >
    <title>Analytics</title>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4"
  >
    <title>Settings</title>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

// With icons (default variant)
export const WithIcons: Story = {
  render: () => (
    <TabBarInteractive
      variant="default"
      tabs={[
        { label: "Home", icon: <HomeIcon /> },
        { label: "Analytics", icon: <ChartIcon /> },
        { label: "Settings", icon: <SettingsIcon /> },
      ]}
    />
  ),
};

// With icons (underline variant)
export const WithIconsUnderline: Story = {
  render: () => (
    <TabBarInteractive
      variant="underline"
      tabs={[
        { label: "Home", icon: <HomeIcon /> },
        { label: "Analytics", icon: <ChartIcon /> },
        { label: "Settings", icon: <SettingsIcon /> },
      ]}
    />
  ),
};

// Small size
export const SizeSmall: Story = {
  render: () => (
     <TabBarInteractive
       variant="default"
       size="sm"
       tabs={[{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }]}
     />
  ),
};

// Medium size (default)
export const SizeMedium: Story = {
  render: () => (
     <TabBarInteractive
       variant="default"
       size="md"
       tabs={[{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }]}
     />
  ),
};

// Large size
export const SizeLarge: Story = {
  render: () => (
     <TabBarInteractive
       variant="default"
       size="lg"
       tabs={[{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }]}
     />
  ),
};

// Two tabs configuration
export const TwoTabs: Story = {
  render: () => (
    <TabBarInteractive
      variant="default"
      tabs={[{ label: "Active" }, { label: "Archived" }]}
    />
  ),
};

// Five tabs configuration
export const FiveTabs: Story = {
  render: () => (
    <TabBarInteractive
      variant="default"
      tabs={[
        { label: "All" },
        { label: "Active" },
        { label: "Pending" },
        { label: "Completed" },
        { label: "Archived" },
      ]}
    />
  ),
};

// All sizes comparison
export const AllSizesComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-11">Small (sm)</span>
        <TabBarInteractive
          variant="default"
          size="sm"
          tabs={[
            { label: "Overview" },
            { label: "Analytics" },
            { label: "Settings" },
          ]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-11">Medium (md)</span>
        <TabBarInteractive
          variant="default"
          size="md"
          tabs={[
            { label: "Overview" },
            { label: "Analytics" },
            { label: "Settings" },
          ]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-base text-gray-11">Large (lg)</span>
        <TabBarInteractive
          variant="default"
          size="lg"
          tabs={[
            { label: "Overview" },
            { label: "Analytics" },
            { label: "Settings" },
          ]}
        />
      </div>
    </div>
  ),
};

// Both variants comparison
export const VariantsComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-11">
          Default (background highlight)
        </span>
        <TabBarInteractive
          variant="default"
          tabs={[
            { label: "Overview" },
            { label: "Analytics" },
            { label: "Settings" },
          ]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-11">Underline</span>
        <TabBarInteractive
          variant="underline"
          tabs={[
            { label: "Overview" },
            { label: "Analytics" },
            { label: "Settings" },
          ]}
        />
      </div>
    </div>
  ),
};
