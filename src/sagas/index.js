import { fork } from 'redux-saga/effects'
import fetchProducts from './fetchProducts'

export default function* root() {
  yield [
    fork(fetchProducts)
  ]
}
