require('dotenv-safe').load()
const proxy = require('proxy-middleware')
const url = require('url')
const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const config = require('../webpack/webpack.config')()

const devhost = process.env.npm_package_config_devhost || 'localhost'
const serverPort = parseInt(process.env.APP_PORT, 10)
const webpackPort = parseInt(process.env.APP_PORT, 10) + 1

const app = new express()

if (process.env.START_SERVICE_MOCK === 'true') {
  app.use(cookieParser())
  app.use('/api/', require('./mocks/route.api.user'))
  app.use('/api/', require('./mocks/route.api.product'))
}

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve('./dist')))
  app.get('*', (req, res) => res.sendFile(path.resolve('./dist/index.html')))
}

if (process.env.NODE_ENV === 'development') {
  app.use(config.output.publicPath, proxy(url.parse(`http://${devhost}:${webpackPort}${config.output.publicPath}`)))
  require('./webpack.devserver')
}

app.listen(serverPort, error => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> Application Server running at port %s', serverPort)
  }
})
