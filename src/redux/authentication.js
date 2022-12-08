// Redux Imports
import { createSlice } from '@reduxjs/toolkit';

// ** UseAuth import to get config
import useAuth from '../auth/useAuth';

const config = useAuth.authConfig;

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
    handleLogin: (state, action) => {
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

export const { handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
