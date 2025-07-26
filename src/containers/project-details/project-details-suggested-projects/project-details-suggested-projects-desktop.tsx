import type { Project } from '@/constants/projects';
import ProjectCard from '@/containers/projects/project-card';
import React from 'react';

interface IProps {
  projects: Project[];
}

const ProjectDetailsSuggestedProjectsDesktop: React.FC<IProps> = ({ projects }) => (
  <div className="flex flex-row items-center justify-center gap-6 py-8 max-md:hidden">
    {projects.map((project) => (
      <span key={project.slug} className="md:last:hidden lg:last:inline">
        <ProjectCard data={project} />
      </span>
    ))}
  </div>
);

export default ProjectDetailsSuggestedProjectsDesktop;
