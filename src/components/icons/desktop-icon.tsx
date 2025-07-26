import type { IconProps } from '@/types/global';
import React from 'react';

const DesktopIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size * 0.88} className={className} viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_273_184)">
      <path d="M24.75 0H2.25C1.00781 0 0 1.00781 0 2.25V17.25C0 18.4922 1.00781 19.5 2.25 19.5H11.25L10.5 21.75H7.125C6.50156 21.75 6 22.2516 6 22.875C6 23.4984 6.50156 24 7.125 24H19.875C20.4984 24 21 23.4984 21 22.875C21 22.2516 20.4984 21.75 19.875 21.75H16.5L15.75 19.5H24.75C25.9922 19.5 27 18.4922 27 17.25V2.25C27 1.00781 25.9922 0 24.75 0ZM24 16.5H3V3H24V16.5Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_273_184">
        <rect width="27" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DesktopIcon;
