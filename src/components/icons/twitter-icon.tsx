import type { IconProps } from '@/types/global';
import React from 'react';

const TwitterIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_299_593)">
      <mask id="mask0_299_593" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <path d="M0 0H16V16H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_299_593)">
        <path d="M12.6 0.749756H15.0537L9.69372 6.89147L16 15.2503H11.0629L7.19314 10.1818L2.77029 15.2503H0.314286L6.04686 8.6789L0 0.750899H5.06286L8.55543 5.3829L12.6 0.749756ZM11.7371 13.7783H13.0971L4.32 2.14518H2.86171L11.7371 13.7783Z" fill="currentColor" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_299_593">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default TwitterIcon;
