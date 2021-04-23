// Make the robot move straight,  then wide turn
// The robot will move straight for 2 seconds and then
//   turn 180 degrees counter-clockwise
// The for() loop will repeat this action 2 times.
gyro=0;					// Initialize a gyro variable
for(i=1;i<=4;i++) {	// Loop for 4 times
  syncMotors( B, C, 30 ) // Start driving straight
  sleep(2000)			// For 2 seconds
  gyro=gyroSensorValue() // Reset the gyro variable
  syncMotors( B, C, 30, -50 ) // Start turning (gradual turn)
  while(abs(gyro-gyroSensorValue())<180) { // Turn for 180 degrees
    sleep(10)				// Sleep 10ms
  }
}
