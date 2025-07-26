import type { IconProps } from '@/types/global';
import React from 'react';

const RocketOutlineIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.12501 15.1249C2.75001 16.2799 2.29167 19.7082 2.29167 19.7082C2.29167 19.7082 5.72001 19.2499 6.87501 17.8749C7.52584 17.1049 7.51667 15.9224 6.79251 15.2074C6.4362 14.8673 5.96686 14.6708 5.47455 14.6556C4.98223 14.6404 4.50164 14.8075 4.12501 15.1249ZM11 13.7499L8.25001 10.9999C8.7378 9.73438 9.35203 8.52129 10.0833 7.37907C11.1514 5.67131 12.6387 4.2652 14.4036 3.29449C16.1685 2.32377 18.1524 1.82074 20.1667 1.83323C20.1667 4.32657 19.4517 8.70823 14.6667 11.9166C13.5087 12.6485 12.2803 13.2626 11 13.7499Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.25001 11H3.66667C3.66667 11 4.17084 8.22248 5.50001 7.33331C6.98501 6.34331 10.0833 7.33331 10.0833 7.33331M11 13.75V18.3333C11 18.3333 13.7775 17.8291 14.6667 16.5C15.6567 15.015 14.6667 11.9166 14.6667 11.9166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default RocketOutlineIcon;
