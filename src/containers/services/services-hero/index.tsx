import { data } from '@/constants/data';
import { useResponsive } from '@/hooks/use-responsive';
import React, { lazy, Suspense } from 'react';

const HomeServicesDesktop = lazy(() => import('@/containers/home/home-services/home-services-desktop'));
const HomeServicesMobile = lazy(() => import('@/containers/home/home-services/home-services-mobile'));

const ServicesHero: React.FC = () => {
  const isUnderLarge = useResponsive('under', 'lg');
  const Component = isUnderLarge ? HomeServicesMobile : HomeServicesDesktop;

  return (
    <div className="mt-44 flex w-full flex-col items-center gap-2 md:gap-14">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-center text-5xl font-bold md:text-6xl">{data.services.title}</h1>
        <p className="text-muted-foreground space-x-1.5 text-center text-xl font-medium md:text-2xl">
          {data.services.subtitle.map((subtitle, index) => (
            <React.Fragment key={index}>
              {index > 0 ? <br className="max-md:hidden" /> : null}
              <span>{subtitle}</span>
            </React.Fragment>
          ))}
        </p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default ServicesHero;
