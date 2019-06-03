import { api } from '../services/api';

const getCards = async () => {
  return (await api.get('/tasks')).data.tasks;
};

const addCard = async (name, columnId) => {
  return (await api.post('/task', { name, columnId })).data.task;
};

const removeCard = async (id) => {
  return (await api.delete(`/task/${id}`)).data;
};

const updateCard = async (id, name) => {
  return (await api.patch(`/task/${id}`, { name }))
};

export { getCards, addCard, removeCard, updateCard };
