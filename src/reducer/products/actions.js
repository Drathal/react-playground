import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from 'reducer/ActionTypes'

export const addProduct = product => ({
  type: ADD_PRODUCT, product
})

export const deleteProduct = id => ({
  type: DELETE_PRODUCT, id
})

export const setProducts = products => ({
  type: SET_PRODUCTS, products
})
