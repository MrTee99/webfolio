import { type CarouselApi, Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';
import { data } from '@/constants/data';
import ProjectCard from '@/containers/projects/project-card';
import { cn } from '@/lib/utils';
import React from 'react';

const HomeProjectsMobile: React.FC = () => {
  const [carousel, setCarousel] = React.useState<CarouselApi>();

  return (
    <div className={cn('mx-auto flex w-max max-w-full flex-col gap-6 py-8')}>
      <Carousel setApi={setCarousel} className="w-full max-w-[20rem]" opts={{ loop: true }}>
        <CarouselContent>
          {data.projects.featured.map((project, index) => (
            <CarouselItem key={index}>
              <ProjectCard data={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselDots data={data.projects.featured} carousel={carousel} />
    </div>
  );
};

export default HomeProjectsMobile;
