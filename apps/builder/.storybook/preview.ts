import React from "react";
import type { Preview, Decorator } from "@storybook/react-vite";
import { TolgeeProvider, Tolgee } from "@tolgee/react";
import { FormatIcu } from "@tolgee/format-icu";
import "../src/assets/styles/globals.css";
import en from "../src/i18n/en.json";

// Create a Storybook-specific Tolgee instance without env vars
const storybookTolgee = Tolgee()
  .use(FormatIcu())
  .init({
    defaultLanguage: "en",
    availableLanguages: ["en"],
    fallbackLanguage: "en",
    staticData: { en },
  });

const withTolgee: Decorator = (Story) => {
  return React.createElement(TolgeeProvider, { tolgee: storybookTolgee }, React.createElement(Story));
};

const preview: Preview = {
  decorators: [withTolgee],
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
