import React from "react"
import Library from "../library/library.jsx"
import Emes from '../base/emes.jsx'

class Picture1 extends Emes.Picture {
    constructor() {
        super()

        this.state = {
            pump1 : {
                name : "Pump 1",
                running: false,
                fault: false
            },
            conveyor1: {
                name : "Conveyor 1",
                running : true
            },
            detailWindow : {} // TODO move to super class
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                pump1 : {
                    name : "Pump 1",
                    running : !this.state.pump1.running,
                    fault : false
                }
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    content() {
        return (
            <svg className="app-picture">
                <Library.Pump x="50" y="50" state={ this.state.pump1 }/>
                <Library.Conveyor x="200" y="50" state={ this.state.conveyor1 }/>
            </svg>
        )
    }
}

export default Picture1
