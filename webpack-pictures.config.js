var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:  {
        picture1 :  './frontend/pictures/picture1-loader.jsx', 
        picture2 :  './frontend/pictures/picture2-loader.jsx',
    },
    output: {
        path: __dirname + "/public/pictures",
        filename: '[name].js'
    },
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