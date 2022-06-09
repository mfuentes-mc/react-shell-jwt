import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://backend.mfuentesmfe.com',
});

export default clientAxios;