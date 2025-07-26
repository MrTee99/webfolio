import Chip from '@/components/ui/chip';
import { Link } from '@tanstack/react-router';
import { ClockIcon } from 'lucide-react';
import React from 'react';

interface IProps {
  data: { slug: string; publishDate: string; readTime: number; title: string; summary: string; tags: string[] };
}

const BlogCard: React.FC<IProps> = ({ data }) => (
  <div className="max-w-[20rem] cursor-pointer overflow-hidden rounded-md border transition-shadow hover:shadow-sm">
    <Link to="/blogs/$slug" params={{ slug: data.slug }} className="w-full">
      <div className="bg-card h-48 w-full"></div>
      <div className="flex flex-col gap-1 p-3">
        <div className="mb-0.5 flex flex-row items-center justify-between">
          <p className="text-muted-foreground text-xs">{data.publishDate}</p>
          <p className="text-muted-foreground flex flex-row items-center justify-center gap-1 text-xs">
            <ClockIcon size={14} />
            <span>{data.readTime} min read</span>
          </p>
        </div>
        <h3 className="font-medium">{data.title}</h3>
        <p className="text-muted-foreground line-clamp-3 text-sm">{data.summary}</p>
        <div className="mt-2 mb-1.5 flex flex-row items-center gap-2">
          {data.tags.slice(0, 2).map((tag, index) => (
            <Chip key={index} title={tag} />
          ))}
          {data.tags.length > 2 ? <Chip title={`+${data.tags.length - 2} more`} /> : null}
        </div>
      </div>
    </Link>
  </div>
);

export default BlogCard;
