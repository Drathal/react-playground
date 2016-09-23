// @flow

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCTS
} from 'reducer/ActionTypes'

import type {
  Product,
  Products,
  ProductId,
  AddProductAction,
  DeleteProductAction,
  SetProductsAction
} from './types'

export const addProduct = (product : Product) : AddProductAction => ({
  type: ADD_PRODUCT, product
})

export const deleteProduct = (id : ProductId) : DeleteProductAction => ({
  type: DELETE_PRODUCT, id
})

export const setProducts = (products : Products) : SetProductsAction => ({
  type: SET_PRODUCTS, products
})
