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
        DeviceStore.listen(this.stateChanged)
    }

    componentWillUnmount() {
        DeviceStore.unlisten(this.stateChanged)
    }

    stateChanged(newState) {
        this.setState(newState[this.props.device])
    }

    content() {
        
    }
}

export default Component