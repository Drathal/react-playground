// @flow
import type {
  Product,
  Products
} from './types'

import type {
  Action
} from '../../types'

import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from './actions'
import product from './product'

export const getPosition = (list : Products, id: number) => list.findIndex(i => i.id === id)
export const inList = (list : Products, p : Product) => list.filter(i => i.id === p.id).length > 0

const initialState : Products = []

const products = (state : Products = initialState, action : Action) : Products => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (inList(state, action.product)) return state

      return [
        ...state,
        product(undefined, action)
      ]

    case DELETE_PRODUCT:
      const index = getPosition(state, action.id)
      if (index === -1) return state

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]

    case SET_PRODUCTS:
      if (!action.products) return state
      action.products.filter(p => {
        if (inList(state, p)) return false
        return true
      })

      return [
        ...action.products
      ]

    default:
      return state
  }
}

export default products
