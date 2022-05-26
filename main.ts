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
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.showString("" + (input.compassHeading()))
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
