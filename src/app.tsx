import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import { routeTree } from './routeTree.gen';

const appRouter = createRouter({ routeTree, scrollRestoration: true });
export type AppRouterType = typeof appRouter;

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  );
};

export default App;
