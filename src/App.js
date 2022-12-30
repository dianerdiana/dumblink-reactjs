// ** React
import { Navigate, useRoutes } from 'react-router-dom';
import { getUserData } from './utility/utils';

// ** Layout
import Layout from './views/Layout';
import Home from './views/Home';

// ** Components
import Template from './views/Template';
import CreateLink from './views/CreateLink';
import EditLink from './views/EditLink';
import Profile from './views/Profile';
import MyLinks from './views/MyLinks';
import ViewLinktree from './views/ViewLinktree';

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
          path: '/template/:template_id/edit/:linktree_id',
          element: <EditLink />,
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
      path: '/:unique_link',
      element: <ViewLinktree />,
    },
    {
      path: '*',
      element: <Navigate replace to={getHomeRoute()} />,
    },
  ]);

  return routes;
};

export default App;
