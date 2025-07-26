import { type CarouselApi, Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';
import { data } from '@/constants/data';
import ServiceCard from '@/containers/services/service-card';
import { cn } from '@/lib/utils';
import React from 'react';

const HomeServicesMobile: React.FC = () => {
  const [carousel, setCarousel] = React.useState<CarouselApi>();

  return (
    <div className={cn('mx-auto flex w-max max-w-full flex-col gap-6 py-8')}>
      <Carousel setApi={setCarousel} className="w-full max-w-[24rem]" opts={{ loop: true }}>
        <CarouselContent>
          {data.services.services.map((service, index) => (
            <CarouselItem key={index}>
              <ServiceCard data={service} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselDots data={data.services.services} carousel={carousel} />
    </div>
  );
};

export default HomeServicesMobile;
