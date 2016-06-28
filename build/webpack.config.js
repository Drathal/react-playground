const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const webpackValidator = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

require('dotenv-safe').load()
const devhost = process.env.npm_package_config_devhost || 'localhost'
const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction
const webpackPort = parseInt(process.env.APP_PORT, 10) + 1
const PATH = {
  build: path.join(__dirname, '../dist'),
  src: path.join(__dirname, '../src')
}

const hot = isProduction ? [] : [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://${devhost}:${webpackPort}`,
  'webpack/hot/only-dev-server'
]

const loaders = isProduction ? [
  {
    test: /\.s?css$/,
    loader: ExtractTextPlugin.extract(
      'css?modules&importLoaders=2&localIdentName=[name]_[local]_[hash:base64:5]?sourceMap!postcss?sourceMap!sass?sourceMap'
    )
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
      'url-loader?limit=10000&name=assets/[name].[hash].[ext]',
      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false&verbose=false'
    ]
  }
] : [
  {
    test: /\.s?css$/,
    loader: 'style!css?modules&importLoaders=2&localIdentName=[name]_[local]_[hash:base64:5]?sourceMap!postcss?sourceMap!sass?sourceMap'
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'file'
  }
]

const plugins = isProduction ? [
  new WebpackCleanupPlugin(),
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
  new webpack.HotModuleReplacementPlugin()
]

const webpackConfig = () => webpackValidator({
  debug: isDevelopment,
  bail: isProduction,
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  entry: {
    app: [...hot, './src/index'],
    vendor: [...hot],
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.scss', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  output: {
    path: PATH.build,
    filename: isProduction ? '[name].[hash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[hash].js': '[name].js',
    publicPath: '/',
    pathinfo: isDevelopment
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource)
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PRODUCT_SERVICE_URL: JSON.stringify(process.env.PRODUCT_SERVICE_URL),
        APP_PORT: JSON.stringify(process.env.APP_PORT)
      }
    }),
    new ExtractTextPlugin('css/[name].[hash].css', {
      disable: !isProduction,
      allChunks: true
    }),
    new webpack.NoErrorsPlugin(),
    ...plugins
  ],
  postcss() {
    return [
      autoprefixer({
        browsers: ['last 2 version']
      }),
      precss
    ]
  },
  module: {
    loaders: [
      ...loaders,
      {
        test: /\.js$/,
        loaders: [`babel?cacheDirectory&cacheIdentifier=${Math.random()}`],
        exclude: /(node_modules|.spec.)/
      },
        { test: /\.json$/, loaders: ['json'] },
        { test: /\.ico$/, loader: 'file?name=[name].[ext]' },
        { test: /\.svg$/, loader: 'url?limit=15000&mimetype=image/svg+xml&name=assets/[name].[hash].[ext]' },
        { test: /\.woff$/, loader: 'url?limit=15000&mimetype=application/font-woff&name=assets/[name].[hash].[ext]' },
        { test: /\.woff2$/, loader: 'url?limit=15000&mimetype=application/font-woff2&name=assets/[name].[hash].[ext]' },
        { test: /\.[ot]tf$/, loader: 'url?limit=15000&mimetype=application/octet-stream&name=assets/[name].[hash].[ext]' },
        { test: /\.eot$/, loader: 'url?limit=15000&mimetype=application/vnd.ms-fontobject&name=assets/[name].[hash].[ext]' }
    ]
  }
})

module.exports = webpackConfig
