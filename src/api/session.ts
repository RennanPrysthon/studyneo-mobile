import api from '.';

const login = async (email: string, password: string) => {
  const response = await api.post('auth', {email, password});
  return response.data;
};
interface SignUpData {
  email: string;
  password: string;
  name: string;
}
const signUp = async (user: SignUpData) => {
  const response = await api.post('users', user);
  return response.data;
};

const googleSignIn = async (idToken: string) => {
  const response = await api.post('auth/google', {idToken});
  return response.data;
};

export default {login, signUp, googleSignIn};
