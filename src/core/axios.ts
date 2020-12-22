import axios from 'axios';
import { isWebUri } from 'valid-url';

export const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  authorization: 'Basic ZGV2LXBvcnRhbDo=',
};

const urlToOverride = localStorage.getItem('baseURL') || '';
let baseURL = process.env.API_URL;

if (isWebUri(urlToOverride)) {
  baseURL = urlToOverride;
}

export const axiosRequest = axios.create({
  baseURL,
});

export const fetchRequest = (path: string, config: RequestInit) => {
  return new Request(baseURL + path, config);
};
