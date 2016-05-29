import React from "react"
import Emes from '../runtime/emes.jsx'
import ReactDOM from 'react-dom'

import Library from "../library/library.jsx"
var { Pump, Conveyor, Link } = Library

export default class Picture extends Emes.Picture {
    content() {
        return (
            <svg>
                <Pump y="30" x="50" device="pump1"/>
                <Conveyor y="100" x="50" device="conveyor1" />
                <Link y="200" x="50" label="Picture 1" target="picture1"/>
            </svg>
        )
    }
}

ReactDOM.render(<Picture name="picture2"/>, document.getElementById("player"))