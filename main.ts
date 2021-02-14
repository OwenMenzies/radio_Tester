input.onButtonPressed(Button.A, function () {
    radio.sendString("Potato")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("1")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("1")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("1")
})
radio.setGroup(12)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
})
