import React from "react"
import Highlight from 'react-highlight'
import ComponentStore from './componentstore.jsx'
import $ from "jquery"

export default class SourceCode extends React.Component {
    constructor() {
        super()
        this.state = { components : [], upload : "none" }
        this.componentsChanged = this.componentsChanged.bind(this)
        this.upload = this.upload.bind(this)
    }

    render() {
        return (
            <div className = "source-code">
                <button onClick={ this.reset }>Reset</button>
                <button className={"upload-" + this.state.upload } onClick={ this.upload }>Upload</button>
                <Highlight className="xml">
                    { this.generate() }
                </Highlight>
            </div>
        )
    }

    reset() {
        location.reload()
    }

    upload() {
        this.setState({ upload : "none" })
        $.post("/upload", {
            picture : this.props.picture,
            content : this.generate()
        }, (data, status) => {
            if (status === "success")
                this.setState({ upload : "success" })
            else
                this.setState({ upload : "failure" })
        })
    }

    componentWillMount() {
        ComponentStore.listen(this.componentsChanged)
    }

    componentWillUnmount() {
        ComponentStore.unlisten(this.componentsChanged)
    }

    componentsChanged(newState) {
        this.setState(newState)
    }

    generate() {
        var result = `<svg>
`

        this.state.components.forEach((component) => {
            result += '  '
            result += component.getSource()
            result += `
`
        })

        result += '</svg>'

        return result
    }
}
