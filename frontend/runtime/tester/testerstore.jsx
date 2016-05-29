import AltInstance    from '../../alt/altinstance.jsx'
import Actions        from './testeractions.jsx'

class TesterStore {
    constructor() {
        this.name = name
        this.state = {}

        this.bindListeners({
            send : Actions.send
        })
    }

    send(payload) {
        return this.setState(payload)
    }
}

export default AltInstance.createStore(TesterStore)
