import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes'
import { I18n } from './translation'

const Root = ({ store, history }) => (
  <Provider store={store} test={'test'}>
    <I18n>
      <Router { ...{ routes, history }} />
    </I18n>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
