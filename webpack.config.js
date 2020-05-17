const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './dashboard/assets',
  output: {
    path: path.resolve(__dirname, 'static/'),
    filename: 'index.js',
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          }
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
};