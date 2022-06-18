function stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
}
let on = 0
let item = 0
let anglre = 90
stop()
basic.forever(function () {
    if (item == 0) {
        if (pins.digitalReadPin(DigitalPin.P8) == 0) {
            if (on == 0) {
                on += 1
                sensors.DDMmotor(
                AnalogPin.P13,
                0,
                AnalogPin.P14,
                60
                )
            } else {
                on = 0
                stop()
            }
        }
        if (pins.digitalReadPin(DigitalPin.P12) == 0) {
            if (on == 0) {
                on += 1
                sensors.DDMmotor(
                AnalogPin.P13,
                0,
                AnalogPin.P14,
                60
                )
            } else {
                on = 0
                stop()
            }
        }
        basic.pause(300)
    } else if (item == 1) {
        if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            sensors.DDMmotor(
            AnalogPin.P15,
            0,
            AnalogPin.P16,
            80
            )
        } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
            sensors.DDMmotor(
            AnalogPin.P15,
            1,
            AnalogPin.P16,
            80
            )
        } else {
            stop()
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        anglre += 10
        pins.servoWritePin(AnalogPin.P1, anglre)
        basic.pause(50)
    }
    if (input.buttonIsPressed(Button.B)) {
        anglre += -10
        pins.servoWritePin(AnalogPin.P1, anglre)
        basic.pause(50)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        stop()
        if (item < 1) {
            anglre += 1
            basic.showIcon(IconNames.Giraffe)
        } else {
            anglre = 0
            basic.showIcon(IconNames.Square)
        }
        basic.pause(500)
    }
})
