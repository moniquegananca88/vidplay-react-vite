import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'fdbdb6c09d274469f1755b5e25e1ce59',
    language: 'pt-BR',
    page: 1
  }
});

export default api;