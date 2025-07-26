import SectionHeaderBlock from '@/components/blocks/section-header-block';
import { data } from '@/constants/data';
import React from 'react';

const HomeAbout: React.FC = () => (
  <div className="my-10 flex flex-col items-center justify-center gap-6 md:my-16 md:gap-10">
    <SectionHeaderBlock subtitle="About Me" title="Who am I?" />
    <p className="text-foreground/70 mt-1 max-w-[40rem] text-center text-sm font-medium md:text-base">{data.about.description}</p>
    <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {data.about.highlights.map((item, index) => (
        <div key={index} className="bg-card col-span-1 flex max-w-[24rem] flex-row items-start gap-3 rounded-md p-2.5 pr-6 md:max-w-[18rem] md:last:col-span-2 md:last:max-w-full md:last:py-3 lg:last:col-span-1 lg:last:max-w-[18rem] lg:last:p-2.5">
          <div className="bg-background dark:bg-muted-foreground/20 flex aspect-square w-10 flex-shrink-0 items-center justify-center rounded-md">
            <item.icon />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="text-muted-foreground text-xs font-medium">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomeAbout;
