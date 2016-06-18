const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DotenvPlugin = require('webpack-dotenv-plugin')
require('dotenv-safe').load()
const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction
const webpackPort = parseInt(process.env.APP_PORT, 10) + 1
const PATH = {
  build: path.join(__dirname, '../dist'),
  src: path.join(__dirname, '../src')
}

const app = isProduction ? [] : [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://0.0.0.0:${webpackPort}`,
  'webpack/hot/only-dev-server'
]

const loaders = isProduction ? [
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
      'url-loader?limit=10000',
      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false&verbose=false'
    ]
  }
] : [
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
      'file-loader'
    ]
  }
]

const plugins = isProduction ? [
  // same as webpack -p
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    sourceMap: false,
    compress: {
      warnings: false
    }
  })
] : [
  // enable hot reloading in development
  new webpack.HotModuleReplacementPlugin()
]

const config = {
  debug: isDevelopment,
  noInfo: isProduction,
  resolve: {
    root: [PATH.src],
    extensions: [
      '',
      '.js',
      '.scss',
      '.json'
    ]
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  entry: [
    ...app,
    './src/index'
  ],
  target: 'web',
  output: {
    path: PATH.build,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env'
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.NoErrorsPlugin(),
    ...plugins
  ],
  module: {
    loaders: [
      ...loaders,
      {
        test: /\.js$/,
        loaders: [`babel?cacheDirectory&cacheIdentifier=${Math.random()}`],
        include: PATH.src
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!sass-loader?sourceMap')
      },
      { test: /\.json$/, loaders: ['json'] },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' }
    ]
  }
}

module.exports = config
