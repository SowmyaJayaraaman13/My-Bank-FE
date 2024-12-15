import axios from "./axios"


const getUser = async () => {
    const response = await axios.get('/api/user');
    return response;
}

export const UserService = {
    getUser
}