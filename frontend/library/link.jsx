import React from "react"
import Emes from "../base/emes.jsx"

export default class Link extends Emes.Component {
    constructor() {
        super({ running : false })
        this.handleClick = this.handleClick.bind(this)
    }

    content() {
        return (
            <g>
                <text className="link" y="0" height="12" width = "100">{ this.props.label }</text>
            </g>
        )
    }

    handleClick() {
        Emes.Actions.goto({ picture : this.props.target })
    }
}

