import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = (email, password) => instance.post('/user/login', { email, password });

export const register = (firstName, lastName, email, password) => (
  instance.post('/user/register', {
    firstName,
    lastName,
    email,
    password,
  })
);

export const getWallPosts = () => instance.get('/post');

export const createPost = (postInfo, token) => instance.post('/post', postInfo, { headers: { Authorization: token } });
