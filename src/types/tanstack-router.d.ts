import type { AppRouterType } from '@/app';

declare module '@tanstack/react-router' {
  interface Register {
    router: AppRouterType;
  }
}
