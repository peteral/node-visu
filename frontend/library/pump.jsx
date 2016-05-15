import React from "react"
import Emes from "../base/emes.jsx"

export default class Pump extends Emes.Component {
    constructor() {
        super({ running : false })
    }

    content() {
        return (
            <g>
                <circle cx="20" cy="20" r="20" stroke="green" stroke-width="4"
                        fill={ this.state.running ? "green" : "grey" }
                />

                <text y="55" height="12" width = "50">{ this.props.device }</text>
            </g>
        )
    }
}

