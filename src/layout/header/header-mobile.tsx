import { NAVIGATION } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import React from 'react';

interface IProps {
  isMenuOpen: boolean;
}

const HeaderMobile: React.FC<IProps> = ({ isMenuOpen }) => {
  return (
    <div className={cn('bg-background/90 fixed z-10 flex h-dvh w-full flex-col items-center justify-center gap-10 backdrop-blur-md transition-all duration-400', isMenuOpen ? 'pointer-events-auto bottom-0' : 'pointer-events-none bottom-[100dvh]')}>
      <nav className={cn('flex w-full flex-1 flex-col items-center justify-center gap-9')}>
        {NAVIGATION.map((item) => (
          <Link key={item.link} to={item.link} className={cn('group hover:text-foreground [&.active]:text-foreground text-muted-foreground/80 relative w-[20rem] max-w-[90%] text-center text-3xl font-medium transition-colors')}>
            <span>{item.label}</span>
            <div className={cn('bg-foreground absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 rounded-full transition-all group-hover:h-[3px] group-hover:w-2 group-[&.active]:h-[3px] group-[&.active]:w-5')} />
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HeaderMobile;
