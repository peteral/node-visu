import ComponentBase from "./componentbase.jsx"
import React from "react"

class Pump extends ComponentBase {
    content() {
        return (
                <circle cx="40" cy="40" r="40" stroke="green" stroke-width="4"
                        fill={ this.props.state.running ? "green" : "grey" }
                />
        )
    }
}

export default Pump
