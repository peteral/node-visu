import AltInstance    from '../alt/altinstance.jsx'
import Actions        from './actions.jsx'

class ComponentStore {
    constructor() {
        this.name = name
        this.state = { components : []}

        this.bindListeners({
            updateComponent : Actions.updateComponent
        })
    }

    updateComponent(component) {
        if (this.state.components.indexOf(component) < 0)
            this.state.components.push(component)

        return this.setState(this.state)
    }
}

export default AltInstance.createStore(ComponentStore)
