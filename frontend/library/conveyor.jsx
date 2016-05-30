import React from "react"
import Base from "../runtime/base.jsx"

export default class Conveyor extends Base.Component {
    constructor() {
        super({ running : false })
    }

    content() {
        return (
            <g>
                <rect width="50" height="20" stroke="green" stroke-width="4"
                        fill={ this.state.running ? "green" : "grey" }
                />
                <text y="40" height="12" width = "50">{ this.prop("device") }</text>
            </g>
        )
    }
}
