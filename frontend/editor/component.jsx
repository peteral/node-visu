import React from "react"

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
        
    }
}

export default Component