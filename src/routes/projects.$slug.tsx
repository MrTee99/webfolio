import ProjectDetailsIndex from '@/containers/project-details';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectDetailsIndex,
});
