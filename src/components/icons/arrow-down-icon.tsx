import type { IconProps } from '@/types/global';
import React from 'react';

const ArrowDownIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m6-6l-6 6m-6-6l6 6" />
  </svg>
);

export default ArrowDownIcon;
