jest.unmock("../frontend/app/header.jsx")

import React from "react"
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Header from "../frontend/app/header.jsx"

describe('Header', () => {
    it('shows picture name', () => {
        const header = TestUtils.renderIntoDocument(<Header picture="picture" mode="mode"/>)

        const headerNode = ReactDOM.findDOMNode(header)

        expect(headerNode.textContent).toEqual('picture (mode)')
    })
})