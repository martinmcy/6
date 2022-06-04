function stop () {
	
}
let item = 0
let anglre = 90
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        anglre += 10
        pins.servoWritePin(AnalogPin.P1, anglre)
        basic.pause(50)
    }
})
