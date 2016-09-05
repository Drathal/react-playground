const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack/webpack.config')

const devhost = process.env.npm_package_config_devhost || 'localhost'
const webpackPort = 3001

new WebpackDevServer(webpack(config()), {
  hot: true,
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  stats: 'minimal',
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
}).listen(webpackPort, devhost)
