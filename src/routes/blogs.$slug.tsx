import BlogDetailsIndex from "@/containers/blog-details";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogDetailsIndex,
});
