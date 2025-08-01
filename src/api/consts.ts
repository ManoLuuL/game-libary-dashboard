import axios from 'axios';

const BASE_URL = 'https://api.rawg.io/api';

export const baseApi = axios.create({
  baseURL: BASE_URL,
  params: {
    key: '',
  },
});
