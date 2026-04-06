import React from "react";
import type { Preview } from "@storybook/react-vite";
import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from "../src/lib/tolgee";
import "@typebot.io/ui/theme.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <TolgeeProvider tolgee={tolgee}>
        <Story />
      </TolgeeProvider>
    ),
  ],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f8f8f8" },
        { name: "dark", value: "#1a1a1a" },
      ],
    },
  },
};
export default preview;
