import React from "react"
import Library from "../library/library.jsx"
import Emes from '../base/emes.jsx'

export default class Picture1 extends Emes.Picture {
    content() {
        return (
            <svg>
                <Library.Pump x="50" y="50" device="pump1"/>
                <Library.Conveyor x="200" y="50" device="conveyor1"/>
            </svg>
        )
    }
}
