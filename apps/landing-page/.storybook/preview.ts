import type { Preview } from "@storybook/react-vite";
import "../src/assets/globals.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#F1F1F1" },
        { name: "dark", value: "#1a1a1a" },
      ],
    },
  },
};
export default preview;
