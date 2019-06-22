import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-kanban-server.herokuapp.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  }
});

export { api };
