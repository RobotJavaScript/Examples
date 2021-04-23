// The colorSensorValue() function returns an object with three properties: r, g, b
// If defined as a literal, the object would look like:
//    colorSensorValueObject = { r: redValue, g: greenValue, b: blueValue }
//
// In the example below, the object is assigned to the variable 'x'
while(true) {
  x=colorSensorValue()                  // Assign the color sensor value object to the variable x
  drawText( 10, 10, 'Red:  ' + x.r, 2 ) // Display the value for red
  drawText( 10, 40, 'Green:' + x.g, 2 ) // Display the value for green
  drawText( 10, 70, 'Blue: ' + x.b, 2 ) // Display the value for blue
  sleep(500)                            // Wait for 500 milliseconds
  clearScreen()                         // Clear the screen
}                                       // Repeat

