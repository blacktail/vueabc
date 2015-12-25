var webpack = require('webpack');
var config = require('./webpack.base.config');

config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),


    new webpack.optimize.OccurenceOrderPlugin()
]);

module.exports = config;
