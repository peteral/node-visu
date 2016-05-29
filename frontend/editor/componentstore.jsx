import AltInstance    from '../alt/altinstance.jsx'
import Actions        from './actions.jsx'

class ComponentStore {
    constructor() {
        this.name = name
        this.state = { components : []}

        this.bindListeners({
            addComponent : Actions.addComponent
        })
    }

    addComponent(component) {
        this.state.components.push(component)
        var newState = this.state
        return this.setState(newState)
    }
}

export default AltInstance.createStore(ComponentStore)
