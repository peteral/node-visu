import ComponentBase from "../base/componentbase.jsx"
import React from "react"

class Conveyor extends ComponentBase {
    content() {
        return (
            <g>
                <rect width="50" height="20" stroke="green" stroke-width="4"
                        fill={ this.props.state.running ? "green" : "grey" }
                />
                <text y="40" height="12" width = "50">{ this.props.state.name }</text>
            </g>
        )
    }
}

export default Conveyor