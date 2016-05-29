import Header from "./header.jsx"
import ReactDOM from 'react-dom'
import React from "react"
import ModeStore from "./modestore.jsx"

class Page extends React.Component {

    constructor() {
        super()
        this.state = { picture : "picture1", mode : "runtime"}
        this.modeChanged = this.modeChanged.bind(this)
    }

    render() {
        return (
            <div className="page">
                <Header picture={ this.state.picture } mode={ this.state.mode }/>
                <iframe className="picture-iframe" src={ "/" + this.state.mode + "?picture=" + this.state.picture } />
            </div>
        )
    }

    componentWillUnmount() {
        ModeStore.unlisten(this.modeChanged)
    }

    componentDidMount() {
        ModeStore.listen(this.modeChanged)

        window.addEventListener("message", (event) => {
            this.setState(event.data)
        }, false)
    }

    modeChanged(payload) {
        this.setState( payload )
    }
}

ReactDOM.render(<Page/>, document.getElementById("page"))