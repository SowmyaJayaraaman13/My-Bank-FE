import axios from "./axios"


const login = async (payload) => {
    const response = await axios.post('/api/public/login', payload);
    return response;
}

const signup = async (payload) => {
    const response = await axios.post('/api/public/signup', payload);
    console.log(response)
    if(response.status === 201) {
        window.location.href = '/login'
    }
}

export const AuthService = {
    login,
    signup
}