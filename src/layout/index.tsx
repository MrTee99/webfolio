import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/context/theme/theme-provider';
import '@/styles/index.css';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import React from 'react';
import Footer from './footer';
import Header from './header';

const LayoutIndex: React.FC = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <main className="flex w-full flex-1 items-center justify-center">
          <div className="max-w-section px-section w-full">
            <Outlet />
          </div>
        </main>
        <Footer />
        <Toaster />
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  );
};

export default LayoutIndex;
