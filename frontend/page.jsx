import Header from "./header.jsx"
import ReactDOM from 'react-dom'
import React from "react"
import Tester from "./tester/tester.jsx"

class Page extends React.Component {

    constructor() {
        super()
        this.state = { picture : "picture1", mode : "runtime"}
    }

    render() {
        return (
            <div className="app-picture">
                <Header picture={ this.state.picture } mode={ this.state.mode }/>
                <iframe className="app-picture" src={ "/runtime?picture=" + this.state.picture } />
                <Tester/>
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener("message", (event) => {
            this.setState(event.data)
        }, false)
    }
}

ReactDOM.render(<Page/>, document.getElementById("page"))