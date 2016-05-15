import Header from "./header.jsx"
import Picture1 from "./pictures/picture1.jsx"
import ReactDOM from 'react-dom'
import React from "react"

class Page extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header/>
                <Picture1/>
            </div>
        )
    }
}

ReactDOM.render(<Page/>, document.getElementById("page"))