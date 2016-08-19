import { call, put, take } from 'redux-saga/effects'

import * as productAPi from 'service/product'
import * as productActions from 'reducer/products/actions'
import { PRODUCTS_FETCH_REQUESTED, PRODUCTS_FETCH_FAILED } from 'reducer/ActionTypes'

const envProductEndpoint = process.env.PRODUCT_SERVICE_URL

// fetch products only once
function* fetchProducts(productEndpoint = envProductEndpoint) {
  yield take(PRODUCTS_FETCH_REQUESTED)

  try {
    const products = yield call(productAPi.get, productEndpoint)
    yield put(productActions.setProducts(products))
  } catch (e) {
    yield put({ type: PRODUCTS_FETCH_FAILED, message: e.message })
  }
}

export default fetchProducts
