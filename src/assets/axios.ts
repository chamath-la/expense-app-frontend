// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.233.38.153:8080', // Replace with your backend API base URL
  timeout: 10000, // Example timeout, adjust as needed
});

instance.interceptors.response.use(
  response => response,
  error => {
    // You can handle errors globally here
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // or get the token from Vuex or other storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;