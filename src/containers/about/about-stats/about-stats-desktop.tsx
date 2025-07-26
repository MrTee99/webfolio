import { data } from '@/constants/data';
import React from 'react';
import AboutStatsCard from './about-stats-card';

const AboutStatsDesktop: React.FC = () => (
  <div className="flex flex-row gap-6">
    {data.about.stats.map((stats, index) => (
      <AboutStatsCard key={index} data={stats} />
    ))}
  </div>
);

export default AboutStatsDesktop;
