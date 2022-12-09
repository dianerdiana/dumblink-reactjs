// ** React
import { lazy } from 'react';

// ** Components
const Template = lazy(() => import('../views/Template'));
const CreateLink = lazy(() => import('../views/CreateLink'));
const Profile = lazy(() => import('../views/Profile'));
const MyLinks = lazy(() => import('../views/MyLinks'));

const allRoutes = [
  {
    path: '/template',
    element: <Template />,
  },
  {
    path: '/create-link',
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
];

export { allRoutes };
