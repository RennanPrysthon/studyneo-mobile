import api from '.';

const login = async (email: string, password: string) => {
  const response = await api.post('auth', {email, password});
  return response.data;
};

interface Cadastro {
  email: string;
  password: string;
  name: string;
}
const signUp = async (data: Cadastro) => {
  const response = await api.post('users', data);
  return response.data;
};
export default {login, signUp};
