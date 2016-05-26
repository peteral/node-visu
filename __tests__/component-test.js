jest.unmock("../frontend/base/component.jsx")
jest.unmock("../frontend/base/actions.jsx")
jest.unmock("../frontend/base/detailstore.jsx")
jest.unmock("../frontend/base/altinstance.jsx")
jest.unmock("alt")

import React from "react"
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Component from "../frontend/base/component.jsx"
import DeviceStore from "../frontend/base/devicestore.jsx"
import DeviceRegistry from "../frontend/base/deviceregistry.jsx"
import DetailStore from "../frontend/base/detailstore.jsx"

describe('Component', () => {
    var store
    var comp
    var node

    beforeEach(() => {
        store = jest.fn()
        store.listen = jest.fn()
        DeviceStore.mockReturnValue(store)

        comp = TestUtils.renderIntoDocument(<Component device="dev" x="100" y="50"/>)
        node = ReactDOM.findDOMNode(comp)
    })

    it('translates to correct position', () => {
        expect(node.getAttribute("transform")).toEqual('translate(100, 50)')
    })

    it('registers device in device registry', () => {
        expect(DeviceRegistry.add.mock.calls[0][0]).toBe('dev')
    })

    it('listens to device store', () => {
        expect(store.listen.mock.calls[0][0]).toBe(comp.stateChanged)
    })

    it('sends detail action on click', () => {
        TestUtils.Simulate.click(node)

        expect(DetailStore.getState().device).toBe('dev')
    })
})
