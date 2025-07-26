import CtaBlock from '@/components/blocks/cta-block';
import { data } from '@/constants/data';
import React from 'react';
import BlogsGrid from './blogs-grid';
import BlogsHero from './blogs-hero';

const BlogsIndex: React.FC = () => {
  return (
    <div>
      <BlogsHero />
      <BlogsGrid />
      <CtaBlock {...data.blogs.cta} />
    </div>
  );
};

export default BlogsIndex;
