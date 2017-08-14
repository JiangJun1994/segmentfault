/**
 * Created by jiangjun on 2017/1/3.
 */
//webpack-dev-server不会生成打包文件，要先执行webpack.

var webpack = require('webpack')

module.exports = {
  entry: {"bundle":'./private/index.js'
    // "bundle2":'./register.js',
    // "bundle3":'./login.js',
  },


  output: {
    path: __dirname + '/public',
    filename: '[name].js',   //'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ] : [new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })],
  devServer: {
    inline: true,
    port: 7777
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
}