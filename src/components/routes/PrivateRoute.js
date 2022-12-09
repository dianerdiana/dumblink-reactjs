// ** React Imports
import { Navigate } from 'react-router-dom';
import { Suspense } from 'react';

const PrivateRoute = ({ children, route }) => {
  // ** Vars
  const user = JSON.parse(localStorage.getItem('userData'));

  if (route) {
    if (!user) {
      return <Navigate to='/landing' />;
    }
    if (user) {
      return <Navigate to='/' />;
    }
  }

  return <Suspense fallback={null}>{children}</Suspense>;
};

export default PrivateRoute;
