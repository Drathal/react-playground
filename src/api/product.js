import fetch from 'isomorphic-fetch'

export const getProducts = endpoint => fetch(endpoint).then(response => response.json())
