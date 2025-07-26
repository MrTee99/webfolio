import { useResponsive } from '@/hooks/use-responsive';
import React, { lazy, Suspense } from 'react';

const BlogDetailsSuggestedProjectsDesktop = lazy(() => import('./blog-details-suggested-blogs-desktop'));
const BlogDetailsSuggestedProjectsMobile = lazy(() => import('./blog-details-suggested-blogs-mobile'));

interface IProps {
  blogs: number[];
}

const BlogDetailsSuggestedBlogs: React.FC<IProps> = ({ blogs }) => {
  const isUnderMedium = useResponsive('under', 'md');
  const Component = isUnderMedium ? BlogDetailsSuggestedProjectsMobile : BlogDetailsSuggestedProjectsDesktop;

  return (
    <div className="m-4 flex flex-col items-center gap-6 md:mt-10 md:mb-0">
      <Suspense fallback={<div>Loading...</div>}>
        <Component blogs={blogs} />
      </Suspense>
    </div>
  );
};

export default BlogDetailsSuggestedBlogs;
