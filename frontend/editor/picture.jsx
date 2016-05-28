import React from "react"
import {AgGridReact} from 'ag-grid-react'
import ReactGridLayoutFixedWidth from 'react-grid-layout'
import { WidthProvider } from 'react-grid-layout'
import SelectedSymbolStore from './selectedsymbolstore.jsx'

const ReactGridLayout = WidthProvider(ReactGridLayoutFixedWidth)

export default class Picture extends React.Component {
    constructor() {
        super()
        this.state = {
            columnDefs: [
                { headerName : "Name", field: "name", width: 150, filter: 'text'},
                { headerName : "Value", field: "value", width: 150, filter: 'text', editable:true }
            ],
            rowData: [
            ]
        }
        this.selectionChanged = this.selectionChanged.bind(this)
        this.cellValueChanged = this.cellValueChanged.bind(this)
    }

    render() {
        return (
            <ReactGridLayout cols={3} rowHeight={1000} width={1200}>
                <div key="picture" _grid={ {x:0, y:0, w:2, h:1, static:true} }>
                    { this.content() }
                </div>
                <div className="ag-fresh" key="properties" _grid={ {x:2, y:0, w:1, h:1, static:true} }>
                    <AgGridReact
                        onCellValueChanged={ this.cellValueChanged }
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                    />
                </div>
            </ReactGridLayout>
        )
    }

    componentDidMount() {
        SelectedSymbolStore.listen(this.selectionChanged)

        window.addEventListener("message", (event) => {
            this.setState(event.data)
        }, false)
    }

    componentWillUnmount() {
        SelectedSymbolStore.unlisten(this.selectionChanged)
    }

    cellValueChanged() {
        this.state.selectedComponent.setState({ props : this.getProps(this.state.rowData) })
    }

    getProps(rowData) {
        var result = {}

        rowData.forEach((row) => {result[row.name] = row.value })

        return result
    }


    content () {
    }

    selectionChanged(component) {
        this.setState({ selectedComponent : component, rowData: this.getRowData(component) })
    }

    getRowData(component) {
        var result = []

        var source = component.props
        if (component.state.props)
            source = component.state.props

        Object.keys(source).forEach((key) => { result.push({ name : key, value : source[key]}) })

        return result
    }
}
