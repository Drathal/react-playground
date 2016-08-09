const webpack = require('webpack')
const webpackValidator = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const cssModuleValues = require('postcss-modules-values')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const rucksack = require('rucksack-css')

require('dotenv-safe').load()

const devhost = process.env.npm_package_config_devhost || 'localhost'
const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction
const webpackPort = parseInt(process.env.APP_PORT, 10) + 1
const PATH = require('./paths')

const hot = isProduction ? ['babel-polyfill'] : [
  'react-hot-loader/patch',
  'babel-polyfill',
  `webpack-dev-server/client?http://${devhost}:${webpackPort}`,
  'webpack/hot/only-dev-server'
]

const loaders = isProduction ? [
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      { filename: 'css?camelCase&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss' }
    )
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'url-loader?limit=8192&name=assets/[name].[hash].[ext]'
  }
] : [
  {
    test: /\.css$/,
    loaders: [
      'style?sourceMap',
      'css?camelCase&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]&sourceMap',
      'postcss?sourceMap'
    ]
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'file'
  }
]

const plugins = isProduction ? [
  new WebpackCleanupPlugin(),
  new ImageminPlugin({
    disable: false,
    optipng: {
      optimizationLevel: 3
    },
    gifsicle: {
      optimizationLevel: 1
    },
    jpegtran: {
      progressive: false
    },
    svgo: {
    },
    pngquant: {
      quality: '95-100'
    },
    plugins: []
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true, // eslint-disable-line
      warnings: false
    }
  })
] : [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
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
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    alias: PATH
  },
  output: {
    path: PATH.build,
    filename: isProduction ? '[name].[hash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[hash].js': '[name].js',
    publicPath: '/',
    pathinfo: isDevelopment
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: ['echo "Webpack frontend Start"'],
      onBuildEnd: ['echo "Webpack frontend End"']
    }),
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
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'PRODUCT_SERVICE_URL',
      'APP_PORT'
    ]),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css',
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
      cssModuleValues,
      rucksack(({
        fallbacks: true
      })),
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
