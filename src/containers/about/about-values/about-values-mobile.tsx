import { type CarouselApi, Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';
import { data } from '@/constants/data';
import React from 'react';
import AboutValueCard from './about-value-card';

const AboutValuesMobile: React.FC = () => {
  const [carousel, setCarousel] = React.useState<CarouselApi>();

  return (
    <div className="mx-auto flex w-max max-w-full flex-col gap-6 py-8">
      <Carousel setApi={setCarousel} className="w-full max-w-[24rem]" opts={{ loop: true }}>
        <CarouselContent>
          {data.about.values.map((value, index) => (
            <CarouselItem key={index}>
              <AboutValueCard data={value} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselDots data={data.about.values} carousel={carousel} />
    </div>
  );
};

export default AboutValuesMobile;
