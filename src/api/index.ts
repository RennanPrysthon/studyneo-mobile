import axios from 'axios';
import Storage from '~/services/storage/auth';

import {showError, Constants} from '~/utils';

const api = axios.create({
  baseURL: Constants.API_PROD,
});

interface Erro {
  field: string;
  message: string;
}

api.interceptors.request.use(async (request) => {
  const storage = await Storage.getUser();
  if (storage !== null) {
    const user = JSON.parse(storage);

    request.headers.Authorization = `Bearer ${user.token}`;
    request.headers.refresh_token = user.refresh;
  }

  return request;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const erros = error.response.data;
      erros.forEach(({field, message}: Erro) =>
        showError(message, field.charAt(0).toUpperCase() + field.slice(1)),
      );
    }
    //showError(`${error}`);

    throw error;
  },
);

export default api;
