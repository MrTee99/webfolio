import type { data } from '@/constants/data';
import React from 'react';

interface IProps {
  data: (typeof data.about.stats)[number];
}

const StatsCard: React.FC<IProps> = ({ data }) => (
  <div className="bg-card mx-auto flex h-[11rem] w-[20rem] flex-col items-center justify-center gap-5 rounded-md md:max-w-[15rem]">
    <h3 className="text-center text-4xl font-bold">{data.count}</h3>
    <h3 className="text-center text-xl leading-none font-medium">
      <span>{data.title[0]}</span>
      <span className="text-muted-foreground mt-1.5 block">{data.title[1]}</span>
    </h3>
  </div>
);

export default StatsCard;
