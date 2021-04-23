// Etch A Sketch 
// Attach two medium motors to ports A and D
// Attach a wheel to each motor to use as the knobs of the Etch A Sketch
// This program uses the motor encoders to position a cursor on the LCD screen
// Attach a touch sensor to clear the screen
resetEncoder(A)
resetEncoder(D)
clearScreen()
center = { x: 89, y: 64 }                // Create a 'center point'
cursor = { x: 0, y: 0 }                  // Initialize a cursor object
scaling = 0.7                            // Scaling can control how many degrees of rotation are needed to move the cursor
while(true) {                            // Loop forever
  cursor.y = encoderValue(A) * scaling   // Calculate a value for cursor.y (Encoder times scaling)
  cursor.x = encoderValue(D) * scaling   // Calculate a value for cursor.x (Encoder times scaling)
  // Check the cursor values to see if they have exceeded the bounds of the LCD display
  // The encoderValues will return degrees of rotation (positive and negative) which 
  // are used as an offset to the center point.  If the encoder is less than zero, then 
  // the cursor will be moved to the left or upwards on the LCD display.  If the encoder
  // is greater than zero, then the cursor will be moved to the right or downwards.
  
  if(cursor.y > center.y) cursor.y = center.y - 1            // If the value of the cursor.y is greater than the center.y, then center.y+cursor.y would be greater than the maximum y value for the LCD display.  In this case, set the cursor.y to center.y minus 1.
  if(cursor.y < -1 * center.y) cursor.y = center.y * -1 + 1  // If the value of the cursor.y is less than the -1*center.y, then center.y+cursor.y would be less than zero. In this case, set the cursor.y to center.y*-1 plus 1.
  if(cursor.x > center.x) cursor.x = center.x - 1            // If the value of the cursor.x is greater than the center.x, then center.x+cursor.x would be greater than the maximum x value for the LCD display.  In this case, set the cursor.x to center.x minus 1.
  if(cursor.x < -1 * center.x) cursor.x = center.x * -1 + 1  // If the value of the cursor.x is less than the -1*center.x, then center.x+cursor.x would be less than zero. In this case, set the cursor.x to center.x*-1 plus 1.
  fillCircle( center.x+cursor.x, center.y+cursor.y, 2)       // Good coordinates here.  Draw a circle with radius 2
  if(touchSensorPressed()) clearScreen()                     // If the touch sensor is pressed, clear the screen
  sleep(10)
}


