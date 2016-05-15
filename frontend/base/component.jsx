import React from "react"
import DeviceStore from "./DeviceStore.jsx"

class Component extends React.Component {
    constructor(initialState) {
        super()
        this.state = initialState

        this.stateChanged = this.stateChanged.bind(this)
    }

    render() {
        return (
            <g transform={ "translate(" + this.props.x + ", " + this.props.y + ")"  }>
                { this.content() }
            </g>
        )
    }

    componentDidMount() {
        DeviceStore(this.props.device).listen(this.stateChanged)
    }

    componentWillUnmount() {
        DeviceStore(this.props.device).unlisten(this.stateChanged)
    }

    stateChanged(newState) {
        this.setState(newState)
    }

    content() {
        
    }
}

export default Component