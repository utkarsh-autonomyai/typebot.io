import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../apps/landing-page/src/components/**/*.stories.ts?(x)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    // Filter out any duplicate React plugins to avoid RefreshRuntime conflict
    config.plugins = (config.plugins || []).filter(
      (plugin) =>
        plugin &&
        typeof plugin === "object" &&
        "name" in plugin &&
        plugin.name !== "vite:react-babel",
    );
    // Add Tailwind CSS v4 plugin for proper CSS processing
    config.plugins?.push(tailwindcss());
    return config;
  },
};

export default config;
