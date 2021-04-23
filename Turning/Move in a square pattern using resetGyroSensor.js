// Move in a Square Pattern using resetGyroSensor()
// ------------------------------------------------
// Make the robot move around a square
// The robot will move straight for 2 seconds and then
//   reset the gyro and turn 90 degrees counter-clockwise
// The for() loop will repeat this action 4 times.

for(i=1;i<=4;i++) {                       // Loop for 4 times
  syncMotors( B, C, 30 )                  // Start driving straight
  sleep(2000)                             // For 2 seconds
  resetGyroSensor()                       // Reset the gyroSensor
  syncMotors( B, C, 30, -100 )            // Start turning (swing turn)
  while(abs(gyroSensorValue())<88) {      // Turn for 88 degrees
    sleep(10)                             // Sleep 10ms
  }
}
