import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Adding JWT token for authenticated routes
API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  }
  return req;
});

export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const registerUser = (userData) => API.post('/auth/register', userData);
export const getAvailability = () => API.get('/availability');
export const postAvailability = (availability) => API.post('/availability', availability);
export const getAllUsersAvailability = () => API.get('/admin/users');
export const scheduleSession = (sessionData) => API.post('/admin/schedule', sessionData);
