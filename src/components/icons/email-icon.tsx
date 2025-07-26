import type { IconProps } from '@/types/global';
import React from 'react';

const EmailIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.1663 8.49999C31.1663 6.94166 29.8913 5.66666 28.333 5.66666H5.66634C4.10801 5.66666 2.83301 6.94166 2.83301 8.49999V25.5C2.83301 27.0583 4.10801 28.3333 5.66634 28.3333H28.333C29.8913 28.3333 31.1663 27.0583 31.1663 25.5V8.49999ZM28.333 8.49999L16.9997 15.5833L5.66634 8.49999H28.333ZM28.333 25.5H5.66634V11.3333L16.9997 18.4167L28.333 11.3333V25.5Z" fill="currentColor" />
  </svg>
);

export default EmailIcon;
