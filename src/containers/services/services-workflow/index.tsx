import SectionHeaderBlock from '@/components/blocks/section-header-block';
import { useResponsive } from '@/hooks/use-responsive';
import React, { lazy, Suspense } from 'react';

const ServicesWorkflowDesktop = lazy(() => import('./services-workflow-desktop'));
const ServicesWorkflowMobile = lazy(() => import('./services-workflow-mobile'));

const ServicesWorkflow: React.FC = () => {
  const isUnderMedium = useResponsive('under', 'md');
  const Component = isUnderMedium ? ServicesWorkflowMobile : ServicesWorkflowDesktop;

  return (
    <div className="mt-14 mb-14 flex flex-col items-center justify-center gap-6 md:mt-32 md:mb-28 md:gap-10">
      <SectionHeaderBlock subtitle="Workflow" title="My Working Process" description="A structured approach to bring your project from concept to completion" />
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default ServicesWorkflow;
