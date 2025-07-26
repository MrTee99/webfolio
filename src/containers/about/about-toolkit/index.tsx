import SectionHeaderBlock from '@/components/blocks/section-header-block';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { data } from '@/constants/data';
import { useTheme } from '@/hooks/use-theme';
import React from 'react';

const AboutToolkit: React.FC = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="my-10 flex flex-col items-center justify-center md:my-16 md:gap-10">
      <SectionHeaderBlock subtitle="Toolkit" title="Skills & Expertise" description="Technologies and tools I use to bring your ideas to life" />
      <div className="flex max-w-[60rem] flex-row flex-wrap items-center justify-center gap-4 max-md:mt-8 md:gap-6">
        {data.about.skills.map((toolkit, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger>
              <div className="bg-card flex size-[4rem] items-center justify-center rounded-md transition-transform hover:scale-95 md:size-[5rem]">
                <img src={!!toolkit.darkIcon && resolvedTheme === 'dark' ? toolkit.darkIcon : toolkit.icon} alt={toolkit.title} width={toolkit.size} height={toolkit.size} className="max-md:scale-75" />
              </div>
            </HoverCardTrigger>
            <HoverCardContent side="top" className="text-foreground/70 w-max px-2 py-1 text-sm font-medium shadow-none">
              {toolkit.title}
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default AboutToolkit;
