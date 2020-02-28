serial.redirect(pins.PI_TX, pins.PI_RX, BaudRate.BaudRate9600)
forever(function () {
    serial.writeValue("x", pins.i2cReadRegister(104, 117))
    pause(2000)
})
