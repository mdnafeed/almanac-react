// axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://almanac-node.onrender.com',   // Replace with your API base URL //http://localhost:3000 
    // baseURL: 'http://localhost:3000',
    timeout: 5000, // Timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
        
        // You can add other headers here
    },
});

// Interceptors can be added here if needed
axiosInstance.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // Do something with successful response
        return response;
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosInstance;
