import React from "react"
import Actions from "./actions.jsx"

class Header extends React.Component {
    constructor() {
        super()
        this.switchMode = this.switchMode.bind(this)
    }
    
    render() {
        return (
            <div className="app-header">
                { this.props.picture } (<a className="switchMode" onClick={ this.switchMode }>{ this.props.mode }</a>)
            </div>
        )
    }

    switchMode() {
        Actions.changeMode({ mode : (this.props.mode === "runtime") ? "editor" : "runtime"})
    }
}

export default Header
