import React from "react"

class ComponentBase extends React.Component {
    render() {
        return (
            <g transform={ "translate(" + this.props.x + ", " + this.props.y + ")" }>
                { this.content() }
            </g>
        )
    }
}

export default ComponentBase