const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './script.js',
  output: {
    filename: 'scripts/bundle.js',
    path: path.resolve(__dirname, 'dist/content'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: '../index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/style.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/*.jpg'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ]
  }

};