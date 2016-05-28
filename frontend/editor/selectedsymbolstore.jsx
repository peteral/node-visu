import AltInstance    from '../alt/altinstance.jsx'
import Actions        from './actions.jsx'

class SelectedSymbolStore {
    constructor() {
        this.name = name
        this.state = {}

        this.bindListeners({
            selectSymbol : Actions.selectSymbol
        })
    }

    selectSymbol(component) {
        return this.setState(component)
    }
}

export default AltInstance.createStore(SelectedSymbolStore)
