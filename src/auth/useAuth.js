// ** AUTH Service Import
import AuthService from './authService';

export default function useAuth(authOverrideConfig) {
  const auth = new AuthService(authOverrideConfig);

  return {
    auth,
  };
}
