import axios from 'axios';

// Create an Axios instance
const API = axios.create({
  baseURL: 'https://devignite-blaze-backend.onrender.com/api', // change to your backend URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});



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

export const addPost = () => API.post('/posts/department/:department');

export const addGeneralPost = (postData) => {
  // postData: { title, content, imageFile }
  const formData = new FormData();
  formData.append("title", postData.title);
  formData.append("content", postData.content);
  formData.append("image", postData.imageFile); // the file from input

  return API.post("/posts/general", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deletePost = (postId) => API.delete(`/posts/${postId}`);

export const getPost = (deptId) => API.get(`/posts/department/${deptId}`);
//====================departments=====================
export const getDepartments = () => API.get('/departments');
export const getDepartment = (id) => API.get(`/departments/${id}`);

export const followDepart = (dep) =>
  API.post(`/users/follow/${dep}`);

export const unfollowDepart = (dep) =>
  API.post(`/users/unfollow/${dep}`);

export default API
