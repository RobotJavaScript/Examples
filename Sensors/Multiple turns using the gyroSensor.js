// Multiple Turns using the Gyro
// ------------------------------
// This program uses the gyroSensor and two motors (on ports B and C)
// This program will demonstrate three different types of turns: point turn, swing turn, gradual turn
// A point turn is when the drive motors turn in opposite directions
// A swing turn is when one of the drive motors is active while the other drive motor is stopped
// A gradual turn is when both drive motors turn in the same direction--but one turns faster than the other
// The syncMotors() function can create a variety of turns
// A point turn is created if the turning ratio parameter is either 200 or -200
// A swing turn is created if the turning ratio parameter is either 100 or -100
// A gradual turn is created if the turning ratio parameter is between 0 and 100
// After starting the robot in a syncMotors() turn, reset the gyroSensor and check it in a while loop
//
///////////////////////////////////////////////////////////////////////
// Turns using the waitHereWhile() function.
// Point turn
syncMotors( B, C, 30, -200 )            // Start a point turn
resetGyroSensor()                       // Reset the sensor
waitHereWhile( abs(gyroSensorValue()) < 90 ) // Wait here while the absolute value of the sensor is less than 90 degrees

stopAllMotors()                         // Stop the motors
sleep(2000)                             //   for 2 seconds

// Swing turn
syncMotors( B, C, 30, 100 )             // Start a swing turn in the other direction
resetGyroSensor()                       // Reset the sensor
waitHereWhile( abs(gyroSensorValue()) < 90 ) // Wait here while the absolute value of the sensor is less than 90 degrees

stopAllMotors()                         // Stop the motors
sleep(2000)                             //   for 2 seconds

// Gradual turn
syncMotors( B, C, 30, -25 )             // Start a gradual turn
resetGyroSensor()                       // Reset the sensor
waitHereWhile( abs(gyroSensorValue()) < 90 ) // Wait here while the absolute value of the sensor is less than 90 degrees

stopAllMotors()                         // Stop the motors
sleep(2000)                             //   for 2 seconds

///////////////////////////////////////////////////////////////////////
// Turns using the while() loop.
// Point turn
syncMotors( B, C, 30, -200 )            // Start a point turn
resetGyroSensor()                       // Reset the sensor
while( abs(gyroSensorValue()) < 90 ) {  // While the absolute value of the sensor is less than 90 degrees
  sleep(50)                             // Move for a period of time
}                                       // Repeat the loop

stopAllMotors()                         // Stop the motors
sleep(2000)                             //   for 2 seconds

// Swing turn
syncMotors( B, C, 30, 100 )             // Start a swing turn in the other direction
resetGyroSensor()                       // Reset the sensor
while( abs(gyroSensorValue()) < 90 ) {  // While the absolute value of the sensor is less than 90 degrees
  sleep(50)                             // Move for a period of time
}                                       // Repeat the loop

stopAllMotors()                         // Stop the motors
sleep(2000)                             //   for 2 seconds

// Gradual turn
syncMotors( B, C, 30, -25 )             // Start a gradual turn
resetGyroSensor()                       // Reset the sensor
while( abs(gyroSensorValue()) < 90 ) {  // While the absolute value of the sensor is less than 90 degrees
  sleep(50)                             // Move for a period of time
}                                       // Repeat the loop


