import AltInstance    from '../alt/altinstance.jsx'
import Actions        from './actions.jsx'

class ModeStore {
    constructor() {
        this.name = name
        this.state = {}

        this.bindListeners({
            changeMode : Actions.changeMode
        })
    }

    changeMode(payload) {
        return this.setState(payload)
    }
}

export default AltInstance.createStore(ModeStore)
