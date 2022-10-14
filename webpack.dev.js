const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src/assets')
    },
    compress: true,
    port: 3000,
    liveReload: true
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name].[hash][ext]',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      chunks: ['app']
    }),
    new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. create css file
          'css-loader', // 2. Turns css into commonjs
          'postcss-loader', // add css tailwind
          'sass-loader' // 1. Turns sass into css
        ]
      }
    ]
  }
});
