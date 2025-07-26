import { data } from '@/constants/data';
import React from 'react';
import AboutValueCard from './about-value-card';

const AboutValuesDesktop: React.FC = () => (
  <div className="flex flex-row gap-6">
    {data.about.values.map((value, index) => (
      <AboutValueCard key={index} data={value} />
    ))}
  </div>
);

export default AboutValuesDesktop;
