import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './components/App'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import ProductListContainer from './containers/ProductListContainer'

const Routes = (<Route path="/" component={App}>
  <Route path="/:layout" component={Layout}>
    <IndexRedirect to="products" />
    <Route path="products" component={ProductListContainer} />
  </Route>
  <IndexRedirect to="/main/products" />
  <Route path="*" component={NotFound} />
</Route>)

export default Routes
