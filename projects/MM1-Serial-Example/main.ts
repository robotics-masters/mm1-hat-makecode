forever(function () {
    pause(500)
    pins.LED.digitalWrite(true)
    serial.redirect(pins.GPS_TX, pins.GPS_RX, BaudRate.BaudRate9600)
    serial.writeLine("456")
    pause(500)
    pins.LED.digitalWrite(false)
})
