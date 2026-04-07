import React from "react";
import type { Preview, Decorator } from "@storybook/react-vite";
import {
  createMemoryHistory,
  createRouter,
  createRootRoute,
  RouterProvider,
} from "@tanstack/react-router";
import "../src/assets/globals.css";

/**
 * Creates a TanStack Router instance configured for Storybook.
 * Uses in-memory history to isolate each story's navigation state
 * and wraps the story component in a router context.
 */
const createStoryRouter = (StoryComponent: React.ComponentType) => {
  // Wrap story in a root route for router navigation context
  const rootRoute = createRootRoute({
    component: () => React.createElement(StoryComponent),
  });

  // Use memory history starting at root to avoid browser history side effects
  const memoryHistory = createMemoryHistory({
    initialEntries: ["/"],
  });

  // Create router with isolated history for test isolation
  const router = createRouter({
    routeTree: rootRoute,
    history: memoryHistory,
  });

  return router;
};

/**
 * Storybook decorator that wraps stories in TanStack Router context.
 * Enables testing components that depend on routing without side effects.
 */
const withRouter: Decorator = (Story) => {
  const router = createStoryRouter(Story);
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
