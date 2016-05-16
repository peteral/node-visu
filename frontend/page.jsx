import Header from "./header.jsx"
import ReactDOM from 'react-dom'
import React from "react"
import Tester from "./tester/tester.jsx"

class Page extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="app-picture">
                <Header/>
                <iframe className="app-picture" src="/pictures/picture1.html" />
                <Tester/>
            </div>
        )
    }
}

ReactDOM.render(<Page/>, document.getElementById("page"))