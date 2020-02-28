#!/usr/bin/python

import serial
from time import sleep

print("serial openning")
ser = serial.Serial('/dev/ttyS0', 9600)
index = 0

print("waiting for data")
while True:
    sleep(0.25)
    #ser.write(b'hello!\n')
    data = ser.read(4)
    if data is not None:
        print(index, data)
        index += 1
ser.close()
