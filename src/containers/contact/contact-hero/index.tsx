import { data } from '@/constants/data';
import React from 'react';

const ContactHero: React.FC = () => (
  <div className="mt-32 flex w-full flex-col items-center justify-center gap-4 md:mt-44">
    <h1 className="text-center text-5xl font-bold md:text-6xl">{data.contact.title}</h1>
    <p className="text-muted-foreground space-x-1.5 text-center text-xl font-medium md:text-2xl">
      {data.contact.subtitle.map((subtitle, index) => (
        <React.Fragment key={index}>
          {index > 0 ? <br className="max-md:hidden" /> : null}
          <span>{subtitle}</span>
        </React.Fragment>
      ))}
    </p>
    <div className="mx-auto grid grid-cols-1 gap-4 max-md:mt-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {data.contact.details.map((item, index) => (
        <a href={item.link} target="_blank" key={index} className="bg-card col-span-1 flex max-w-[24rem] cursor-pointer flex-row items-start gap-3 rounded-md p-2.5 pr-6 md:max-w-[18rem] md:last:col-span-2 md:last:max-w-full md:last:py-3 lg:last:col-span-1 lg:last:max-w-[18rem] lg:last:p-2.5">
          <div className="bg-background dark:bg-muted-foreground/20 flex aspect-square w-10 flex-shrink-0 items-center justify-center rounded-md">
            <item.icon />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="text-muted-foreground mt-0.5 text-xs font-medium">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default ContactHero;
