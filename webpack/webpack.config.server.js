require('dotenv-safe').load()
const path = require('path')
const webpack = require('webpack')
const webpackValidator = require('webpack-validator')

const PATH = {
  build: path.join(__dirname, '../dist/')
}

const webpackConfig = webpackValidator({
  entry: './server/index.js',
  target: 'node',
  externals: /^[a-z\-0-9]+$/,
  output: {
    path: PATH.build,
    filename: 'index.js',
    publicPath: PATH.build,
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.START_SERVICE_MOCK': JSON.stringify(process.env.START_SERVICE_MOCK)
    }),
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
