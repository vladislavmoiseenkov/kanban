import { api } from '../services/api';

const getColumns = async () => {
  return (await api.get('/columns')).data.columns;
};

export { getColumns };
