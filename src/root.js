import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import routes from './routes'
import { Provider } from 'react-intl-redux'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router { ...{ routes, history }} />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
