import axios from "./axios"


const getAllCategories = async () => {
    const response = await axios.get('/api/categories');
    return response;
}

const createCategory = async (payload) => {
    const response = await axios.post('/api/category', payload);
    return response;
}

const updateCategory = async ({ id, payload }) => {
    const response = await axios.put(`/api/category/${id}`, payload);
    return response;
}

const getCategoryById = async ({id, payload}) => {
    const response = await axios.post(`/api/category/${id}`, payload);
    return response;
}

const deleteCategory = async (id) => {
    const response = await axios.delete(`/api/category/${id}`);
    return response;
}

export const CategoryService = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}