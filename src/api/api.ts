import axios from 'axios';
import { getAccessToken } from 'core/utils/commonMethods';

const authHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  authorization: 'Basic c3RyaXgtdWk6',
};

const headers = {
  'Content-Type': 'application/json',
};

const baseURL = process.env.REACT_APP_API_URL;

export const authRequest = axios.create({
  baseURL,
  headers: authHeaders,
});

export const request = axios.create({
  baseURL,
  headers,
});

request.interceptors.request.use(
  (config) => {
    console.log(`this is request iterceptor ${config.method} ${config.url}`);
    console.log(config);
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// update the reqponse if require and manage the log
request.interceptors.response.use(
  (res) => {
    console.log(`this is response iterceptor ${res}`);
    return res;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
