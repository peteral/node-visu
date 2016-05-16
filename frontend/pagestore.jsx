import AltInstance    from './base/altinstance.jsx'
import Actions        from './base/actions.jsx'

class PageStore {
    constructor() {
        this.name = name
        this.state = {}

        this.bindListeners({
            goto : Actions.goto
        })
    }

    goto(payload) {
        return this.setState(payload)
    }
}

export default AltInstance.createStore(PageStore)
