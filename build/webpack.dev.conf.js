const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const config = require('./config')
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        port: config.dev.port
    }
});
