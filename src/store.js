import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer/root'
import sagas from './sagas'

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const devToolsExtension = window.devToolsExtension ? window.devToolsExtension() : undefined
  const middlewares = applyMiddleware(sagaMiddleware)
  const store = middlewares(createStore)(rootReducer, initialState, devToolsExtension)

  sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('./reducer/root', () => store.replaceReducer(require('./reducer/root').default))
  }

  return store
}
