export default {
  path: ':layout',
  getComponent(location, cb) {
    require.ensure([], (require) => cb(null, require(`./layout_${location.params.layout}/index.js`).default), 'layout')
    // this will fix hot reloading - on a dynamic route (only development)
    if (process.env.NODE_ENV === 'development') {
      require('./layout_main/index.js').default // eslint-disable-line
      require('./layout_dashboard/index.js').default // eslint-disable-line
    }
  },
  indexRoute: {
    onEnter: (nextState, replace) => {
      replace(`/${nextState.params.layout}/products`)
    }
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => cb(null, [
      require('../products/route').default,
      require('../notFound/route').default]
    ), 'products-notFound-route')
  }
}
