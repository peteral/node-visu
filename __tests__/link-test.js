jest.unmock("../frontend/library/link.jsx")
jest.unmock("../frontend/runtime/component.jsx")
jest.unmock("../frontend/runtime/base.jsx")
jest.unmock("../frontend/runtime/actions.jsx")
jest.unmock("../frontend/runtime/picturestore.jsx")
jest.unmock("../frontend/alt/altinstance.jsx")
jest.unmock("alt")

import React from "react"
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Link from "../frontend/library/link.jsx"
import DeviceStore from "../frontend/runtime/devicestore.jsx"

describe('Link', () => {
    var store
    var comp
    var node

    beforeEach(() => {
        store = jest.fn()
        store.listen = jest.fn()
        
        DeviceStore.mockReturnValue(store)
        comp = TestUtils.renderIntoDocument(<Link label="Go to picture 1" target="picture1" x="100" y="50"/>)
        node = ReactDOM.findDOMNode(comp)
    })

    it('shows label', () => {
        expect(comp.refs.text.textContent).toBe("Go to picture 1")
    })

    it('sends window message on click', () => {
        spyOn(window.parent, 'postMessage')

        TestUtils.Simulate.click(node)

        expect(window.parent.postMessage).toHaveBeenCalledWith({picture: "picture1"}, "*")
    })
})
