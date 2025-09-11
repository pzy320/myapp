import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // 你的后端地址
  timeout: 5000,
});

export default instance;
