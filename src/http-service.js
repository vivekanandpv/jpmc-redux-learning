import axios from 'axios';

export const httpService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'X-app': 'My React App',
  },
});

httpService.interceptors.request.use(
  (config) => {
    console.log('request interceptor', config.headers);
    config.headers['X-interceptor'] = 'Axios request interceptor value';
    return config;
  },
  (error) => {
    console.log('Axios request interceptor error', error);

    return Promise.reject(error);
  }
);

httpService.interceptors.response.use(
  (response) => {
    console.log('response interceptor', response);
    return response;
  },
  (error) => {
    console.log('Axios response interceptor error', error);

    return Promise.reject(error);
  }
);
