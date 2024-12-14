import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if(error.response?.status === 403){
        window.location.href = '/login'
    }
});


export default axios