import React from "react"

class ComponentBase extends React.Component {
    render() {
        return (
            <g transform={ "translate(" + this.props.x + ", " + this.props.y + ")" }
               onclick={ this.handleClick() }>
                { this.content() }
            </g>
        )
    }

    content() {
        
    }

    handleClick() {

    }
}

export default ComponentBase