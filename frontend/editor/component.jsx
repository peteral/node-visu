import React from "react"
import Actions from "./actions.jsx"

class Component extends React.Component {
    constructor(initialState) {
        super()
        this.state = initialState

        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <g className="component" onClick={ this.handleClick } transform={ "translate(" + this.props.x + ", " + this.props.y + ")" } >
                { this.content() }
            </g>
        )
    }
    
    stateChanged(newState) {
        this.setState(newState)
    }

    content() {
        
    }

    handleClick() {
        Actions.selectSymbol(this)
    }
}

export default Component