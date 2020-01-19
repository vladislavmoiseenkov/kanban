import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-kanban-server.herokuapp.com',
  // baseURL: 'http://127.0.0.1:3000',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  }
});

export { api };
