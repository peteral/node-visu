var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:  {
        picture1 :  './frontend/pictures/picture1.jsx',
        picture2 :  './frontend/pictures/picture2.jsx',
    },
    output: {
        path: __dirname + "/public/pictures",
        filename: '[name].js'
    },
    externals : [{
        "react" : "React",
        "react-dom" : "ReactDOM",
        "alt" : "Alt",
        "socket.io-client" : "io",
        "../runtime/base.jsx" : "var Base"
    }
    ],
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