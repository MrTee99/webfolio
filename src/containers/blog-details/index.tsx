import CtaBlock from '@/components/blocks/cta-block';
import { data } from '@/constants/data';
import React from 'react';
import BlogDetailsInfo from './blog-details-info';
import BlogDetailsSuggestedBlogs from './blog-details-suggested-blogs';

const BlogDetailsIndex: React.FC = () => {
  return (
    <div>
      <div className="mx-auto max-w-[63rem]">
        <BlogDetailsInfo />
        <BlogDetailsSuggestedBlogs blogs={[1, 2, 3]} />
      </div>
      <CtaBlock {...data.blogs.cta} />
    </div>
  );
};

export default BlogDetailsIndex;
