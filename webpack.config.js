const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rock Paper Scissors',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.min.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader,  'css-loader']
      }
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ]
  },
  devServer: {
    static: __dirname,
    hot: true,
  },
}