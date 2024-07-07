import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.4.1', // Replace with your ESP32 IP address
  timeout: 5000, // Adjust as needed
  headers: {
      'Content-Type': 'application/json',
  },
});

export default api;