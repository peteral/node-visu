import Header from "./header.jsx"
import ReactDOM from 'react-dom'
import React from "react"
import Tester from "./tester/tester.jsx"
import PageStore from "./pagestore.jsx"

class Page extends React.Component {

    constructor() {
        super()
        this.state = { picture : "picture1"}
        this.goto = this.goto.bind(this)
    }

    render() {
        return (
            <div className="app-picture">
                <Header picture={ this.state.picture }/>
                <iframe className="app-picture" src={ "/picture?picture=" + this.state.picture } />
                <Tester/>
            </div>
        )
    }

    componentDidMount() {
        PageStore.listen(this.goto)
    }

    componentWillUnmount() {
        PageStore.unlisten(this.goto)
    }

    goto(data) {
        this.setState({ picture : data.picture})
    }
}

ReactDOM.render(<Page/>, document.getElementById("page"))