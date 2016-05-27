import React from "react"

export default class Picture extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="app-picture">
                { this.content() }
            </div>
        )
    }

    content () {
    }
}
