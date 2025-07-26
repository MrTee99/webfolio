import SectionHeaderBlock from '@/components/blocks/section-header-block';
import { useResponsive } from '@/hooks/use-responsive';
import React, { lazy, Suspense } from 'react';

const HomeServicesDesktop = lazy(() => import('./home-services-desktop'));
const HomeServicesMobile = lazy(() => import('./home-services-mobile'));

const HomeServices: React.FC = () => {
  const isUnderLarge = useResponsive('under', 'lg');
  const Component = isUnderLarge ? HomeServicesMobile : HomeServicesDesktop;

  return (
    <div className="my-10 flex flex-col items-center justify-center md:my-16 md:gap-10">
      <SectionHeaderBlock subtitle="Services" title="What I do?" description="Bringing your digital ideas to life through specialized expertise" />
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default HomeServices;
