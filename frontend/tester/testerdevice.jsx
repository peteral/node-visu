import React from "react"
import Actions from "./testeractions.jsx"

class TesterDevice extends React.Component {
    constructor() {
        super()

        this.state = { checked : false }
    }

    render() {
        return (
            <button onClick={ () => this.handleClick() }>
                { this.props.name }
            </button>
        )
    }

    handleClick() {
        var newState = !this.state.checked
        this.setState({ checked : newState })
        Actions.send( { device : this.props.name, state : { running : newState } })
    }
}

export default TesterDevice
