import api from '.';

const login = async (email: string, password: string) => {
  const response = await api.post('auth', { email, password });
  return response.data;
};
interface Cadastro {

}
const signUp = async (user: {
  email: string;
  password: string;
  name: string;
}) => {
  const response = await api.post('users', user);
  return response.data;
}

export {
  login,
  signUp,
};
