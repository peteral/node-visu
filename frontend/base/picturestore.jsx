import AltInstance    from './altinstance.jsx'
import Actions        from './actions.jsx'

class PictureStore {
    constructor() {
        this.name = name
        this.state = {}

        this.bindListeners({
            detail : Actions.detail
        })
    }

    detail(payload) {
        return this.setState(payload)
    }
}

export default AltInstance.createStore(PictureStore)
