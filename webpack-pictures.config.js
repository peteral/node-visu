var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './frontend/pictures/picture1-loader.jsx',
    output: { path: __dirname + "/public/pictures", filename: 'picture1.js' },
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