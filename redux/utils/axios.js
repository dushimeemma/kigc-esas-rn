import axios from 'axios';

const axiosReq = axios.create({
  baseURL: 'https://kigc-esas.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosReq;
