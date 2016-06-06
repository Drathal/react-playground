export const ADD_PRODUCT = 'product/ADD_PRODUCT'
export const ADD_RANDOM_PRODUCT = 'product/ADD_RANDOM_PRODUCT'
export const DELETE_PRODUCT = 'product/DELETE_PRODUCT'
export const SET_PRODUCTS = 'product/SET_PRODUCTS'

// TODO: refactor -> move outside standard actions
const createRandomProduct = () => {
  const id = Math.floor(Math.random() * (100 - 5) + 5)
  return { id, description: `product ${id}` }
}

export const addProduct = product => ({
  type: ADD_PRODUCT, product
})

export const addRandomProduct = () => ({
  type: ADD_PRODUCT, product: createRandomProduct()
})

export const deleteProduct = id => ({
  type: DELETE_PRODUCT, id
})

export const setProducts = products => ({
  type: SET_PRODUCTS, products
})
