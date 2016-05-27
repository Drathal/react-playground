import axios from 'axios';

export const getProducts = endpoint => axios.get(endpoint).then(response => response)
