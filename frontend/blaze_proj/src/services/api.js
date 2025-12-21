import axios from 'axios';

// Create an Axios instance
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // change to your backend URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* Optional: Add a request interceptor to attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // your auth token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});*/

// ================= POSTS =================

// Get all posts (public)
export const getAllPosts = () => API.get('/posts');

/*  Add department post (private: president/manager)
export const addDepartmentPost = (department, data) =>
  API.post(`/posts/department/${department}`, data);

//  Add general post (private: president)
export const addGeneralPost = (data) =>
  API.post('/posts/general', data);
*/
//  Get department posts (public)
export const getDepartmentPosts = (department) =>
  API.get(`/posts/department/${department}`);

//  Get general posts (public)
export const getGeneralPosts = () => API.get('/posts/general');

//====================departments=====================
export const getDepartments = () => API.get('/departments');

export default API
