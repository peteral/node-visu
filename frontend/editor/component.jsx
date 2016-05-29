import React from "react"
import Actions from "./actions.jsx"

class Component extends React.Component {
    constructor(initialState) {
        super()
        this.state = initialState
        this.state.selected = false

        this.handleClickEditor = this.handleClickEditor.bind(this)
        this.prop = this.prop.bind(this)
        this.getSource = this.getSource.bind(this)
    }

    render() {
        return (
            <g className="component"
               onClick={ this.handleClickEditor }
               transform={ "translate(" + this.prop("x") + ", " + this.prop("y") + ")" }
               fill={(this.state.selected) ? "red" : ""}
            >
                { this.content() }
            </g>
        )
    }

    stateChanged(newState) {
        this.setState(newState)
    }

    content() {
        
    }

    componentDidMount() {
        Actions.updateComponent( this )
    }

    getSource() {
        var propString = ""
        Object.keys(this.props).forEach((key) => { propString += " " + key + "='" + this.prop(key) + "'"})
        return '<' + this.constructor.name + propString + '/>'
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