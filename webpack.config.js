var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './frontend/main.js',
    output: { path: __dirname + "/public/javascripts", filename: 'bundle.js' },
    debug : true,
    devtool : "sourcemap",
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};