#!/usr/bin/python

import sys
import Adafruit_DHT
import time
import urllib2
import json

while 1:
    humidity, temperature = Adafruit_DHT.read_retry(11, 22)
    # print (temperature)
    # print (humidity)

    data = {"temperatura":temperature, "umidade":humidity}

    req = urllib2.Request('http://138.68.54.156:1510/api/v1/dht11')
    req.add_header('Content-Type', 'application/json')

    response = urllib2.urlopen(req, json.dumps(data))

    time.sleep(30)
