import { data } from '@/constants/data';
import ServiceCard from '@/containers/services/service-card';
import { cn } from '@/lib/utils';
import React from 'react';

const HomeServicesDesktop: React.FC = () => (
  <div className={cn('flex flex-row gap-6')}>
    {data.services.services.map((service, index) => (
      <ServiceCard key={index} data={service} />
    ))}
  </div>
);

export default HomeServicesDesktop;
