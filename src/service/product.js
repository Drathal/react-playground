export default {}
export const get = endpoint => fetch(endpoint).then(response => {
  if (response.status >= 400) {
    throw new Error(`Bad response from server status: ${response.status}`)
  }
  return response.json()
})
