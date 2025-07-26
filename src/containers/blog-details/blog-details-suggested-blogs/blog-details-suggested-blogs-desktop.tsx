import BlogCard from '@/containers/blogs/blog-card';
import React from 'react';

interface IProps {
  blogs: number[];
}

const BlogDetailsSuggestedBlogsDesktop: React.FC<IProps> = ({ blogs }) => (
  <div className="flex flex-row items-center justify-center gap-6 py-8 max-md:hidden">
    {blogs.map((blog) => (
      <span key={blog} className="md:last:hidden lg:last:inline">
        <BlogCard data={{ slug: 'sample-blog', publishDate: 'Mar 28, 2025', readTime: 5, title: 'Blog 01', tags: ['Tag 01', 'Tag 02', 'Tag 03', 'Tag 04', 'Tag 05'], summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nemo soluta laborum rerum eum ullam delectus Dolorum laborum fugiat inventore tempore sint est adipisci aperiam autem id. Deserunt similique doloremque doloribus' }} />
      </span>
    ))}
  </div>
);

export default BlogDetailsSuggestedBlogsDesktop;
