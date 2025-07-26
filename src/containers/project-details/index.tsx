import CtaBlock from '@/components/blocks/cta-block';
import { data } from '@/constants/data';
import { projects } from '@/constants/projects';
import { useParams } from '@tanstack/react-router';
import React from 'react';
import ProjectDetailsInfo from './project-details-info';
import ProjectDetailsSuggestedProjects from './project-details-suggested-projects';

const ProjectDetailsIndex: React.FC = () => {
  const params = useParams({ from: '/projects/$slug' });
  const project = data.projects.all.find((item) => item.slug === params.slug);

  if (project === undefined) return <p>Project Not Found!</p>;
  return (
    <div>
      <div className="mx-auto max-w-[63rem]">
        <ProjectDetailsInfo project={project} />
        <ProjectDetailsSuggestedProjects projects={project.recommendedProjects.map((key) => projects[key])} />
      </div>
      <CtaBlock {...data.projects.cta} />
    </div>
  );
};

export default ProjectDetailsIndex;
