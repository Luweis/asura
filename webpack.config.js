const path = require('path');
const webpack = require('webpack');
const htmlPlug = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, 'app/index.tsx'),
  output: {
    path: path.resolve('./app/public'),
    filename: "app.[name].[hash].js",

  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss']
  },
  mode: "production",
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.[js|ts]/,
        use: [{loader: "babel-loader"}]
      },
      {
        test: /\.css/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      }
    ]
  },
  plugins: [
    new htmlPlug({ template: path.resolve('./app/index.html') }),
    new webpack.HotModuleReplacementPlugin(),

  ],
  devServer: {
    contentBase: path.resolve('./app/public'),
    hot: true,
    host: 'localhost',
    port: 3000,
    inline:true
  }
};
