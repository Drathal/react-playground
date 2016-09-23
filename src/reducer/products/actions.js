// @flow
import type {
  Product,
  Products,
  ProductId,
  AddProductAction,
  DeleteProductAction,
  SetProductsAction
} from './types'

export const ADD_PRODUCT = 'product/ADD_PRODUCT'
export const DELETE_PRODUCT = 'product/DELETE_PRODUCT'
export const SET_PRODUCTS = 'product/SET_PRODUCTS'

export const addProduct = (product : Product) : AddProductAction => ({
  type: ADD_PRODUCT, product
})

export const deleteProduct = (id : ProductId) : DeleteProductAction => ({
  type: DELETE_PRODUCT, id
})

export const setProducts = (products : Products) : SetProductsAction => ({
  type: SET_PRODUCTS, products
})
