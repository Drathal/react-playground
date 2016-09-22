// @flow

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCTS
} from 'reducer/ActionTypes'

import type {
  Product,
  Products,
  ProductId
} from './types'

export const addProduct = (product : Product) : Object => ({
  type: ADD_PRODUCT, product
})

export const deleteProduct = (id : ProductId) : Object => ({
  type: DELETE_PRODUCT, id
})

export const setProducts = (products : Products) : Object => ({
  type: SET_PRODUCTS, products
})
