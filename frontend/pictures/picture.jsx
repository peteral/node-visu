import React from "react"
import { Pump, Conveyor } from "../library/library.jsx"
import SkyLight from 'react-skylight'

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
            },
            detailWindow : {}
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

    showDetail(componentState) {
        this.setState({ detailWindow : componentState})
        this.refs.detail.show()
    }

    render() {
        return (
            <div className="app-picture">
                <svg className="app-picture">
                    <Pump x="50" y="50" state={ this.state.pump1 }/>
                    <Conveyor x="200" y="50" state={ this.state.conveyor1 }/>
                </svg>
                <button onClick={ (componentState) => this.showDetail( this.state.pump1 ) }>Open Modal</button>

                <SkyLight hideOnOverlayClicked ref="detail" title={this.state.detailWindow.name}>
                    { JSON.stringify(this.state.detailWindow ) }
                </SkyLight>
            </div>
        )
    }
}

export default Picture
