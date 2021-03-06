import React from "react"
import DeviceStore from "./devicestore.jsx"
import Actions from "./actions.jsx"
import DeviceRegistry from "./deviceregistry.jsx"

class Component extends React.Component {
    constructor(initialState) {
        super()
        this.state = initialState

        this.stateChanged = this.stateChanged.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <g className="component" onClick={ this.handleClick } transform={ "translate(" + this.prop("x") + ", " + this.prop("y") + ")" } >
                { this.content() }
            </g>
        )
    }

    prop(key) {
        return this.props[key]
    }

    componentWillMount() {
        DeviceRegistry.add( this.props.device )
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

    handleClick() {
        Actions.detail( { device : this.prop("device"), state : this.state })
    }

    content() {
        
    }
}

export default Component