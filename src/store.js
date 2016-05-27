import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import rootReducer from './redux/modules/root'

export default (initialState = {}) => {
  const devToolsExtension = window.devToolsExtension ? window.devToolsExtension() : undefined
  const middlewares = applyMiddleware(thunkMiddleware, promiseMiddleware)
  const store = middlewares(createStore)(rootReducer, initialState, devToolsExtension)

  if (module.hot) {
    module.hot.accept('./redux/modules/root', () => {
      const nextRootReducer = require('./redux/modules/root').default // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
