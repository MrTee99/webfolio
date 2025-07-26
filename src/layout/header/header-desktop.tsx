import { Button } from '@/components/ui/button';
import { NAVIGATION } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import React from 'react';

const HeaderDesktop: React.FC = () => {
  return (
    <nav className="flex flex-1 flex-shrink-0 items-center justify-center gap-2 max-md:hidden">
      {NAVIGATION.map((item) => (
        <Button asChild key={item.link} variant="link" className="group relative px-3 !no-underline">
          <Link to={item.link}>
            <span>{item.label}</span>
            <div className={cn('bg-foreground absolute bottom-0.5 left-1/2 h-0 w-0 -translate-x-1/2 rounded-full transition-all group-hover:h-1 group-hover:w-1 group-[&.active]:h-[3px] group-[&.active]:w-4')} />
          </Link>
        </Button>
      ))}
    </nav>
  );
};

export default HeaderDesktop;
