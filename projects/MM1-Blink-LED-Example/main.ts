forever(function () {
    pins.LED.digitalWrite(false)
    pause(1000)
    pins.LED.digitalWrite(true)
    pause(1000)
})
