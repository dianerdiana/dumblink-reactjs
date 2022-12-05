import React from 'react';

// React Bootstrap
import { Navigate, useRoutes } from 'react-router-dom';

import Landing from './views/Landing';
import AppRouter from './views/AppRouter';
import Template from './views/Template';
import Profile from './views/Profile';
import CreateLink from './views/CreateLink';
import MyLinks from './views/MyLinks';

function App() {
  const routes = useRoutes([
    {
      path: '/landing',
      element: <Landing />,
    },
    {
      path: '/',
      element: <Navigate to='/template' />,
    },
    {
      element: <AppRouter />,
      children: [
        {
          path: '/template',
          index: true,
          element: <Template />,
        },
        {
          path: '/template/create-link',
          element: <CreateLink />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/my-links',
          element: <MyLinks />,
        },
      ],
    },
  ]);

  return routes;
}

export default App;
