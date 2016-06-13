import fetch from 'isomorphic-fetch'

export const get = endpoint => fetch(endpoint).then(response => response.json())
