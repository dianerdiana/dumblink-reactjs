export const BASE_API = process.env.REACT_APP_BASE_API;

// ** Auth Endpoints
export default {
  loginEndpoint: `${BASE_API}/api/v1/login`,
  registerEndpoint: `${BASE_API}/api/v1/register`,
  logoutEndpoint: `${BASE_API}/api/v1/logout`,

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'token',
};
