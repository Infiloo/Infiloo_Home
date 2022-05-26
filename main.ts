input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . #
        . # . # .
        # # . . .
        . # . # .
        . . . . #
        `)
    basic.showString("" + (music.volume()))
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
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showString("" + (input.lightLevel()))
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . . . #
        . # . # .
        # # . . .
        . # . # .
        . . . . #
        `)
    music.setVolume(127)
    basic.showString("" + (music.volume()))
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
    basic.showLeds(`
        # . . . #
        . # . # .
        # # # . .
        . # . # .
        # . . . #
        `)
    music.setVolume(0)
    basic.showString("" + (music.volume()))
})
input.calibrateCompass()
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
