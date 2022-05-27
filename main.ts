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
    images.createBigImage(`
        # . . . # . . . # .
        . # . # . # . # . #
        . . # . . . # . . .
        . # . # . # . # . #
        # . . . # . . . # .
        `).scrollImage(1, 200)
    images.createBigImage(`
        # . . . # . . . # .
        . # . # . # . # . #
        . . # . . . # . . .
        . # . # . # . # . #
        # . . . # . . . # .
        `).scrollImage(1, 200)
    images.createBigImage(`
        # . . . # . . . # .
        . # . # . # . # . #
        . . # . . . # . . .
        . # . # . # . # . #
        # . . . # . . . # .
        `).scrollImage(1, 200)
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    images.createBigImage(`
        . # . . . . . # . #
        . # . # . # . # . #
        # # # # # # # # # #
        # . # . # . # . # .
        . . . . # . . . # .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . # . . . . . # . #
        . # . # . # . # . #
        # # # # # # # # # #
        # . # . # . # . # .
        . . . . # . . . # .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . # . . . . . # . #
        . # . # . # . # . #
        # # # # # # # # # #
        # . # . # . # . # .
        . . . . # . . . # .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . # . . . . . # . #
        . # . # . # . # . #
        # # # # # # # # # #
        # . # . # . # . # .
        . . . . # . . . # .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . # . . . . . # . #
        . # . # . # . # . #
        # # # # # # # # # #
        # . # . # . # . # .
        . . . . # . . . # .
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
basic.forever(function () {
    if (input.soundLevel() == "Hallo".length) {
        basic.showString("Hallo! Du")
    } else if (input.soundLevel() == "Tschüss".length) {
        basic.showString("Tschüss")
    } else if (input.soundLevel() == "Was ist dein Name ".length) {
        basic.showString("micro:bit")
    } else {
    	
    }
})
