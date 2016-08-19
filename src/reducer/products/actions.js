import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCTS,
  PRODUCTS_FETCH_REQUESTED
} from 'reducer/ActionTypes'

export const addProduct = product => ({
  type: ADD_PRODUCT, product
})

export const deleteProduct = id => ({
  type: DELETE_PRODUCT, id
})

export const setProducts = products => ({
  type: SET_PRODUCTS, products
})

export const fetchProducts = () => ({
  type: PRODUCTS_FETCH_REQUESTED
})
