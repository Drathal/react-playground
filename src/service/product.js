import fetch from 'isomorphic-fetch'

export default {}
export const get = endpoint => fetch(endpoint).then(response => response.json())
