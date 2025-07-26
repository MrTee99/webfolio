import type { data } from '@/constants/data';
import React from 'react';

interface IProps {
  data: (typeof data.workflow)[number];
}

const ServicesWorkflowCard: React.FC<IProps> = ({ data }) => (
  <div className="bg-card group relative mx-auto flex w-full max-w-[24rem] flex-col items-center justify-center gap-2 rounded-md p-4 max-md:h-full md:max-w-[20rem]">
    <div className="bg-foreground text-background border-foreground group-hover:bg-background group-hover:text-foreground absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] font-semibold transition-colors">
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity group-hover:opacity-0">{data.id}</span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
        <data.icon size={data.iconSmallSize} />
      </span>
    </div>
    <h3 className="mt-4 text-center text-xl leading-none font-medium">{data.shortTitle}</h3>
    <p className="text-muted-foreground text-center text-sm font-medium">{data.description}</p>
  </div>
);

export default ServicesWorkflowCard;
