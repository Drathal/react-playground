const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const proxy = require('proxy-middleware')
const url = require('url')
const path = require('path')
const express = require('express')
const getConfig = require('./webpack.config.js')

const config = getConfig()
const serverPort = parseInt(process.env.APP_PORT, 10)
const webpackPort = parseInt(process.env.APP_PORT, 10) + 1
const app = new express()

// product api
app.get('/api/product', (req, res) => res.sendFile(path.join(__dirname, '../test/fixtures/products.json')))

// devliver html coverage
app.use('/coverage', express.static(path.join(__dirname, '../coverage')))

// proxy hot server TODO: refactor hard coded protocol
app.use(config.output.publicPath, proxy(url.parse(`http://0.0.0.0:${webpackPort}${config.output.publicPath}`)))

// start server
app.listen(serverPort)

new WebpackDevServer(webpack(config), {
  hot: true,
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  stats: 'minimal',
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
}).listen(webpackPort, '0.0.0.0')
