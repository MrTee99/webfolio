import { useResponsive } from '@/hooks/use-responsive';
import React, { lazy, Suspense } from 'react';

const AboutStatsDesktop = lazy(() => import('./about-stats-desktop'));
const AboutStatsMobile = lazy(() => import('./about-stats-mobile'));

const AboutStats: React.FC = () => {
  const isUnderLarge = useResponsive('under', 'lg');
  const Component = isUnderLarge ? AboutStatsMobile : AboutStatsDesktop;

  return (
    <div className="mb-6 flex flex-row items-center justify-center md:mb-16 md:gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default AboutStats;
