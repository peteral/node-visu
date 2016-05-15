import React from "react"
import { Pump, Conveyor } from "../library/library.jsx"

class Picture extends React.Component {
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
            }
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

    render() {
        return (
            <div className="app-picture">
                <svg className="app-picture">
                    <Pump x="50" y="50" state={ this.state.pump1 }/>
                    <Conveyor x="200" y="50" state={ this.state.conveyor1 }/>
                </svg>
            </div>
        )
    }
}

export default Picture
