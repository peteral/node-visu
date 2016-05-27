jest.unmock("../frontend/base/picture.jsx")
jest.unmock('react-skylight')
jest.unmock("../frontend/base/altinstance.jsx")
jest.unmock("alt")

import React from "react"
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Picture from "../frontend/base/picture.jsx"
import PictureStore from "../frontend/base/picturestore.jsx"
import io from "socket.io-client"

describe('Picture', () => {
    var comp
    var node
    var socket
    beforeEach(() => {
        PictureStore.listen = jest.fn()
        socket = { on : jest.fn() }
        io.mockReturnValue(socket)
        
        comp = TestUtils.renderIntoDocument(<Picture/>)
        node = ReactDOM.findDOMNode(comp)
    })

    it('listens to picture store', () => {
        expect(PictureStore.listen.mock.calls[0][0]).toBe(comp.showDetail)
    })
})
