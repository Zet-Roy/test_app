import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://newsapi.org/v2/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});