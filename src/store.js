import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducer/root'

export default (initialState = {}) => {
  const devToolsExtension = window.devToolsExtension ? window.devToolsExtension() : undefined
  const middlewares = applyMiddleware(thunkMiddleware, promiseMiddleware)
  const store = middlewares(createStore)(rootReducer, initialState, devToolsExtension)

  if (module.hot) {
    module.hot.accept('./reducer/root', () => store.replaceReducer(require('./reducer/root').default))
  }

  return store
}
