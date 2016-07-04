export default {
  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/main') },
  component: require('../app').default,
  getChildRoutes(location, cb) {
    require.ensure([], (require) => cb(null, require('./layout/route').default), 'layout-route')
  }
}
