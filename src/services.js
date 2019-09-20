import axios from 'axios';

const api = {
    fetchBase: axios.create({
        baseURL: 'https://swapi.co/api/'
    }),
    fetch: axios.create()
};

export default api;