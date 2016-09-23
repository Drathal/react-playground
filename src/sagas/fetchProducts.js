import { call, put, take } from 'redux-saga/effects'

import * as productAPi from 'service/product'
import * as productActions from 'reducer/products/actions'

export const PRODUCTS_FETCH_REQUESTED = 'product/PRODUCTS_FETCH_REQUESTED'
export const PRODUCTS_FETCH_SUCCEEDED = 'product/PRODUCTS_FETCH_SUCCEEDED'
export const PRODUCTS_FETCH_FAILED = 'product/PRODUCTS_FETCH_FAILED'

const envProductEndpoint = process.env.PRODUCT_SERVICE_URL

// fetch products only once
function* fetchProducts(productEndpoint : string = envProductEndpoint) {
  try {
    yield take(PRODUCTS_FETCH_REQUESTED)
    const products = yield call(productAPi.get, productEndpoint)
    yield put(productActions.setProducts(products))
  } catch (e) {
    yield put({ type: PRODUCTS_FETCH_FAILED, message: e.message })
  }
}

export const fetch = fetchProducts

export const actions = {
  fetch: () => ({ type: PRODUCTS_FETCH_REQUESTED })
}
