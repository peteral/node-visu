import React from "react"
import Base from "../runtime/base.jsx"

export default class Pump extends Base.Component {
    constructor() {
        super({ running : false })
    }

    content() {
        return (
            <g>
                <circle ref="circle" cx="20" cy="20" r="20" stroke="green" stroke-width="4"
                        fill={ this.state.running ? "green" : "grey" }
                />

                <text ref="text" y="55" height="12" width = "50">{ this.prop("device") }</text>
            </g>
        )
    }
}

