import { data } from '@/constants/data';
import React from 'react';
import ServicesWorkflowCard from './services-workflow-card';

const ServicesWorkflowDesktop: React.FC = () => (
  <div className="mt-10 grid max-w-max grid-cols-2 gap-6 lg:grid-cols-3">
    {data.workflow.map((service, index) => (
      <ServicesWorkflowCard key={index} data={service} />
    ))}
  </div>
);

export default ServicesWorkflowDesktop;
