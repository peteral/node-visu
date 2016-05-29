import React from "react"
import {AgGridReact} from 'ag-grid-react'
import ReactGridLayoutFixedWidth from 'react-grid-layout'
import { WidthProvider } from 'react-grid-layout'
import SelectedSymbolStore from './selectedsymbolstore.jsx'
import SourceCode from './sourcecode.jsx'
import Actions from './actions.jsx'

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-dark.css'
import 'highlight.js/styles/darkula.css'

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
            <ReactGridLayout cols={3} rowHeight={350} width={1200}>
                <div key="picture" _grid={ {x:0, y:0, w:2, h:2, static:true} }>
                    { this.content() }
                </div>
                <div className="ag-dark" key="properties" _grid={ {x:2, y:0, w:1, h:1, static:true} }>
                    <AgGridReact
                        onCellValueChanged={ this.cellValueChanged }
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                    />
                </div>
                <div key="sourceCode"  _grid={ {x:2, y:1, w:1, h:1, static:true } }>
                    <SourceCode picture={ this.props.name }/>
                </div>
            </ReactGridLayout>
        )
    }

    componentDidMount() {
        SelectedSymbolStore.listen(this.selectionChanged)
    }

    componentWillUnmount() {
        SelectedSymbolStore.unlisten(this.selectionChanged)
    }

    cellValueChanged() {
        this.state.selectedComponent.setState({ props : this.getProps(this.state.rowData) })
        Actions.updateComponent(this.state.selectedComponent)
    }

    getProps(rowData) {
        var result = {}

        rowData.forEach((row) => {result[row.name] = row.value })

        return result
    }


    content () {
    }

    selectionChanged(component) {
        if (this.state.selectedComponent !== undefined)
            this.state.selectedComponent.setState({ selected : false})
        component.setState({ selected : true})
        
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
