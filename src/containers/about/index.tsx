import CtaBlock from '@/components/blocks/cta-block';
import { data } from '@/constants/data';
import React from 'react';
import AboutHero from './about-hero';
import AboutStats from './about-stats';
import AboutToolkit from './about-toolkit';
import AboutValues from './about-values';

const AboutIndex: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <AboutHero />
      <AboutStats />
      <AboutValues />
      <AboutToolkit />
      <CtaBlock {...data.about.cta} />
    </div>
  );
};

export default AboutIndex;
