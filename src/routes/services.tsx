import ServicesIndex from "@/containers/services";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: ServicesIndex,
});
