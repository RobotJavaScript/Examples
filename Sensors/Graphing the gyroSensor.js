// Gyro Sensor
// --------------------
// The gyro sensor measures rotation of the sensor.  
// When attached to the robot, this will effectively measure the rotation of the robot.
//
// The return value is the number of degrees rotated starting when the robot was turned on.
// There are three ways of resetting the sensor.
//     1) turn the robot off / on
//     2) disconnect the sensor from the robot (i.e., unplug the cable from the sensor or robot)
//     3) use the resetGyroSensor() function
//
// Tips: 
//   It is important to prevent the sensor from being moved when the robot is being turned on or the sensor is being reset.
//   If the sensor detects movement as the robot is being turned on or the sensor reset, you may experience 'drift' in the sensor readings.
//   'Drift' in the sensor readings means that the values from the sensor are changing even though the sensor is not being moved.
//
// There are three ways of handling 'drift' in the sensor.
//     1) turn the robot off / on
//     2) disconnect the sensor from the robot (i.e., unplug the cable from the sensor or robot)
//     3) only use the sensor for short periods of time so that the effect of 'drift' is minimized
//
center = { x: 89, y: 64, radius: 60 }            // Create a 'center' object to represent the center of the LCD screen.  Add a radius to be used in expressions for drawing the two circles and line.
while(true) {
  gyro = gyroSensorValue()                       // Assign the gyro sensor's value to a variable called 'gyro'.  The gyro variable will used in multiple places in the program.
  clearScreen()                                  // Clear the screen
  drawText( center.x-30, center.y-10, gyro, 2)  // Show the value of the gyro sensor
  // Graph it =============
  gyro += 90
  // 90 degrees are being added to the sensor value so that the indicators below will point to the top of the LCD display if the sensor value is zero (0).
  circle( center.x, center.y, center.radius )    // Draw a center circle
  x2=center.x+cosin(gyro)*center.radius          // Calculate an x2 coordinate based on the center of the circle offset by the cosine of the gyro times the circle's radius
  y2=center.y-sin(gyro)*center.radius            // Calculate an y2 coordinate based on the center of the circle offset by the sine of the gyro times the circle's radius
  // Note that in calculating y2 the offset is subtracted from the coordinate because the y-scale on the LCD display increases in values from top to bottom (i.e., 0 on the y axis is at the top of the display)
  line( center.x, center.y, x2, y2 )  // line from the center to the edge of the circle
  fillCircle( x2, y2, 5 )  // Draw an indicator of the direction
  sleep( 100 )
  if(touchSensorPressed()) resetGyroSensor()     // Reset the sensor
}
// To experiment with 'drift', run this program, point the robot at a fixed object (e.g., door or window or wall), then press the touch sensor to reset the gyro sensor.
// Watch the values shown and slowly rotate the robot clockwise or counter-clockwise to maintain a zero (0) value shown on the display.
// You are countering the drift in the sensor by turning the robot.
// Disconnect and reconnect the sensor.  Press the touch sensor to reset the gyro.  Is the drift in the same direction?  At the same rate?
// Can you make the drift higher by moving the robot as you are reconnecting the sensor?

