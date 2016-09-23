// @flow
import type {
  Products
} from './types'

import type {
  Action
} from '../../types'

import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from './actions'
import { default as products } from './products'

const initialState = []

export default (state : Products = initialState, action : Action) : Products => {
  switch (action.type) {
    case ADD_PRODUCT:
    case DELETE_PRODUCT:
    case SET_PRODUCTS:
      return products(state, action)

    default:
      return state
  }
}
