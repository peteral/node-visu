import React from "react"
import Store from "./store.jsx"

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
        Store(this.props.device).listen(this.stateChanged)
    }

    componentWillUnmount() {
        Store(this.props.device).unlisten(this.stateChanged)
    }

    stateChanged(newState) {
        this.setState(newState)
    }

    content() {
        
    }
}

export default Component