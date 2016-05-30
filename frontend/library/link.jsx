import React from "react"
import Base from "../runtime/base.jsx"

export default class Link extends Base.Component {
    constructor() {
        super({ running : false })
        this.handleClick = this.handleClick.bind(this)
    }

    content() {
        return (
            <g>
                <text ref="text" className="link" y="0" height="12" width = "100">{ this.prop("label") }</text>
            </g>
        )
    }

    handleClick() {
        window.parent.postMessage({ picture : this.prop("target") }, "*")
    }
}

