import { data } from '@/constants/data';
import React from 'react';

const ProjectsHero: React.FC = () => (
  <div className="mt-32 flex w-full flex-col gap-4 md:mt-44">
    <h1 className="text-center text-5xl font-bold md:text-6xl">{data.projects.title}</h1>
    <p className="text-muted-foreground space-x-1.5 text-center text-xl font-medium md:text-2xl">
      {data.projects.subtitle.map((subtitle, index) => (
        <React.Fragment key={index}>
          {index > 0 ? <br className="max-md:hidden" /> : null}
          <span>{subtitle}</span>
        </React.Fragment>
      ))}
    </p>
  </div>
);

export default ProjectsHero;
