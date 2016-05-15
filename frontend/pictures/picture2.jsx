import React from "react"
import Library from "../library/library.jsx"
import Emes from '../base/emes.jsx'

export default class Picture1 extends Emes.Picture {
    content() {
        return (
            <svg width="100%" height="100%">
                <Library.Pump y="30" x="50" device="pump1"/>
                <Library.Conveyor y="100" x="50" device="conveyor1" />
            </svg>
        )
    }
}