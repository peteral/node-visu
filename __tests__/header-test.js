jest.unmock("../frontend/header.jsx")

import React from "react"
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Header from "../frontend/header.jsx"

describe('Header', () => {
    it('shows picture name', () => {
        const header = TestUtils.renderIntoDocument(<Header picture="picture"/>)

        const headerNode = ReactDOM.findDOMNode(header)

        expect(headerNode.textContent).toEqual('Current picture: picture')
    })
})