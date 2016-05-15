import AltInstance    from './AltInstance.jsx'
import Actions        from './Actions.jsx'

class OneDeviceStore {
    constructor(name) {
        this.name = name
        this.state = {}

        this.bindListeners({
            update : Actions.update
        })
    }

    update(payload) {
        if (payload.device === this.name )
            return this.setState(payload.newState)
    }
}

let stores =  {}

export default function store(storeName) {
    var result = stores[storeName]

    if (result === undefined ) {
        result = AltInstance.createStore(OneDeviceStore, "store-" + storeName, storeName)

        stores[storeName] = result
    }

    return result
}


