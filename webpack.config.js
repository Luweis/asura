const common = require('./webpack.common');
const merge = require('webpack-merge');
const dev = require('./webpack.dev');
const pro = require('./webpack.pro');

let config;
if (process.env.NODE_ENV==='development'){
    config = merge(common, dev);
}else {
    config = merge(common,pro);
}

module.exports = config;

