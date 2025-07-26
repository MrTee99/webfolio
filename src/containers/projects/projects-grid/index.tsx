import { Button } from '@/components/ui/button';
import { data } from '@/constants/data';
import ProjectCard from '@/containers/projects/project-card';
import { useResponsive } from '@/hooks/use-responsive';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const ProjectsGrid: React.FC = () => {
  const isUnderMedium = useResponsive('under', 'md');
  const [selectedFilter, setSelectedFilter] = useState<(typeof data.projects.filters)[number]>('All Projects');

  return (
    <div className="flex flex-col items-center gap-6 md:mt-10">
      <div className="flex flex-row items-center justify-center gap-2 max-md:hidden">
        {data.projects.filters.map((filter, index) => (
          <Button key={filter} variant={selectedFilter === filter ? 'default' : 'card'} onClick={() => setSelectedFilter(filter)} className={cn('cursor-pointer rounded font-medium', index === 0 && 'rounded-l-4xl rounded-r-md', index === data.projects.filters.length - 1 && 'rounded-l-md rounded-r-4xl')}>
            {filter}
          </Button>
        ))}
      </div>
      <div className="grid max-w-max grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.all
          .filter((project) => (isUnderMedium ? true : project.filter.includes(selectedFilter)))
          .map((project) => (
            <ProjectCard key={project.slug} data={project} />
          ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
