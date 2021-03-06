const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
  mode: 'development',
  plugins: [
    //  you should know that the HtmlWebpackPlugin by default will generate its own index.html
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'head'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css'
    })
  ],
  output: {
    filename: '[name].[contenthash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    contentBase: '../dist'
  }
});
