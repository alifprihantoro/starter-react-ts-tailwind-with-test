const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name].[hash][ext]'
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/template.html',
        chunks: ['app'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name].[hash].css' }), new CleanWebpackPlugin()],
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
