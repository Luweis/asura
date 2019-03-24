const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: "development",
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader'}
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  externals: 'react',
  devServer: {
    contentBase: path.resolve('./app/public'),
    hot: true,
    host: 'localhost',
    port: 3000,
    inline: true
  }
};
