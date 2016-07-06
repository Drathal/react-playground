const precss = require('precss')
const cssModuleValues = require('postcss-modules-values')

module.exports = {
  postcss() {
    return [
      cssModuleValues,
      precss
    ]
  },
  resolve: {
    alias: require('./paths')
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|eot|woff|woff2|ttf|ottf)$/i,
        loaders: ['file-loader']
      },
      {
        test: /\.(css)$/,
        loader: 'style!css?modules&-import&-url!postcss'
      }
    ]
  }
}
