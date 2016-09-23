export default {}
export const get = endpoint => fetch(endpoint).then(response => {
  if (response.status >= 400) {
    return response.json()
  }
  return response.json()
})
