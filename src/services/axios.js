import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if(error.response?.status === 403){
        window.location.href = '/login'
    }
});

export default axios