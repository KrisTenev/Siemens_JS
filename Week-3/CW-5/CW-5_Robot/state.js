const SystemObject = {
    gasCount : 90,
    oxygenCount : 168,
    isSystemTurnOn : false,

    isTurnOn() {
        return SystemObject.isSystemTurnOn;
    },

    isTurnOff() {
        return !SystemObject.isSystemTurnOn;
    },

    turnOn() {
        SystemObject.isSystemTurnOn = true;
    },

    turnOff() {
        SystemObject.isSystemTurnOn = false;
    },

    isAlive() {
        return SystemObject.gasCount > 0 &&
                SystemObject.oxygenCount > 0;
    }
}