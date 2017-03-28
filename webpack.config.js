'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin'); //清理文件夹
 
module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.resolve(__dirname, './Views/index.js')
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    publicPath: '/'
  },
  plugins: [
    new CleanPlugin(['output'], {
      "root": path.resolve(__dirname, './build'),
      verbose: true,
      dry: false
    }),
    // new HtmlWebpackPlugin({
    //   template: 'app/index.tpl.html',
    //   inject: 'body',
    //   filename: 'index.html'
    // }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: false
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {presets: ['es2015', 'react'] }
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'
      },
      { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file' }
    ]
  },
  resolve: {
    extensions: ['','.js', '.jsx'],
  }
};