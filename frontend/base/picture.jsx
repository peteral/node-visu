import React from "react"
import SkyLight from 'react-skylight'
import Actions from "./actions.jsx"
import PictureStore from "./picturestore.jsx"
import io from "socket.io-client"

export default class Picture extends React.Component {
    constructor() {
        super()
        this.running = true;
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
        // TODO register all components
        socket.on("connect", () => socket.emit("register", ["pump1", "conveyor1"]))
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
