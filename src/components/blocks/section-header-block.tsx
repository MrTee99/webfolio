import React from 'react';

interface IProps {
  title: string;
  subtitle: string;
  description?: string;
}

const SectionHeaderBlock: React.FC<IProps> = ({ title, subtitle, description }) => (
  <div className="flex flex-col items-center justify-center gap-1">
    <h5 className="text-muted-foreground text-center text-[10px] font-semibold tracking-[0.15rem] uppercase md:text-xs">{subtitle}</h5>
    <h3 className="text-center text-3xl font-bold md:text-4xl">{title}</h3>
    {description === undefined ? null : <p className="text-foreground/70 mt-1 text-center text-sm font-medium md:text-base">{description}</p>}
  </div>
);

export default SectionHeaderBlock;
