const config = require('config')
const webpack = require('webpack')
const webpackValidator = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const cssModuleValues = require('postcss-modules-values')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const rucksack = require('rucksack-css')

process.env.PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || config.products_enpoint
const devhost = process.env.npm_package_config_devhost || 'localhost'
const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction
const webpackPort = 3001
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
    exclude: /(file|global)\.css$/,
    loader: ExtractTextPlugin.extract({
      loader: 'css?camelCase&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss'
    })
  },
  {
    test: /(file|global)\.css$/,
    loader: ExtractTextPlugin.extract({
      loader: 'css'
    })
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'url?limit=8192&name=assets/[name].[hash].[ext]'
  }
] : [
  {
    test: /\.css$/,
    exclude: /(file|global)\.css$/,
    loaders: [
      'style?sourceMap',
      'css?camelCase&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]&sourceMap',
      'postcss?sourceMap'
    ]
  },
  {
    test: /(file|global)\.css$/,
    loader: ExtractTextPlugin.extract({
      loader: 'css'
    })
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'file?name=[name].[hash].[ext]'
  }
]

const plugins = isProduction ? [
  new WebpackCleanupPlugin({
    quiet: true
  }),
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
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
    alias: PATH
  },
  output: {
    path: PATH.build,
    filename: isProduction ? '[name].[hash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[hash].js' : '[name].js',
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
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'PRODUCT_SERVICE_URL'
    ]),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css',
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
        test: /\.(js|jsx)$/,
        loaders: [`babel?cacheDirectory&cacheIdentifier=${Math.random()}`],
        exclude: /(node_modules|.spec.)/
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.ico$/,
        loader: 'file?name=[name].[hash].[ext]'
      },
      {
        test: /\.svg$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.woff$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.woff2$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.[ot]tf$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.eot$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }
    ]
  }
})

module.exports = webpackConfig
