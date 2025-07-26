import { Button } from '@/components/ui/button';
import { data } from '@/constants/data';
import { Link } from '@tanstack/react-router';
import React from 'react';

const AboutHero: React.FC = () => (
  <div className="flex min-h-dvh w-full flex-col px-4 md:justify-center md:px-16">
    <div className="flex w-full flex-col-reverse items-center justify-center gap-6 max-md:mt-32 md:flex-row md:gap-8">
      <div className="flex flex-1 flex-col gap-6 md:gap-8">
        <h1 className="text-center text-4xl font-bold md:text-left md:text-6xl">{data.about.title}</h1>
        <p className="text-muted-foreground text-center text-base font-medium md:text-left md:text-xl">{data.about.myJourney}</p>
        <div className="flex flex-row items-center gap-2 max-md:mx-auto">
          <Button asChild>
            <Link to="/contact">Hire Me</Link>
          </Button>
          {data.about.social.map((social) => (
            <Button key={social.title} asChild size="icon">
              <a href={social.link} target="_blank">
                <social.icon />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <div className="bg-card relative size-[17rem] overflow-hidden rounded-md border md:size-[25rem]">
          <img src={data.about.profilePic.src} alt={data.about.profilePic.alt} className="h-full w-full object-cover object-top" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutHero;
