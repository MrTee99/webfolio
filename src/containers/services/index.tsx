import CtaBlock from '@/components/blocks/cta-block';
import { data } from '@/constants/data';
import React from 'react';
import ServicesHero from './services-hero';
import ServicesWorkflow from './services-workflow';

const ServicesIndex: React.FC = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesWorkflow />
      <CtaBlock {...data.services.cta} />
    </div>
  );
};

export default ServicesIndex;
