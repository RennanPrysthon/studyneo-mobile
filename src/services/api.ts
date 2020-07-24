import axios from 'axios';

const api = axios.create({
  baseURL: 'http://67.205.162.29/',
});

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  console.log(error.response.data);

  return error;
})

export default api;
