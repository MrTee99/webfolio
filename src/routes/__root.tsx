import LayoutIndex from "@/layout";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => <LayoutIndex />
});
