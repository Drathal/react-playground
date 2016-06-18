module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: ['file-loader']
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]', 'sass-loader']
      }
    ]
  }
}
