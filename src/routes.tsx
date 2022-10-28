import React from 'react';
import { useRoutes } from 'react-router-dom';

import { LaunchingPage } from 'views/Launching';
import { HomePage } from 'views/Home';
import { AboutPage } from 'views/About';
import { DashboardPage } from 'views/Dashboard';

export const Router = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <LaunchingPage />,
    },
    {
      path: '/home',
      element: <HomePage />,
    },
    {
      path: '/dashboard',
      element: <DashboardPage />,
    },
  ]);

  return element;
};
