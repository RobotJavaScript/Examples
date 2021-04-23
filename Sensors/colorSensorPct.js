// Difference between colorSensorValue() and colorSensorPct()
// Both functions return a colorSensor object containing 3 properties: r, g, b
// The colorSensorValue() function returns a number between 0 and 1000
// The colorSensorPct() function returns a percentage between 0 and 100
// The values returned by colorSensorPct() are equivalent to the values
//   returned by colorSensorValue() divided by 10
//
// To view the relationship between these two functions, attach a color sensor and a
//   touch sensor to the robot.  Run the program below and use the touch sensor
//   to toggle between value and percent.
while(true) {
  if( touchSensorValue() == 1 ) {
    x=colorSensorPct()                  // Assign the color sensor percent object to the variable x
  } else {
    x=colorSensorValue()                // Assign the color sensor value object to the variable x
  }
  drawText( 10, 10, 'Red:  ' + x.r, 2 ) // Display the value for red
  drawText( 10, 40, 'Green:' + x.g, 2 ) // Display the value for green
  drawText( 10, 70, 'Blue: ' + x.b, 2 ) // Display the value for blue
  sleep(400)                            // Wait for 400 milliseconds
  clearScreen()                         // Clear the screen
}

