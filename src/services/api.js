import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-wallyson.herokuapp.com'
});

export default api;