import React from "react"
import Emes from "../runtime/emes.jsx"

export default class Link extends Emes.Component {
    constructor() {
        super({ running : false })
        this.handleClick = this.handleClick.bind(this)
    }

    content() {
        return (
            <g>
                <text ref="text" className="link" y="0" height="12" width = "100">{ this.props.label }</text>
            </g>
        )
    }

    handleClick() {
        window.parent.postMessage({ picture : this.props.target }, "*")
    }
}

