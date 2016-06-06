export const ADD_PRODUCT = 'product/ADD_PRODUCT'
export const DELETE_PRODUCT = 'product/DELETE_PRODUCT'
export const SET_PRODUCTS = 'product/SET_PRODUCTS'

export const addProduct = product => ({
  type: ADD_PRODUCT, product
})

export const deleteProduct = id => ({
  type: DELETE_PRODUCT, id
})

export const setProducts = products => ({
  type: SET_PRODUCTS, products
})
