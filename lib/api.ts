import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.4.1', // Replace with your ESP32 IP address
  timeout: 5000, // Adjust as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getSensorData() {
  try {
    const response = await api.get('/data');
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching sensor data:', error);
    throw error;
  }
}

export async function sendControlCommand(action:string, direction:string) {
  try {
    const response = await api.post('/control', { action, direction });
    return response.data;
  } catch (error) {
    console.error('Error sending control command:', error);
    throw error;
  }
}