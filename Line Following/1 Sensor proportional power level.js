/*----
The basic idea in this line following program is to increase the power proportionally based on the values from the Light Sensor.

Since the light range for a Light Sensor is 100, we can divide the current light sensor percent by 100 to convert it to a 
portion to be multiplied by the Default Power level. This becomes the power level for Motor B. The difference between the 
Default Power Level and the power for Motor B becomes the power for Motor C.

You can change which side of the line the robot follows by changing which motor gets the initial power.
----*/

defaultPower = 40
currPower = 0
while(true) {
  currPower = lightSensorPct()/100 * defaultPower
  setMotor(B, currPower)
  setMotor(C, defaultPower - currPower)
  drawText(10,10, currPower+'  ', 2)
  drawText(110,10, (defaultPower - currPower) + '  ', 2)
  clearRect(0,90, 178, 38)  // clears the bottom of the LCD screen
  fillRect((90-30*0.5)-(lightSensorPct()-50),90, 30, 38)
  sleep(100)
}

