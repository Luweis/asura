const path = require('path');
const htmlPlug = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, 'app/index.tsx'),
  output: {
    path: path.resolve('./app/public'),
    filename: "app.[name].[hash].js",
    publicPath: "/test"

  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.[js|ts]/,
        use: [{loader: "babel-loader"}]
      }
    ]
  },
  plugins: [
    new htmlPlug({template: path.resolve('./app/index.html')})
  ]
};
