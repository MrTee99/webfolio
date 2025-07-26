import { type CarouselApi, Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';
import { data } from '@/constants/data';
import React from 'react';
import ServicesWorkflowCard from './services-workflow-card';

const ServicesWorkflowMobile: React.FC = () => {
  const [carousel, setCarousel] = React.useState<CarouselApi>();

  return (
    <div className="mx-auto flex w-max max-w-full flex-col gap-6 py-8">
      <Carousel setApi={setCarousel} className="w-full max-w-[24rem]" opts={{ loop: true }}>
        <CarouselContent containerClassName="items-stretch pt-4">
          {data.workflow.map((service, index) => (
            <CarouselItem key={index}>
              <ServicesWorkflowCard data={service} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselDots data={data.workflow} carousel={carousel} />
    </div>
  );
};

export default ServicesWorkflowMobile;
