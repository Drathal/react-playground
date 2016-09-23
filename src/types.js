import type {
  AddProductAction,
  DeleteProductAction,
  SetProductsAction
} from './reducer/products/types'

export type ReduxAction = {
  type: string,
  error?: boolean,
  meta?: any,
  payload?: any
}

export type Action
  = ReduxAction
  | AddProductAction
  | DeleteProductAction
  | SetProductsAction
