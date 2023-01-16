import axios from 'axios';

var api = axios.create({
    baseURL: process.env.REACT_APP_API_DOMAIN,
    headers: {
        'Accept': '*/*',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
});

export default api;