import ProjectsIndex from "@/containers/projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndex,
});
