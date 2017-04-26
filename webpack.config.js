'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin'); //清理文件夹
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var extractCss = new ExtractTextWebpackPlugin("./index.css"); //这里的参数是配置编译后的css路径和文件名,相对于output里的path选项
module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.resolve(__dirname, './index.js')
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    publicPath: '/'
  },
  plugins: [
    new CleanPlugin(['./build'], {
      "root": path.resolve(__dirname),
      verbose: true,
      dry: false,
      "watch": false, // If true, remove files on recompile. (Default: false)
    }),
    extractCss,
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
    }),
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
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {presets: ['es2015', 'react'] }
      },
      {
                test: /\.json$/,
                loader: 'json!strip-json-comments'
            },
      {
        test:/\.scss$/,
        loader:extractCss.extract([ 'css-loader', 'postcss-loader', 'sass-loader' ]),
        //loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'
      },
      { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file' }
    ]
  },
  resolve: {
    extensions: ['','.js', '.jsx'],
  }
};