import React from "react"
import Library from "../library/library.jsx"
import Emes from '../base/emes.jsx'

export default class Picture1 extends Emes.Picture {
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
