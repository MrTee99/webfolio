import { Button } from '@/components/ui/button';
import { data } from '@/constants/data';
import BlogCard from '@/containers/blogs/blog-card';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const BlogsGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<(typeof data.blogs.filters)[number]>('All');

  return (
    <div className="flex flex-col items-center gap-6 md:mt-10">
      <div className="flex flex-row items-center justify-center gap-2 max-md:hidden">
        {data.blogs.filters.map((filter, index) => (
          <Button key={filter} variant={selectedFilter === filter ? 'default' : 'card'} onClick={() => setSelectedFilter(filter)} className={cn('cursor-pointer rounded font-medium', index === 0 && 'rounded-l-4xl rounded-r-md', index === data.blogs.filters.length - 1 && 'rounded-l-md rounded-r-4xl')}>
            {filter}
          </Button>
        ))}
      </div>
      <div className="grid max-w-max grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
        {data.blogs.all.map((blog) => (
          <BlogCard key={blog.toString()} data={{ slug: 'sample-blog', publishDate: 'Mar 28, 2025', readTime: 5, title: 'Blog 01', tags: ['Tag 01', 'Tag 02', 'Tag 03', 'Tag 04', 'Tag 05'], summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nemo soluta laborum rerum eum ullam delectus Dolorum laborum fugiat inventore tempore sint est adipisci aperiam autem id. Deserunt similique doloremque doloribus' }} />
        ))}
      </div>
    </div>
  );
};

export default BlogsGrid;
