const path = require('path')
const webpack = require('webpack')
const webpackValidator = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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

const hot = isProduction ? [] : [
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
  new webpack.optimize.DedupePlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true, // eslint-disable-line
      warnings: false,
    },
  })
] : [
  // enable hot reloading in development
  new webpack.HotModuleReplacementPlugin()
]

module.exports = () => {
  return webpackValidator({
    debug: isDevelopment,
    bail: isProduction,
    resolve: {
      extensions: [
        '',
        '.js',
        '.scss',
        '.json'
      ]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    entry: {
      app: [...hot, './src/index'],
      vendor: [...hot],
    },
    target: 'web',
    output: {
      path: PATH.build,
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      publicPath: '/',
      pathinfo: isDevelopment
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: module => /node_modules/.test(module.resource)
      }),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new DotenvPlugin({
        sample: './.env.example',
        path: './.env'
      }),
      new ExtractTextPlugin('[name].[hash].css', {
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
  })
}
