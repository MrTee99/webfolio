import { cn } from '@/lib/utils';
import React from 'react';

interface IProps {
  title: string;
  className?: string;
  size?: 'sm' | 'lg';
}

const Chip: React.FC<IProps> = ({ title, className, size }) => <div className={cn('bg-card dark:bg-muted-foreground/20 rounded-full px-1.5 py-[3px] text-[10px] font-medium whitespace-nowrap md:px-2.5 md:text-xs', size === 'lg' && 'px-3 text-xs md:text-sm', className)}>{title}</div>;
export default Chip;
