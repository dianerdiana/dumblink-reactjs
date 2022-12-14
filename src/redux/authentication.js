// Redux Imports
import { createSlice } from '@reduxjs/toolkit';
import useAuth from '../auth/useAuth';

const config = useAuth;

const initialUser = () => {
  const item = window.localStorage.getItem('userData');
  // Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : {};
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: initialUser(),
  },
  reducers: {
    handleRegister: (state, action) => {
      console.log({ state, action });
      state.userData = action.payload;
      state[config.storageTokenKeyName] =
        action.payload[config.storageTokenKeyName];
      localStorage.setItem('userData', JSON.stringify(action.payload));
      localStorage.setItem(
        config.storageTokenKeyName,
        JSON.stringify(action.payload.token)
      );
    },
    handleLogin: (state, action) => {
      console.log({ state, action });
      state.userData = action.payload;
      state[config.storageTokenKeyName] =
        action.payload[config.storageTokenKeyName];
      localStorage.setItem('userData', JSON.stringify(action.payload));
      localStorage.setItem(
        config.storageTokenKeyName,
        JSON.stringify(action.payload.token)
      );
    },
    handleLogout: (state) => {
      state.userData = {};
      state[config.storageTokenKeyName] = null;
      // ** Remove user, & token from localStorage
      localStorage.removeItem('userData');
      localStorage.removeItem(config.storageTokenKeyName);
    },
  },
});

export const { handleRegister, handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
