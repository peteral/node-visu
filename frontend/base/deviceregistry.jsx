let devices = []

export default class DeviceRegistry {

    static getAll() {
        return devices
    }

    static add(device) {
        devices.push(device)
    }
}