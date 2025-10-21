// Mover a la izquierda
input.onButtonPressed(Button.A, function () {
    if (posicion_grua > 10) {
        posicion_grua += 0 - 10
        pins.servoWritePin(AnalogPin.P0, posicion_grua)
        basic.showArrow(ArrowNames.West)
    }
})
// Bajar el gancho
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Diamond)
    for (let i = 90; i <= 160; i += 5) {
        pins.servoWritePin(AnalogPin.P1, i)
        basic.pause(50)
    }
for (let j = 160; j >= 90; j -= 5) {
        pins.servoWritePin(AnalogPin.P1, j)
        basic.pause(50)
    }
basic.showIcon(IconNames.Happy)
})
// Mover a la derecha
input.onButtonPressed(Button.B, function () {
    if (posicion_grua < 170) {
        posicion_grua += 10
        pins.servoWritePin(AnalogPin.P0, posicion_grua)
        basic.showArrow(ArrowNames.East)
    }
})
let posicion_grua = 0
posicion_grua = 90
let posicion_gancho = 90
// Posición inicial
pins.servoWritePin(AnalogPin.P0, posicion_grua)
pins.servoWritePin(AnalogPin.P1, posicion_gancho)
// Mostrar ícono de inicio
basic.showIcon(IconNames.Happy)
