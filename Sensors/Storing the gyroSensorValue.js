// Store the gyro sensor value in a variable
// Use a while() loop
// Compare the absolute value of the difference between the sensor and the variable
// Loop while the absolute value of the difference is less than a set criteria

  gyro=gyroSensorValue() // Reset the gyro variable
  syncMotors( B, C, 30, -200 ) // Start turning (point turn)
  while(abs(gyro-gyroSensorValue())<90) { // Turn for 90 degrees
    sleep(10)				// Sleep 10ms
  }
