import type { data } from '@/constants/data';
import React from 'react';

interface IProps {
  data: (typeof data.about.highlights)[number];
}

const AboutValueCard: React.FC<IProps> = ({ data }) => (
  <div className="bg-card mx-auto flex max-w-[20rem] flex-col items-start gap-4 rounded-md p-4 md:max-w-[16rem]">
    <div className="bg-background dark:bg-muted-foreground/20 flex aspect-square w-12 flex-shrink-0 items-center justify-center rounded-md">
      <data.icon />
    </div>
    <div className="flex flex-col gap-0.5">
      <h3 className="text-xl leading-none font-medium">{data.title}</h3>
    </div>
    <p className="text-muted-foreground text-sm font-medium">{data.description}</p>
  </div>
);

export default AboutValueCard;
