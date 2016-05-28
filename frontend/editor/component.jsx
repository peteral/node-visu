import React from "react"
import Actions from "./actions.jsx"

class Component extends React.Component {
    constructor(initialState) {
        super()
        this.state = initialState

        this.handleClickEditor = this.handleClickEditor.bind(this)
        this.prop = this.prop.bind(this)
    }

    render() {
        return (
            <g className="component" onClick={ this.handleClickEditor } transform={ "translate(" + this.prop("x") + ", " + this.prop("y") + ")" } >
                { this.content() }
            </g>
        )
    }

    stateChanged(newState) {
        this.setState(newState)
    }

    content() {
        
    }

    handleClickEditor() {
        Actions.selectSymbol(this)
    }

    prop(key) {
        if (this.state.props)
            return this.state.props[key]

        return this.props[key]
    }
}

export default Component