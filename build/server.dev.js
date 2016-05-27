import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import proxy from 'proxy-middleware'
import url from 'url'
import path from 'path'
import express from 'express'
import config from './webpack.config.js'

const app = new express()

new WebpackDevServer(webpack(config), {
  hot: true,
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  stats: 'minimal',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
}).listen(config.port + 1, config.host)

// product api
app.get('/api/product', (req, res) => res.sendFile(path.join(__dirname, '../test/fixtures/products.json')))

// devliver html coverage
app.use('/coverage', express.static(path.join(__dirname, '../coverage')))

// proxy hot server
app.use(config.output.publicPath, proxy(url.parse(`http://${config.host}:${config.port + 1}${config.output.publicPath}`)))

// start server
app.listen(config.port)
