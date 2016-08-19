import { fork } from 'redux-saga/effects'
import logActions from './logActions'
import fetchProducts from './fetchProducts'

export default function* root() {
  yield [
    fork(logActions),
    fork(fetchProducts)
  ]
}
