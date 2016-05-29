import React from "react"
import SkyLight from 'react-skylight'
import Actions from "./actions.jsx"
import PictureStore from "./picturestore.jsx"
import io from "socket.io-client"
import DeviceRegistry from "./deviceregistry.jsx"
import Tester from "./tester/tester.jsx"

export default class Picture extends React.Component {
    constructor() {
        super()
        this.state = { detailWindow : {}}
        this.showDetail = this.showDetail.bind(this)
    }

    showDetail(deviceState) {
        this.setState({ detailWindow : deviceState })
        this.refs.detail.show()
    }

    render() {
        return (
            <div className="runtime-picture">
                <Tester/>
                { this.content() }

                <SkyLight hideOnOverlayClicked ref="detail" title={ this.state.detailWindow.device }>
                    { JSON.stringify(this.state.detailWindow.state ) }
                </SkyLight>
            </div>
        )
    }

    componentDidMount() {
        PictureStore.listen(this.showDetail)

        var socket = io()
        socket.on("connect", () => this.registerDevices(socket))
        socket.on("data", (payload) => this.update(payload))
    }

    registerDevices(socket) {
        socket.emit("register", DeviceRegistry.getAll())
    }

    componentWillUnmount() {
        PictureStore.unlisten(this.showDetail)
    }

    content () {
    }

    update(payload) {
        for (const device of payload)
            Actions.update( { target : device.device, newState : device.state } )
    }
}
