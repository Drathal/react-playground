require('dotenv-safe').load()
const path = require('path')
const webpack = require('webpack')
const webpackValidator = require('webpack-validator')
const WebpackShellPlugin = require('webpack-shell-plugin')
const PATH = require('./paths')

const webpackConfig = webpackValidator({
  entry: './server/index.js',
  target: 'node',
  externals: /^[a-z\-0-9]+$/,
  output: {
    path: PATH.build,
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new WebpackShellPlugin({ onBuildStart: ['echo "Webpack Server Start"'], onBuildEnd: ['echo "Webpack Server End"'] }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'START_SERVICE_MOCK',
      'JWT_SECRET'
    ]),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } })
  ],
  module: {
    loaders: [
      { test: /\.json$/, loaders: ['json'] },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /(node_modules|.spec.)/
      }
    ]
  }
})

module.exports = webpackConfig
