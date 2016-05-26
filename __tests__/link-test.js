jest.unmock("../frontend/library/link.jsx")
jest.unmock("../frontend/base/component.jsx")
jest.unmock("../frontend/base/emes.jsx")
jest.unmock("../frontend/base/actions.jsx")
jest.unmock("../frontend/base/detailstore.jsx")
jest.unmock("../frontend/base/altinstance.jsx")
jest.unmock("alt")

import React from "react"
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Link from "../frontend/library/link.jsx"
import DeviceStore from "../frontend/base/devicestore.jsx"

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
        expect(node.getElementsByTagName("text")[0].textContent).toBe("Go to picture 1")
    })

    it('sends window message on click', () => {
        spyOn(window.parent, 'postMessage')

        TestUtils.Simulate.click(node)

        expect(window.parent.postMessage).toHaveBeenCalledWith({picture: "picture1"}, "*")
    })
})