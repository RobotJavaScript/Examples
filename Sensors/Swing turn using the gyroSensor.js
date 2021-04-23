// Swing Turns using the Gyro
// ---------------------------
// This program uses the gyroSensor and two motors (on ports B and C).
// A swing turn is when one of the drive motors is active while the other drive motor is stopped.
// The syncMotors() function can create a swing turn if the turning ratio parameter is either 100 or -100.
// After starting the robot in a syncMotors() turn, reset the gyroSensor and check it in a while loop
//
syncMotors( B, C, 30, -100 )            // Start a swing turn
resetGyroSensor()                       // Reset the sensor
while( abs(gyroSensorValue()) < 90 ) {  // While the absolute value of the sensor is less than 90 degrees
  sleep(50)                             // Move for a period of time
}                                       // Repeat the loop

stopAllMotors()                         // Stop the motors
sleep(2000)                             //   for 2 seconds

syncMotors( B, C, 30, 100 )             // Start a swing turn in the other direction
resetGyroSensor()                       // Reset the sensor
while( abs(gyroSensorValue()) < 90 ) {  // While the absolute value of the sensor is less than 90 degrees
  sleep(50)                             // Move for a period of time
}                                       // Repeat the loop

