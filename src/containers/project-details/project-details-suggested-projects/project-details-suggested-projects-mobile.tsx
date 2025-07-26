import { type CarouselApi, Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';
import type { Project } from '@/constants/projects';
import ProjectCard from '@/containers/projects/project-card';
import React from 'react';

interface IProps {
  projects: Project[];
}

const ProjectDetailsSuggestedProjectsMobile: React.FC<IProps> = ({ projects }) => {
  const [carousel, setCarousel] = React.useState<CarouselApi>();

  return (
    <div className="mx-auto flex w-max max-w-full flex-col gap-6 py-8 md:hidden">
      <Carousel setApi={setCarousel} className="w-full max-w-[20rem]" opts={{ loop: true }}>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <ProjectCard data={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselDots data={projects} carousel={carousel} />
    </div>
  );
};

export default ProjectDetailsSuggestedProjectsMobile;
