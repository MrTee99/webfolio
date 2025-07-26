import { type CarouselApi, Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';
import { data } from '@/constants/data';
import React from 'react';
import AboutStatsCard from './about-stats-card';

const AboutStatsMobile: React.FC = () => {
  const [carousel, setCarousel] = React.useState<CarouselApi>();

  return (
    <div className="mx-auto flex w-max max-w-full flex-col gap-6 py-8">
      <Carousel setApi={setCarousel} className="w-full max-w-[24rem]" opts={{ loop: true }}>
        <CarouselContent>
          {data.about.stats.map((stats, index) => (
            <CarouselItem key={index}>
              <AboutStatsCard data={stats} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselDots data={data.about.stats} carousel={carousel} />
    </div>
  );
};

export default AboutStatsMobile;
