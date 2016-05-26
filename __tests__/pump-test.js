jest.unmock("../frontend/library/pump.jsx")
jest.unmock("../frontend/base/component.jsx")
jest.unmock("../frontend/base/emes.jsx")
jest.unmock("../frontend/base/actions.jsx")
jest.unmock("../frontend/base/detailstore.jsx")
jest.unmock("../frontend/base/altinstance.jsx")
jest.unmock("alt")

import React from "react"
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Pump from "../frontend/library/pump.jsx"
import DeviceStore from "../frontend/base/devicestore.jsx"

describe('Pump', () => {
    var store
    var comp
    var node

    beforeEach(() => {
        store = jest.fn()
        store.listen = jest.fn()
        
        DeviceStore.mockReturnValue(store)
        comp = TestUtils.renderIntoDocument(<Pump device="dev" x="100" y="50"/>)
    })

    it('has default state not running', () => {
        expect(comp.state.running).toBe(false)
    })

    it('has default circle color grey', () => {
        expect(comp.refs.circle.getAttribute("fill")).toBe("grey")
    })

    it('shows device name', () => {
        expect(comp.refs.text.textContent).toBe("dev")
    })

    it('becomes green when running', () => {
        comp.setState({ running : true })

        expect(comp.refs.circle.getAttribute("fill")).toBe("green")
    })

})
