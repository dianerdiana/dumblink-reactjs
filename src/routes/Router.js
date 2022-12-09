// ** React
import { lazy } from 'react';

// ** React Router Dom
import { Navigate, useRoutes } from 'react-router-dom';

// ** Utils
import { getHomeRouteForLoggedInUser, getUserData } from '../utility/utils';

// ** Layout
import Layout from '../components/layout';

// ** Routes
import { allRoutes } from './index';

// ** Components
const Landing = lazy(() => import('../views/Landing'));

const Router = () => {
  const getHomeRoute = () => {
    const user = getUserData();

    if (user) {
      return getHomeRouteForLoggedInUser(user);
    } else {
      return '/landing';
    }
  };

  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
    {
      path: '/landing',
      element: <Landing />,
    },
    {
      element: <Layout />,
      loader: getHomeRoute(),
      children: [...allRoutes],
    },
  ]);

  return routes;
};

export default Router;
