import axios from "./axios"


const getAllCards = async () => {
    const response = await axios.get('/api/cards');
    return response;
}

const createCard = async (payload) => {
    const response = await axios.post('/api/card', payload);
    return response;
}

const updateCard = async ({ id, payload }) => {
    const response = await axios.put(`/api/card/${id}`, payload);
    return response;
}

const getCardById = async ({id, payload}) => {
    const response = await axios.post(`/api/card/${id}`, payload);
    return response;
}

const deleteCard = async (id) => {
    const response = await axios.delete(`/api/card/${id}`);
    return response;
}

export const CardService = {
    getAllCards,
    createCard,
    getCardById,
    updateCard,
    deleteCard
}