import HomeIndex from "@/containers/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeIndex,
});
