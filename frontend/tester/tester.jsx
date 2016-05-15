import React from "react"
import TesterDevice from "./testerdevice.jsx"
import TesterStore from "./testerstore.jsx"
import io from "socket.io-client"

class Tester extends React.Component {
    constructor() {
        super()
        this.send = this.send.bind(this)
    }

    render() {
        return (
            <div>
                <hr/>
                Toggle running in backend:
                <TesterDevice name="pump1"/>
                <TesterDevice name="conveyor1"/>
            </div>
        )
    }

    componentDidMount() {
        TesterStore.listen(this.send)
        this.socket = io()
    }

    componentWillUnmount() {
        TesterStore.unlisten(this.showDetail)
    }

    send(payload) {
        this.socket.emit("write", payload)
    }
}

export default Tester
