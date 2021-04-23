// Move in a Square Pattern using a variable to graph the gyroSensorValue
// ----------------------------------------------------------------------
// Make the robot move around a square
// Show the starting orientation on the display 
// The robot will move straight for 2 seconds and then
//   reset the gyro and turn 90 degrees counter-clockwise
// The for() loop will repeat this action 4 times
// An indicator on the display will show the original orientation

resetGyroSensor()                                // Initialize the gyroSensor()
center = { x: 89, y: 64, radius: 60 }            // Create a 'center' object to represent the center of the LCD screen.  Add a radius to be used in expressions for drawing the two circles and line.
for(i=1;i<=4;i++) {                              // Loop for 4 times
  gyro = gyroSensorValue()                       // Assign the gyro sensor's value to a variable called 'gyro'.  The gyro variable will used in multiple places in the program.
  clearScreen()                                  // Clear the screen
  // Graph it =============
  gyroIndicator = gyroSensorValue() + 90
  // 90 degrees are being added to the sensor value so that the indicators below will point to the top of the LCD display if the sensor value is zero (0).
  circle( center.x, center.y, center.radius )    // Draw a center circle
  x2=center.x+cosin(gyroIndicator)*center.radius // Calculate an x2 coordinate based on the center of the circle offset by the cosine of the gyro times the circle's radius
  y2=center.y-sin(gyroIndicator)*center.radius   // Calculate an y2 coordinate based on the center of the circle offset by the sine of the gyro times the circle's radius
  // Note that in calculating y2 the offset is subtracted from the coordinate because the y-scale on the LCD display increases in values from top to bottom (i.e., 0 on the y axis is at the top of the display)
  line( center.x, center.y, x2, y2 )             // Line from the center to the edge of the circle
  fillCircle( x2, y2, 5 )                        // Draw an indicator of the direction
  syncMotors( B, C, 30 )                         // Start driving straight
  sleep(2000)                                    // For 2 seconds
  syncMotors( B, C, 30, -100 )                   // Start turning (swing turn)
  while(abs(gyroSensorValue()-gyro)<90) {        // Turn for 88 degrees
    clearScreen()                                // Clear the screen
    // Graph it =============
    gyroIndicator = gyroSensorValue() + 90
    circle( center.x, center.y, center.radius )  // Draw a center circle
    x2=center.x+cosin(gyroIndicator)*center.radius // Calculate an x2 coordinate based on the center of the circle offset by the cosine of the gyro times the circle's radius
    y2=center.y-sin(gyroIndicator)*center.radius // Calculate an y2 coordinate based on the center of the circle offset by the sine of the gyro times the circle's radius
    line( center.x, center.y, x2, y2 )           // line from the center to the edge of the circle
    fillCircle( x2, y2, 5 )                      // Draw an indicator of the direction
    sleep(10)                                    // Sleep 10ms
  }
}

