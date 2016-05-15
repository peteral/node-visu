var _ = require('lodash')

// picture registers for devices after connecting
//

// define some inital state
var devices = {}
devices["pump1"] = { running : false }
devices["conveyor1"] = { running : true }

function getData(request) {
    var result = []

    _.forEach(request, function (deviceName) {
        result.push( { device : deviceName, state : devices[deviceName]} )
    })

    return result
}

function listen(server) {
    var io = require("socket.io").listen(server)
    io.sockets.on("connection", function (socket) {
        socket.on("register", function(devices) {
            console.log("register: " + JSON.stringify(devices))
            socket.emit("data", getData(devices))
        })
    })
}

module.exports = listen