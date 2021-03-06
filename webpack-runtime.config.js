var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './frontend/runtime/base.jsx',
    output: {
        path: __dirname + "/public/javascripts",
        filename: 'runtime.js',
        library : 'Base',
        libraryTarget : 'umd',
        umdNamedDefine : true
    },
    externals : {
        "react" : "React",
        "react-dom" : "ReactDOM",
        "alt" : "Alt",
        "socket.io-client" : "io"
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
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
};