import type { Project } from '@/constants/projects';
import { useResponsive } from '@/hooks/use-responsive';
import React, { lazy, Suspense } from 'react';

const ProjectDetailsSuggestedProjectsDesktop = lazy(() => import('./project-details-suggested-projects-desktop'));
const ProjectDetailsSuggestedProjectsMobile = lazy(() => import('./project-details-suggested-projects-mobile'));

interface IProps {
  projects: Project[];
}

const ProjectDetailsSuggestedProjects: React.FC<IProps> = ({ projects }) => {
  const isUnderMedium = useResponsive('under', 'md');
  const Component = isUnderMedium ? ProjectDetailsSuggestedProjectsMobile : ProjectDetailsSuggestedProjectsDesktop;

  return (
    <div className="m-4 flex flex-col items-center gap-6 md:mt-10 md:mb-0">
      <Suspense fallback={<div>Loading...</div>}>
        <Component projects={projects} />
      </Suspense>
    </div>
  );
};

export default ProjectDetailsSuggestedProjects;
