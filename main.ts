let Llum = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) && Llum == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        Llum = 1
    }
    if (input.pinIsPressed(TouchPin.P0) && Llum == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Llum = 0
    }
})
