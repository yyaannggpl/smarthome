let servo = 0
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    servo = smarthome.ReadNoise(AnalogPin.P10)
    if (servo > 70) {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(2000)
    } else {
        pins.servoWritePin(AnalogPin.P1, 100)
        basic.pause(2000)
    }
})
