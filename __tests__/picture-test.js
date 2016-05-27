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
import DeviceRegistry from "../frontend/base/deviceregistry.jsx"
import Actions from "../frontend/base/actions.jsx"

describe('Picture', () => {
    var comp
    var node
    var socket
    beforeEach(() => {
        PictureStore.listen = jest.fn()
        socket = { on : jest.fn(), emit : jest.fn() }
        io.mockReturnValue(socket)
        Actions.update = jest.fn()

        comp = TestUtils.renderIntoDocument(<Picture/>)
        node = ReactDOM.findDOMNode(comp)
    })

    it('listens to picture store', () => {
        expect(PictureStore.listen.mock.calls[0][0]).toBe(comp.showDetail)
    })

    it('can register all devices', () => {
        DeviceRegistry.getAll.mockReturnValue(["dev1", "dev2"])

        comp.registerDevices(socket)
        
        expect(socket.emit.mock.calls[0]).toEqual(["register", ["dev1", "dev2"]])
    })

    it('generates update actions for all devices when data message comes', () => {
        comp.update([
            {device: "dev1", state : "state1"},
            {device: "dev2", state : "state2"}
        ])

        expect(Actions.update.mock.calls).toEqual([
            [{ target : "dev1", newState : "state1"}],
            [{ target : "dev2", newState : "state2"}]
        ])
    })
})
