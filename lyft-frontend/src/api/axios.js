import axios from 'axios';

const instance = axios.create({
    headers: {
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json",
    },
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    timeout: 10000,
});


instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);



export default instance;