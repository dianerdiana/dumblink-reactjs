export const BASE_API = process.env.REACT_APP_BASE_API;

// ** Auth Endpoints
export default {
  loginEndpoint: `${BASE_API}/login`,
  registerEndpoint: `${BASE_API}/register`,
  logoutEndpoint: `${BASE_API}/logout`,

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'TOKEN',
};
