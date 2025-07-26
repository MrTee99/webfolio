import ContactIndex from "@/containers/contact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactIndex,
});
