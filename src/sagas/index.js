import { fork } from 'redux-saga/effects'
import { fetch } from './fetchProducts'

export default function* root() {
  yield [
    fork(fetch)
  ]
}
