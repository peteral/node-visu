import React from "react"
import Library from "../library/library.jsx"
import Emes from '../runtime/emes.jsx'
import ReactDOM from 'react-dom'

export default class Picture extends Emes.Picture {
    content() {
        return (
            <svg className="app-picture">
                <Library.Pump y="30" x="50" device="pump1"/>
                <Library.Conveyor y="100" x="50" device="conveyor1" />
                <Library.Link y="200" x="50" label="Picture 1" target="picture1"/>
            </svg>
        )
    }
}

ReactDOM.render(<Picture/>, document.getElementById("player"))