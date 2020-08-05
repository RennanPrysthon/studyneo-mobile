import api from '.';

const login = async (email: string, password: string) => {
  const response = await api.post('auth', {email, password});
  return response.data;
};

export default {
  login,
};
