import React from "react";
import type { Preview, Decorator } from "@storybook/react-vite";
import {
  createMemoryHistory,
  createRouter,
  createRootRoute,
  RouterProvider,
  Outlet,
} from "@tanstack/react-router";
import "../src/assets/globals.css";

const withRouter: Decorator = (Story) => {
  // Create a root route that renders the Story component
  const rootRoute = createRootRoute({
    component: () => React.createElement(Story),
  });

  const memoryHistory = createMemoryHistory({
    initialEntries: ["/"],
  });

  const router = createRouter({
    routeTree: rootRoute,
    history: memoryHistory,
  });

  return React.createElement(RouterProvider, { router });
};

const preview: Preview = {
  decorators: [withRouter],
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
