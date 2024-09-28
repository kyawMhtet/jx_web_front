import axios from "axios";

const megaShop = axios.create({
    baseURL: import.meta.env.VUE_APP_API_URL || 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

export default megaShop;
