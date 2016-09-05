const webpack = require('webpack')
const webpackValidator = require('webpack-validator')
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
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
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
