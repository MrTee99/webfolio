import AboutIndex from "@/containers/about";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutIndex,
});
