let singleton = Symbol()
let singletonEnforcer = Symbol()

export default class DeviceRegistry {
    constructor(enforcer) {
        if (enforcer != singletonEnforcer)
            throw "Cannot construct singleton!"

        this.devices = []
    }

    static get instance() {
        if (!this[singleton])
            this[singleton] = new DeviceRegistry(singletonEnforcer)

        return this[singleton]
    }

    getAll() {
        return this.devices
    }

    add(device) {
        this.devices.push(device)
    }
}