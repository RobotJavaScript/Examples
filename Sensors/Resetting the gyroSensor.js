// This program displays the gyroSensorValue
// The value of the sensor is reset to zero
//  when you press the touch sensor
while(true) {
  clearScreen()
  drawText(10, 10, gyroSensorValue())
  sleep( 100 )
  if( touchSensorPressed() ) { 
    setLED(2)
    resetGyroSensor()
    sleep(500)
    setLED(1)
  } 
}

// Usage
// The resetGyroSensor() function is useful if you need
// to make a turn.  You could reset the gyro before turning.
// Then check the gyro sensor as the robot is turning until
// a specific number of degrees has been met.

// Example:
resetGyroSensor()
setMotor( 2, 30 )
while(abs(gyroSensorValue()) < 90) {
  sleep( 100 )
}
stopAllMotors()
