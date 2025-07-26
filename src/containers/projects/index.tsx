import CtaBlock from '@/components/blocks/cta-block';
import { data } from '@/constants/data';
import React from 'react';
import ProjectsGrid from './projects-grid';
import ProjectsHero from './projects-hero';

const ProjectsIndex: React.FC = () => {
  return (
    <div>
      <ProjectsHero />
      <ProjectsGrid />
      <CtaBlock {...data.projects.cta} />
    </div>
  );
};

export default ProjectsIndex;
