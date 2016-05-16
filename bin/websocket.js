var _ = require('lodash')

// picture registers for devices after connecting
//

// define some inital state
var devices = [
    {
        name : "pump1",
        sockets : [],
        state : { running : false }
    },
    {
        name : "pump11",
        sockets : [],
        state : { running : true }
    },
    {
        name : "conveyor1",
        sockets : [],
        state : { running : false }
    },
    {
        name : "conveyor2",
        sockets : [],
        state : { running : false }
    },
    {
        name : "conveyor12",
        sockets : [],
        state : { running : true }
    }
]
function register(request, socket) {
    var result = []

    _.forEach(request, function (deviceName) {
        var device = _.find(devices, { "name" : deviceName })

        if (device !== undefined) {
            device.sockets.push(socket)
            result.push({device: device.name, state: device.state})
        }
    })

    console.log("Sending initial data: " + JSON.stringify(result))

    return result
}

function unregister(socket) {
    _.forEach(devices, function(device) {
        device.sockets = _.filter(device.sockets, function(s) {
            return s !== socket
        })
    })
}

function listen(server) {
    var io = require("socket.io").listen(server)
    io.sockets.on("connection", function (socket) {
        socket.on("register", function(devices) {
            console.log("register: " + JSON.stringify(devices))
            socket.emit("data", register(devices, socket))
        })

        socket.on("disconnect", function() {
            unregister(socket)
        })

        socket.on("write", function(data) {
            console.log("write: " + JSON.stringify(data))
            var device = _.find(devices, { "name" :data.device })

            if (device === undefined) {
                device = { sockets : []}
                devices.push(device)
            }
            device.state = data.state

            _.forEach(device.sockets, function (s) {
                s.emit("data", [ data ])
            })
        })
    })
}

module.exports = listen