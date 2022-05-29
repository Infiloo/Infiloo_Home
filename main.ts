input.onPinPressed(TouchPin.P0, function () {
    images.createBigImage(`
        . . . . . . . . # #
        . . . . . . # # . .
        . . . . # # . . . .
        . . # # . . . . . .
        # # . . . . . . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        # # . . . . . . . .
        . . # # . . . . . .
        . . . . # # . . . .
        . . . . . . # # . .
        . . . . . . . . # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . # # . . # # . .
        # # . . # # . . # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . # # . . # # . .
        # # . . # # . . # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . # # . . # # . .
        # # # # # # # # # #
        `).scrollImage(1, 200)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    basic.showString("" + (input.temperature()))
    basic.showLeds(`
        . . . . .
        . # # # #
        . . . . .
        # # # . .
        . . . . #
        `)
    basic.showString("" + (input.acceleration(Dimension.X)))
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.showString("" + (input.runningTimeMicros()))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . # #
        # # . # #
        # # . . .
        `)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . # # . . . .
        . . . # . . # . . .
        . . # . . . . # . .
        . # . . . . . . # .
        # . . . . . . . . #
        `).scrollImage(1, 200)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . #
        . . . . . . . . . #
        . . . . # # . . # #
        . # . # # # # . # #
        # # # # # # # # # #
        `).scrollImage(1, 200)
})
input.onPinPressed(TouchPin.P1, function () {
    images.createBigImage(`
        . . . . . . . . # #
        . . . . . . # # . .
        . . . . # # . . . .
        . . # # . . . . . .
        # # . . . . . . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        # # . . . . . . . .
        . . # # . . . . . .
        . . . . # # . . . .
        . . . . . . # # . .
        . . . . . . . . # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . # # . . # # . .
        # # . . # # . . # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . # # . . # # . .
        # # . . # # . . # #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . # # . . # # . .
        # # # # # # # # # #
        `).scrollImage(1, 200)
    basic.clearScreen()
    turtle.setSpeed(1.1111111111111112)
    turtle.home()
    turtle.pen(TurtlePenMode.Down)
    turtle.forward(2)
    turtle.forward(1)
    turtle.turnLeft()
    turtle.forward(2)
    turtle.turnLeft()
    turtle.forward(2)
    turtle.turnLeft()
    turtle.forward(2)
    turtle.turnRight()
    turtle.forward(2)
    turtle.turnRight()
    turtle.forward(2)
    turtle.turnLeft()
    turtle.forward(2)
    turtle.home()
    turtle.pen(TurtlePenMode.Down)
})
music.setBuiltInSpeakerEnabled(true)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    # . . . .
    . # . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    # . # . .
    . # . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . #
    . # . # .
    . . . . .
    `)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
images.createBigImage(`
    . . . . # # . . . .
    . . . # . . # . . .
    . . # . . . . # . .
    . # . . . . . . # .
    # . . . . . . . . #
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . # # . . . .
    . . . # . . # . . .
    . . # . . . . # . .
    . # . . . . . . # .
    # . . . . . . . . #
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    # # # . # # # . # #
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    # . # # # . # # # .
    `).scrollImage(1, 200)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . # . #
    . # . # .
    # . # . #
    # # # # #
    `)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
})
