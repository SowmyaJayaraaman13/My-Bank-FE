import axios from "./axios"


const getAllCategories = async () => {
    const response = await axios.post('/api/categories');
    return response;
}

const createCategory = async (payload) => {
    const response = await axios.post('/api/category', payload);
    return response;
}

export const UserService = {
    getAllCategories,
    createCategory
}