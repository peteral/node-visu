import AltInstance    from '../alt/altinstance.jsx'
import Actions        from './actions.jsx'

class OneDeviceStore {
    constructor(name) {
        this.name = name
        this.state = {}

        this.bindListeners({
            update : Actions.update
        })
    }

    update(payload) {
        if (payload.target === this.name)
            return this.setState(payload.newState)
    }
}

let stores =  {}

export default function DeviceStore(storeName) {
    var result = stores[storeName]

    if (result === undefined ) {
        result = AltInstance.createStore(OneDeviceStore, "DeviceStore-" + storeName, storeName)

        stores[storeName] = result
    }

    return result
}


