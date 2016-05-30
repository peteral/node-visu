var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './frontend/editor/base.jsx',
    output: {
        path: __dirname + "/public/javascripts",
        filename: 'editor.js',
        library : 'Base',
        libraryTarget : 'umd',
        umdNamedDefine : true
    },
    externals : {
        "react" : "React",
        "react-dom" : "ReactDOM",
        "alt" : "Alt",
        "jquery" : "$"
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