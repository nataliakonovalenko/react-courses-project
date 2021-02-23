const { merge } = require('webpack-merge');
const dev = require('./webpack.dev.config.js');
const prod = require('./webpack.prod.config.js');
const common = require('./webpack.common.config.js');

module.exports = process.env.NODE_ENV === 'development'
    ? merge(common, dev)
    : merge(common, prod);