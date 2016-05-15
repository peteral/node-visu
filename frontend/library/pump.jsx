import ComponentBase from "../base/componentbase.jsx"
import React from "react"

class Pump extends ComponentBase {
    content() {
        return (
            <g>
                <circle cx="20" cy="20" r="20" stroke="green" stroke-width="4"
                        fill={ this.props.state.running ? "green" : "grey" }
                />

                <text y="55" height="12" width = "50">{ this.props.state.name }</text>
            </g>
        )
    }
}

export default Pump
