// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your backend API base URL
  timeout: 10000, // Example timeout, adjust as needed
});

export default instance;