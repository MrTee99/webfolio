import RocketFilledIcon from '@/components/icons/rocket-filled-icon';
import { Button } from '@/components/ui/button';
import { data } from '@/constants/data';
import { Link } from '@tanstack/react-router';
import { ArrowDownIcon } from 'lucide-react';
import React from 'react';

const HomeHero: React.FC = () => (
  <div className="flex min-h-dvh w-full flex-col">
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-4">
      {/* <div className="bg-card text-card-foreground mb-2 flex flex-row items-center gap-2 rounded-full px-4 py-[5px] text-xs font-medium">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
        </span>
        <span>Available For Work</span>
      </div> */}
      <h1 className="text-5xl font-bold md:text-6xl">{data.home.title}</h1>
      <p className="text-muted-foreground space-x-1.5 text-center text-xl font-medium md:text-2xl">
        {data.home.subtitle.map((subtitle, index) => (
          <React.Fragment key={index}>
            {index > 0 ? <br className="max-md:hidden" /> : null}
            <span>{subtitle}</span>
          </React.Fragment>
        ))}
      </p>
      <Button asChild className="group mt-2">
        <Link to="/contact">
          <span>Let&apos;s Work Together</span>
          <RocketFilledIcon className="!text-2xl transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Button>
    </div>
    <div className="flex flex-shrink-0 flex-row items-end justify-between pb-4">
      <div className="flex flex-row items-center gap-2 text-sm font-medium">
        <ArrowDownIcon className="mt-0.5 animate-bounce" size={20} />
        <span>Scroll To Explore</span>
      </div>
      <div className="flex flex-row items-center gap-2 text-sm font-medium">
        <span>Featured Projects</span>
      </div>
    </div>
  </div>
);

export default HomeHero;
