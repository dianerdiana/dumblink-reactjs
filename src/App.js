// ** React
import { Navigate, useRoutes } from 'react-router-dom';
import { getUserData } from './utility/utils';

// ** Layout
import Layout from './views/Layout';
import Home from './views/Home';

// ** Components
import Template from './views/Template';
import CreateLink from './views/CreateLink';
import Profile from './views/Profile';
import MyLinks from './views/MyLinks';

const App = () => {
  const getHomeRoute = () => {
    const user = getUserData();

    if (user) {
      return '/template';
    } else {
      return '/home';
    }
  };

  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: '/template',
          element: <Template />,
        },
        {
          path: '/template/create-link/:id',
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
    {
      path: '*',
      element: <Navigate replace to={getHomeRoute()} />,
    },
  ]);

  return routes;
};

export default App;
