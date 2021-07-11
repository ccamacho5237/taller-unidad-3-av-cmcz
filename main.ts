function movimiento () {
    if (carril < 0 || carril > 4) {
        basic.showIcon(IconNames.Surprised)
        carril = 2
        index = 0
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(carril, index)
        basic.pause(500)
        basic.clearScreen()
    }
}
let index = 0
let carril = 0
carril = 2
basic.forever(function () {
    movimiento()
    if (input.buttonIsPressed(Button.A)) {
        carril += -1
        movimiento()
    } else if (input.buttonIsPressed(Button.B)) {
        carril += 1
        movimiento()
    }
})
