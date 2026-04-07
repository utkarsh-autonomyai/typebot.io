import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "@typebot.io/ui/components/Tabs";

const meta: Meta<typeof Tabs.Root> = {
  title: "Components/Tabs",
  component: Tabs.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs.Root>;

/**
 * Default tab variant with pill-shaped background for selected tab.
 * Suitable for content sections where visual separation is important.
 */
export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Account</Tabs.Tab>
        <Tabs.Tab value="tab2">Settings</Tabs.Tab>
        <Tabs.Tab value="tab3">Notifications</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">Account Settings</h3>
          <p className="text-gray-11">
            Manage your account information and preferences.
          </p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="tab2">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">General Settings</h3>
          <p className="text-gray-11">
            Configure general application settings and preferences.
          </p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="tab3">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">Notification Preferences</h3>
          <p className="text-gray-11">
            Choose how you want to receive notifications.
          </p>
        </div>
      </Tabs.Panel>
    </Tabs.Root>
  ),
};

/**
 * Underline variant with bottom border indicator for selected tab.
 * Provides a cleaner, minimal appearance suitable for dashboards and analytics interfaces.
 */
export const Underline: Story = {
  render: () => (
    <Tabs.Root defaultValue="overview">
      <Tabs.List variant="underline">
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
        <Tabs.Tab value="reports">Reports</Tabs.Tab>
        <Tabs.Tab value="export">Export</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">Dashboard Overview</h3>
          <p className="text-gray-11">
            View a summary of your key metrics and performance indicators.
          </p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="analytics">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">Analytics Dashboard</h3>
          <p className="text-gray-11">
            Dive deep into your data with detailed analytics and insights.
          </p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="reports">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">Generated Reports</h3>
          <p className="text-gray-11">
            Access and manage your generated reports.
          </p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="export">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">Export Data</h3>
          <p className="text-gray-11">
            Export your data in various formats for external use.
          </p>
        </div>
      </Tabs.Panel>
    </Tabs.Root>
  ),
};

/**
 * Vertical tab layout with tabs arranged in a column.
 * Useful for settings panels and sidebar navigation where horizontal space is limited.
 */
export const Vertical: Story = {
  render: () => (
    <Tabs.Root
      defaultValue="profile"
      orientation="vertical"
      className="w-[500px]"
    >
      <Tabs.List>
        <Tabs.Tab value="profile">Profile</Tabs.Tab>
        <Tabs.Tab value="security">Security</Tabs.Tab>
        <Tabs.Tab value="billing">Billing</Tabs.Tab>
        <Tabs.Tab value="integrations">Integrations</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="profile">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">Profile Information</h3>
          <p className="text-gray-11">
            Update your personal information and public profile settings.
          </p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="security">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">Security Settings</h3>
          <p className="text-gray-11">
            Manage your password, two-factor authentication, and security
            preferences.
          </p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="billing">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">Billing Information</h3>
          <p className="text-gray-11">
            View and manage your subscription, payment methods, and invoices.
          </p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="integrations">
        <div className="p-4 text-gray-12">
          <h3 className="font-medium mb-2">Third-party Integrations</h3>
          <p className="text-gray-11">
            Connect and manage integrations with other services and
            applications.
          </p>
        </div>
      </Tabs.Panel>
    </Tabs.Root>
  ),
};
