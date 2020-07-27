import axios from 'axios';
import Storage from '../storage/auth';
import { showMessage } from 'react-native-flash-message';

const api = axios.create({
  baseURL: 'http://67.205.162.29/',
});

api.interceptors.request.use(async (request) => {
  const storage = await Storage.getUser();
  if (storage !== null) {
    const user = JSON.parse(storage);

    request.headers.Authorization = `Bearer ${user.token}`;
    request.headers.refresh_token = user.refresh;
  }

  return request;
})

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    const erros = error.response.data;
    erros.forEach((erro) => {
      showMessage({
        message: erro.field,
        description: erro.message,
        type: "danger",
      });
    });
  }
  return error;
})

export default api;
