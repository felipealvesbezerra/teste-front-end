import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://ec2-52-203-6-72.compute-1.amazonaws.com:8000',
});

export default api;
