import React from "react"
import SkyLight from 'react-skylight'
import Actions from "./Actions.jsx"


export default class Picture extends React.Component {
    constructor() {
        super()
        this.running = true;
        this.showDetail = this.showDetail.bind(this)
    }

    showDetail(componentState) {
        this.setState({ detailWindow : componentState})
        this.refs.detail.show()
    }

    render() {
        return (
            <div className="app-picture">
                { this.content() }

                <button onClick={ () => this.showDetail( { name : "TODO"} ) }>Open Modal</button>
                <button onClick={ () => this.changeState() }>ChangeState</button>

                <SkyLight hideOnOverlayClicked ref="detail" title="TODO">
                    TODO
                </SkyLight>
            </div>
        )
    }


    content () {

    }

    changeState() {
        this.running = !this.running
        Actions.update( { device : "pump1", newState : { running : this.running } } )
    }
}
