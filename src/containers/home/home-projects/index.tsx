import { Button } from '@/components/ui/button';
import { useResponsive } from '@/hooks/use-responsive';
import { Link } from '@tanstack/react-router';
import React, { lazy, Suspense } from 'react';

const HomeProjectsDesktop = lazy(() => import('./home-projects-desktop'));
const HomeProjectsMobile = lazy(() => import('./home-projects-mobile'));

const HomeProjects: React.FC = () => {
  const isUnderLarge = useResponsive('under', 'lg');
  const Component = isUnderLarge ? HomeProjectsMobile : HomeProjectsDesktop;

  return (
    <div className="my-8 flex flex-col items-center justify-center gap-4 md:my-12">
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-md font-medium md:text-lg">Continue Exploring My Work</h3>
        <Button asChild>
          <Link to="/projects">All Projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomeProjects;
