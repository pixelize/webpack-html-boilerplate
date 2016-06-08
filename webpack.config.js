
import webpack from 'webpack'

module.exports = {
  context: __dirname + '/app',
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    './_static/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html?interpolate' },
      { test: /\.(png|jpg|jpeg|svg|gif)$/, loader: 'file' },
      { test: /\.(woff|ttf|eot)$/, loader: 'file' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css!postcss-loader!sass' },
      { test: /\.font\.json$/, loader: 'style!css!fontgen' }
    ]
  },
  devtool: '#source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: function () {
    return [
      require('lost')({
        gutter: '30px'
      }),
      require('autoprefixer')
    ]
  }
}
