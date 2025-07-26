import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { useScroll } from '@/hooks/use-scroll';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { Link, useLocation } from '@tanstack/react-router';
import { Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';

const Header: React.FC = () => {
  const location = useLocation();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { hasScrolled } = useScroll({ scrollThreshold: 100 });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => {
      const targetState = !prev;
      document.body.style.overflow = targetState ? 'hidden' : 'auto';
      return targetState;
    });
  };

  useEffect(() => {
    if (isMenuOpen) handleToggleMenu();
  }, [location.pathname]);

  return (
    <>
      <HeaderMobile isMenuOpen={isMenuOpen} />
      <header className={cn('h-header bg-background/60 fixed top-0 z-10 flex w-full items-start justify-center backdrop-blur-md transition-all duration-300', hasScrolled && !isMenuOpen ? 'border-b' : 'border-0')}>
        <div className="w-section px-section">
          <div className="h-header flex flex-row justify-between">
            <div className="flex flex-1 items-center justify-start">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <HeaderDesktop />
            <div className="flex flex-1 items-center justify-end gap-2">
              <Button asChild size="sm" variant="card" className={cn('font-medium transition-all duration-400', isMenuOpen && 'bg-foreground text-background')}>
                <Link to="/contact">
                  <span>Let&apos;s Talk</span>
                </Link>
              </Button>
              <Button type="button" size="icon-sm" variant="card" className={cn('cursor-pointer transition-all duration-400', isMenuOpen && 'bg-foreground text-background')} onClick={() => setTheme((resolvedTheme || theme) === 'light' ? 'dark' : 'light')}>
                {resolvedTheme === 'light' ? <Moon /> : <Sun />}
              </Button>

              <Button type="button" size="icon-sm" variant="card" className={cn('group cursor-pointer transition-all duration-400 md:hidden', isMenuOpen && 'bg-foreground text-background')} onClick={handleToggleMenu}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
