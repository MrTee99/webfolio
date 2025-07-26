import BlogsIndex from "@/containers/blogs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/")({
  component: BlogsIndex,
});
