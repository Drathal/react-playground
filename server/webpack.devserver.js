const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack/webpack.config')

const devhost = process.env.npm_package_config_devhost || 'localhost'
const webpackPort = parseInt(process.env.APP_PORT, 10) + 1

new WebpackDevServer(webpack(config()), {
  hot: true,
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  stats: 'minimal',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
  }
}).listen(webpackPort, devhost)
