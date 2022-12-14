import axios from 'axios';
import authDefaultConfig from './authDefaultConfig';
import { BASE_API } from './authDefaultConfig';

export default class AuthService {
  // ** authConfig <= Will be used by this service
  authConfig = { ...authDefaultConfig };

  // ** For Refreshing Token
  isAlreadyFetchingToken = false;

  // For Refreshing Token
  subscribers = [];

  constructor(authOverrideConfig) {
    this.authConfig = { ...this.authConfig, ...authOverrideConfig };

    // ** Request Interceptor
    axios.interceptors.request.use(
      (config) => {
        // ** Get token from localStorage
        const token = this.getToken();
        const accessToken = JSON.parse(token);

        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
          // ** eslint-disable-next-line no-param-reassign
          config.baseURL = BASE_API + '/api/v1/';
          config.headers.Authorization = `${this.authConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // ** Add request/response interceptor
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        // ** const {config, response: {status}} = error
        const { config, response } = error;
        const originalRequest = config;

        // ** if (status === 401) {
        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingToken) {
            this.isAlreadyFetchingToken = true;
            this.refreshToken().then((r) => {
              this.isAlreadyFetchingToken = false;

              // ** Update accessToken in localStorage
              this.setToken(r.data.accessToken);
              this.setRefreshToken(r.data.refreshToken);

              this.onAccessTokenFetched(r.data.accessToken);
            });
          }
          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((accessToken) => {
              originalRequest.headers.Authorization = `${this.authConfig.tokenType} ${accessToken}`;
              resolve(this.axios(originalRequest));
            });
          });
          return retryOriginalRequest;
        }
        return Promise.reject(error);
        //}
      }
    );
  }

  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter((callback) =>
      callback(accessToken)
    );
  }

  addSubscriber(callback) {
    this.subscribers.push(callback);
  }

  getToken() {
    return localStorage.getItem(this.authConfig.storageTokenKeyName);
  }

  getRefreshToken() {
    return localStorage.getItem(this.authConfig.storageRefreshTokenKeyName);
  }

  setToken(value) {
    localStorage.setItem(this.authConfig.storageTokenKeyName, value);
  }

  setRefreshToken(value) {
    localStorage.setItem(this.authConfig.storageRefreshTokenKeyName, value);
  }

  login(...args) {
    return axios.post(this.authConfig.loginEndpoint, ...args);
  }

  register(...args) {
    return axios.post(this.authConfig.registerEndpoint, ...args);
  }

  refreshToken() {
    return axios.post(this.authConfig.refreshEndpoint, {
      refreshToken: this.getRefreshToken(),
    });
  }
}
