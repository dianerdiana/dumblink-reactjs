// ** AUTH Service Import
import AuthService from './authService';

export default function getAuth(authOverrideConfig) {
  const auth = new AuthService(authOverrideConfig);

  return {
    auth,
  };
}
