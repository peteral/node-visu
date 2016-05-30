var fs = require('fs')
var cp = require('child_process')

function generateWebpackConfig(picture) {
    return `var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:  './frontend/upload/` + picture + `.jsx',
    output: {
        path: "./public/pictures",
        filename: '` + picture + `.js'
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
            { test: /\\.css$/, loader: "style-loader!css-loader" }
        ]
    },
};`
}

function generatePictureFile(picture, content) {
    return `import React from "react"
import Base from '../runtime/base.jsx'
import ReactDOM from 'react-dom'

import Library from "../library/library.jsx"
var { Pump, Conveyor, Link } = Library

export default class Picture extends Base.Picture {
    content() {
        return (
            ` + content + ` 
        )
    }
}

ReactDOM.render(<Picture name="` + picture + `"/>, document.getElementById("player"))`
}

function saveFile(fileName, content) {
    fs.writeFile(fileName, content, function(err) {
        if (err)
            return console.log(err)
    })
}

function handleUpload(picture, content, finished) {
    var configFile = "./frontend/upload/webpack-" + picture + ".config.js"
    saveFile("./frontend/upload/" + picture + ".jsx", generatePictureFile(picture, content))
    saveFile(configFile, generateWebpackConfig(picture))

    console.log(__dirname)

    cp.exec('webpack --config ' + configFile, function(error, stdout, stderr) {
        if (error)
            console.error("exec error: " + error)
        else
            finished()
    })
}

function initialize(app) {
    
    app.post('/upload', function(req, res) {
        handleUpload(req.body.picture, req.body.content, function() {
            res.send()
        })

    })
}

module.exports = initialize