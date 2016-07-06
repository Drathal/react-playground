const path = require('path')
const precss = require('precss')
const cssModuleValues = require('postcss-modules-values')

const PATH = {
  build: path.join(__dirname, '../dist'),
  src: path.join(__dirname, '../src'),
  components: path.join(__dirname, '../src/components'),
  reducer: path.join(__dirname, '../src/reducer'),
  app: path.join(__dirname, '../src/app')
}

module.exports = {
  postcss() {
    return [
      cssModuleValues,
      precss
    ]
  },
  resolve: {
    alias: {
      src: PATH.src,
      components: PATH.components,
      reducer: PATH.reducer,
      app: PATH.app
    }
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
