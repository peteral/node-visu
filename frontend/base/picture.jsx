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

                <button onClick={ () => this.changeState() }>ChangeState</button>

                <SkyLight hideOnOverlayClicked ref="detail" title={ this.state.detailWindow.device }>
                    { JSON.stringify(this.state.detailWindow.state ) }
                </SkyLight>
            </div>
        )
    }

    componentDidMount() {
        PictureStore.listen(this.showDetail)
        var socket = io()
        socket.on("data", (payload) => Actions.update( { target : payload.device, newState : payload.state } ))
    }

    componentWillUnmount() {
        PictureStore.unlisten(this.showDetail)
    }

    content () {

    }

    changeState() {
        this.running = !this.running
        Actions.update( { target : "pump1", newState : { running : this.running } } )
    }
}
