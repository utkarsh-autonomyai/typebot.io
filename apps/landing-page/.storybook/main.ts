import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: { autodocs: "tag" },
  staticDirs: ["../../../packages/ui/assets"],
  viteFinal: async (config) => {
    // Filter out any duplicate React plugins to avoid RefreshRuntime conflict
    config.plugins = (config.plugins || []).filter(
      (plugin) => plugin && typeof plugin === 'object' && 'name' in plugin && plugin.name !== 'vite:react-babel'
    );
    // Add Tailwind CSS v4 plugin for proper CSS processing
    config.plugins.push(tailwindcss());
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(__dirname, "../src"),
      },
    };
    return config;
  },
};
export default config;
