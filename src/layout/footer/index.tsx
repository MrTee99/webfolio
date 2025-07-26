import Logo from '@/components/ui/logo';
import { useResponsive } from '@/hooks/use-responsive';
import React from 'react';

const Footer: React.FC = () => {
  const isUnderMedium = useResponsive('under', 'md');

  return (
    <footer className="bg-foreground dark:bg-card/40 flex w-full flex-col items-center gap-2 p-10 py-14 dark:border-t">
      <Logo className="fill-background dark:fill-card-foreground" size={isUnderMedium ? 50 : 60} />
      <h1 className="text-background dark:text-foreground text-xl font-semibold md:text-2xl">Tahir Saeed</h1>
      <p className="text-muted-foreground text-center text-sm font-medium md:text-base">© {new Date().getFullYear()} Crafted with care. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
