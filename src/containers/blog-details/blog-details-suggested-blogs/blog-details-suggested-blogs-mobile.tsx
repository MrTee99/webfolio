import { type CarouselApi, Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';
import BlogCard from '@/containers/blogs/blog-card';
import React from 'react';

interface IProps {
  blogs: number[];
}

const BlogDetailsSuggestedBlogsMobile: React.FC<IProps> = ({ blogs }) => {
  const [carousel, setCarousel] = React.useState<CarouselApi>();

  return (
    <div className="mx-auto flex w-max max-w-full flex-col gap-6 py-8 md:hidden">
      <Carousel setApi={setCarousel} className="w-full max-w-[20rem]" opts={{ loop: true }}>
        <CarouselContent>
          {blogs.map((_blog, index) => (
            <CarouselItem key={index}>
              <BlogCard data={{ slug: 'sample-blog', publishDate: 'Mar 28, 2025', readTime: 5, title: 'Blog 01', tags: ['Tag 01', 'Tag 02', 'Tag 03', 'Tag 04', 'Tag 05'], summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nemo soluta laborum rerum eum ullam delectus Dolorum laborum fugiat inventore tempore sint est adipisci aperiam autem id. Deserunt similique doloremque doloribus' }} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselDots data={blogs} carousel={carousel} />
    </div>
  );
};

export default BlogDetailsSuggestedBlogsMobile;
