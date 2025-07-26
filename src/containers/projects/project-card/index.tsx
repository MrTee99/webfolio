import Chip from '@/components/ui/chip';
import type { Project } from '@/constants/projects';
import { Link } from '@tanstack/react-router';
import React from 'react';

interface IProps {
  data: Project;
}

const ProjectCard: React.FC<IProps> = ({ data }) => (
  <div className="dark:bg-card max-w-[20rem] cursor-pointer overflow-hidden rounded-md border transition-shadow hover:shadow-sm">
    <Link to="/projects/$slug" params={{ slug: data.slug }} className="w-full">
      <div className="bg-card dark:bg-background relative h-48 w-full overflow-hidden">
        <img src={data.cardImage} alt={data.title} className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 p-3">
        <div className="flex flex-col">
          <h3 className="text-base font-medium">{data.title}</h3>
          <h5 className="text-muted-foreground text-xs font-medium">{data.platform}</h5>
        </div>
        <p className="text-card-foreground line-clamp-3 text-sm">{data.overview}</p>
        <div className="mt-1 mb-1.5 flex flex-row items-center gap-2">
          {data.tags.slice(0, 2).map((tag, index) => (
            <Chip key={index} title={tag} />
          ))}
          {data.tags.length > 2 ? <Chip title={`+${data.tags.length - 2} more`} /> : null}
        </div>
      </div>
    </Link>
  </div>
);

export default ProjectCard;
