import { data } from '@/constants/data';
import ProjectCard from '@/containers/projects/project-card';
import { cn } from '@/lib/utils';
import React from 'react';

const HomeProjectsDesktop: React.FC = () => (
  <div className={cn('flex flex-row items-center justify-center gap-6 py-8')}>
    {data.projects.featured.map((project) => (
      <ProjectCard key={project.slug} data={project} />
    ))}
  </div>
);

export default HomeProjectsDesktop;
