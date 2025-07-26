import SectionHeaderBlock from '@/components/blocks/section-header-block';
import { useResponsive } from '@/hooks/use-responsive';
import React, { lazy, Suspense } from 'react';

const HomeWorkflowDesktop = lazy(() => import('./home-workflow-desktop'));
const HomeWorkflowMobile = lazy(() => import('./home-workflow-mobile'));

const HomeWorkflow: React.FC = () => {
  const isUnderLarge = useResponsive('under', 'lg');
  const Component = isUnderLarge ? HomeWorkflowMobile : HomeWorkflowDesktop;

  return (
    <div className="my-10 flex flex-col items-center justify-center md:my-16 md:gap-10">
      <SectionHeaderBlock subtitle="Workflow" title="How I do it?" description="The process I follow to deliver successful projects" />
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default HomeWorkflow;
