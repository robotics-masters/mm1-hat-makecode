input.button.onEvent(ButtonEvent.Down, function () {
    // show next colour on all pixels
    strip.setAll(list[index % 3])
    index = index + 1
})
let index = 0
let list: number[] = []
let strip: light.NeoPixelStrip = null
serial.redirect(pins.PI_TX, pins.PI_RX, BaudRate.BaudRate9600)
// mount an external Neopixel strip on pin NEOPIXEL
//
//
//
//
//
//
// with 3
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// RGB pixels
strip = light.createStrip(pins.NEOPIXEL, 3)
list = [255, 65280, 16711680]
