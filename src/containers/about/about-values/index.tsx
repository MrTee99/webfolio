import SectionHeaderBlock from '@/components/blocks/section-header-block';
import { useResponsive } from '@/hooks/use-responsive';
import React, { lazy, Suspense } from 'react';

const AboutValuesDesktop = lazy(() => import('./about-values-desktop'));
const AboutValuesMobile = lazy(() => import('./about-values-mobile'));

const AboutValues: React.FC = () => {
  const isUnderLarge = useResponsive('under', 'lg');
  const Component = isUnderLarge ? AboutValuesMobile : AboutValuesDesktop;

  return (
    <div className="my-10 flex flex-col items-center justify-center md:my-16 md:gap-10">
      <SectionHeaderBlock subtitle="Values" title="What Drives My Work" description="The principles that guide my work and client relationships" />
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default AboutValues;
