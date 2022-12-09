// ** Return if user is logged in
export const getUserData = () => JSON.parse(localStorage.getItem('userData'));

// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = (obj) => Object.keys(obj).length === 0;

export const getHomeRouteForLoggedInUser = (user) => {
  if (user.id_user) {
    return '/template';
  }

  return '/landing';
};
