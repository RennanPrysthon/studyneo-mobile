import axios from 'axios';
import Storage from '../storage/auth';

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
  return error;
})

export default api;
