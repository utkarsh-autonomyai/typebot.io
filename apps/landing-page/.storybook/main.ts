import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: { autodocs: "tag" },
  staticDirs: ["../../../packages/ui/assets"],
  viteFinal: async (config) => {
    // Remove duplicate React Babel plugin that causes RefreshRuntime conflicts
    // in Vite-based Storybook when multiple plugin instances are registered
    const isNotReactBabel = (plugin: unknown) => {
      return plugin && typeof plugin === 'object' && 'name' in plugin && plugin.name !== 'vite:react-babel';
    };
    config.plugins = (config.plugins || []).filter(isNotReactBabel);
    // Add Tailwind CSS v4 plugin for proper CSS processing
    config.plugins.push(tailwindcss());
    config.define = {
      ...config.define,
      "process.env": {},
    };
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
