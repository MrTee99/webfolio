import CtaBlock from '@/components/blocks/cta-block';
import { data } from '@/constants/data';
import React from 'react';
import HomeAbout from './home-about';
import HomeHero from './home-hero';
import HomeProjects from './home-projects';
import HomeServices from './home-services';
import HomeWorkflow from './home-workflow';

const HomeIndex: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <HomeHero />
      <HomeProjects />
      <HomeAbout />
      <HomeServices />
      <HomeWorkflow />
      <CtaBlock {...data.home.cta} />
    </div>
  );
};

export default HomeIndex;
