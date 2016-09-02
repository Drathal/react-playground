const path = require('path')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const cssModuleValues = require('postcss-modules-values')
const rucksack = require('rucksack-css')
const PATH = require('../webpack/paths')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
    alias: PATH
  },
  output: {
    path: PATH.build,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /(file|global)\.css$/,
        loaders: [
          'style',
          'css?camelCase&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
          'postcss'
        ]
      },
      {
        test: /(file|global)\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file?name=[name].[hash].[ext]'
      },
      { test: /\.json$/, loaders: ['json'] },
      { test: /\.ico$/, loader: 'file' },
      { test: /\.svg$/, loader: 'file' },
      { test: /\.woff$/, loader: 'file' },
      { test: /\.woff2$/, loader: 'file' },
      { test: /\.[ot]tf$/, loader: 'file' },
      { test: /\.eot$/, loader: 'file' }
    ]
  },
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
}
