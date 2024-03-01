import axios from "axios";

const app = axios.create ({
    baseURL: 'http://localhost:3000/api',
    headers: localStorage.getItem('token')
})

export default app