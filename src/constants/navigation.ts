import type { AppRouterType } from '@/app';

export const NAVIGATION: { label: string; link: keyof AppRouterType['routesByPath'] }[] = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Projects', link: '/projects' },
  { label: 'Services', link: '/services' },
  // { label: 'Blogs', link: '/blogs' },
];
