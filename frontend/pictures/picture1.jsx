import React from "react"
import Library from "../library/library.jsx"
import Emes from '../base/emes.jsx'

export default class Picture1 extends Emes.Picture {
    content() {
        return (
            <svg className="app-picture">
                { [...Array(40)].map((x, index) =>
                    <Library.Pump y={ this.getY(index, 30)} x={ this.getX(index) } device={ "pump" + index} key={ "pump" + index}/>
                )}
                { [...Array(40)].map((x, index) =>
                    <Library.Conveyor y={ this.getY(index, 300)} x={ this.getX(index) } device={ "conveyor" + index} key={ "conveyor" + index}/>
                )}
                <Library.Link x="100" y="600" label="Picture 2" target="picture2"/>
            </svg>
        )
    }

    getX(index) {
        return  50 + 80 * (index % 10)
    }

    getY(index, y0) {
        return y0 + Math.floor(index / 10) * 60
    }
}
