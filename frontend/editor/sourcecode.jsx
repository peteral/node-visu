import React from "react"
import Highlight from 'react-highlight'
import ComponentStore from './componentstore.jsx'

export default class SourceCode extends React.Component {
    constructor() {
        super()
        this.state = { components : [] }
        this.componentsChanged = this.componentsChanged.bind(this)
    }

    render() {
        return (
            <div className = "source-code">
                <Highlight className="xml">
                    { this.generate() }
                </Highlight>
            </div>
        )
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
