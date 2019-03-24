const path = require('path');
const htmlPlug = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Clean = require('webpack-clean');
// const Manifest = require('webpack-manifest-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader'},
            {loader: 'postcss-loader'}
          ]
        })
      }
    ]
  },
  plugins: [
    new htmlPlug({template: path.resolve('./app/index.html')}),
    new ExtractTextPlugin('styles.[hash].css'),
    new Clean(path.resolve(__dirname, 'app/public')),
    new BundleAnalyzerPlugin()

  ],
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: "manifest"
    }
  }
};
