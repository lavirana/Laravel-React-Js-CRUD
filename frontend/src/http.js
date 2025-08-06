import axios from 'axios';
export default axios.create({
    baseURL: 'http://127.0.0.1:8001/api', // Adjust the base URL as needed
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow all origins for CORS
    }
});