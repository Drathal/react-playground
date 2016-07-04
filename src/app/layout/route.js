export default {
  path: ':layout',
  getComponent(location, cb) {
    cb(null, require(`./layout_${location.params.layout}/index.js`).default)
    if (process.env.NODE_ENV === 'development') {
      require('./layout_main/index.js').default
      require('./layout_dashboard/index.js').default
    }
  },
  indexRoute: {
    onEnter: (nextState, replace) => {
      replace(`/${nextState.params.layout}/products`)
    }
  },
  getChildRoutes(location, cb) {
    cb(null, require('../products/route').default)
  }
}

/*
export default {
  path: ':layout',
  getComponent(location, cb) {
    require.ensure([], (require) => cb(null, require(`./layout_${location.params.layout}/index.js`).default), 'layout')
    // System.import('./layout').then((m) => cb(null, m.default)).catch((err) => console.error(err))
  },
  indexRoute: {
    onEnter: (nextState, replace) => {
      replace(`/${nextState.params.layout}/products`)
    }
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => cb(null, require('../products/route').default), 'products-route')
    // System.import('../products/route').then((m) => cb(null, m.default)).catch((err) => console.error(err))
  }
}
*/
