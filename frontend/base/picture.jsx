import React from "react"
import SkyLight from 'react-skylight'
import Actions from "./actions.jsx"
import PictureStore from "./detailstore.jsx"
import io from "socket.io-client"
import DeviceRegistry from "./deviceregistry.jsx"

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
            <div className="app-picture">
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
        socket.on("connect", () => socket.emit("register", DeviceRegistry.getAll()))
        socket.on("data", (payload) => this.update(payload))
    }

    componentWillUnmount() {
        PictureStore.unlisten(this.showDetail)
    }

    content () {

    }

    update(payload) {
        console.log("data: " + JSON.stringify(payload))

        for (const device of payload)
            Actions.update( { target : device.device, newState : device.state } )
    }
}
