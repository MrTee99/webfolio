import { Button } from '@/components/ui/button';
import Chip from '@/components/ui/chip';
import type { Project } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { useCanGoBack, useNavigate, useRouter } from '@tanstack/react-router';
import { ArrowDownIcon } from 'lucide-react';
import React from 'react';

interface IProps {
  project: Project;
}

const ProjectDetailsInfo: React.FC<IProps> = ({ project }) => {
  const router = useRouter();
  const navigate = useNavigate();
  const canGoBack = useCanGoBack();

  const handleGoBack = () => (canGoBack ? router.history.back() : navigate({ to: '/projects' }));

  return (
    <div className="mx-auto mt-20 flex w-full flex-col gap-3">
      <Button variant="ghost" size="sm" className="text-muted-foreground max-w-max cursor-pointer px-2 font-medium" onClick={handleGoBack}>
        <ArrowDownIcon className="rotate-90" />
        <span>Go Back</span>
      </Button>
      <div className="flex flex-col gap-4 md:gap-6">
        <h1 className="text-5xl font-bold md:text-6xl">{project.title}</h1>
        <p className="text-muted-foreground text-xl font-medium md:text-2xl">{project.subtitle}</p>
        <div className="flex flex-row flex-wrap items-center gap-2">
          {project.tags.map((tag, index) => (
            <Chip key={index} title={tag} size="lg" />
          ))}
        </div>
        <div className="bg-card relative aspect-video w-full overflow-hidden rounded-lg border">
          <img src={project.coverImage} alt={project.title} className="h-full w-full object-cover object-top" />
        </div>
        <div className="flex flex-col items-start gap-6 md:flex-row">
          <div className="flex w-full flex-1 flex-col gap-4">
            {[{ title: 'Overview', text: project.overview }, ...project.details].map((detail, detailIndex) => (
              <div key={detailIndex} className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">{detail.title}</h3>
                {detail.text === undefined ? null : <p className="text-muted-foreground text-base font-medium">{detail.text}</p>}
                {detail.ol === undefined ? null : (
                  <ol className="mt-2.5 space-y-2.5">
                    {detail.ol.map((detailOrderedList, detailOrderedListIndex) => (
                      <li key={detailOrderedListIndex}>
                        <h3 className="text-base font-semibold">
                          {detailOrderedListIndex + 1}. {detailOrderedList.title}
                        </h3>
                        {detailOrderedList.text === undefined ? null : <p className="text-muted-foreground text-base font-medium">{detailOrderedList.text}</p>}
                        {detailOrderedList.ul === undefined ? null : (
                          <ul>
                            {detailOrderedList.ul.map((detailNestedUnorderedList, detailNestedUnorderedListIndex) => (
                              <li key={detailNestedUnorderedListIndex} className="flex flex-row gap-2 pl-2.5">
                                <span className="text-foreground text-base font-medium">•</span>
                                <span className="text-muted-foreground text-base font-medium">{detailNestedUnorderedList}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
          <div className="dark:bg-card sticky top-20 flex w-full flex-col gap-2 rounded-md border-[1.5px] px-3 py-2 md:max-w-[18rem]">
            <h5 className="text-lg font-semibold">Project Details</h5>
            <div className="mt-1 mb-2 flex flex-col gap-2">
              {project.info.map((info, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">{info[0]}</span>
                  <span className="text-sm font-medium">{info[1]}</span>
                </div>
              ))}
            </div>
            {project.links === undefined || Object.keys(project.links).length === 0 ? null : (
              <div className="flex flex-row items-center gap-1">
                {(Object.keys(project.links) as Array<keyof typeof project.links>).map((type, index) => (
                  <Button key={index} asChild size="sm" className={cn('flex-1 rounded-sm px-2 font-semibold', Object.keys(project.links || {}).length === 0 ? 'rounded-3xl' : 'first:rounded-l-3xl last:rounded-r-3xl')}>
                    <a href={project.links?.[type] || '#'} target="_blank">
                      {type === 'live' ? 'View Live' : type === 'ios' ? 'App Store' : type === 'android' ? 'Play Store' : 'Source Code'}
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsInfo;
