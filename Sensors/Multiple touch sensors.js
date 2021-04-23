// Multiple Sensors of the same type
// ===========================================
// The EV3 robot has 4 sensor ports.  The robot is able to examine these
// ports to see what sensors are connected to each.  When you connect
// a touch sensor to port 1, the robot is able to detect this and uses 
// this information to help interpret your program.  For example:
// If you have a touch sensor connected to port 1 and your program
// includes the following expression  "if(touchSensorValue()==0)" the
// robot will know that the touch sensor you are referring to is connected
// to port 1 and will use that sensor on that port to determine how to 
// evaluate the expression.  In other words, you do not need to specify
// the port number in your program.  The robot will know which port to use.
//
// The robot automatically checks its sensor ports at the start of each program.
// Your program will perform the same regardless of which port you have
// connected your sensor to.
//
// If, however, you have two or more touch sensors connected to the robot
// you will need to specify the port numbers for the sensors connected to
// the higher numbered ports.
// 
// The program below uses two touch sensors.  One of the touch sensors must
// be connected to port 4.  The other touch sensor can be connected to either
// port 1, 2, or 3.
//
setLED( 0 )
while(true) {
  if( touchSensorValue() == 1 ) {      // Check the touch sensor on the lowest port number
    setLED( 1 )                        // Set LED to Green
  } else {
	  if( touchSensorValue(4) == 1 ) { // Check the touch sensor connected to port #4
	    setLED( 2 )                    // Set LED to Red
	  } else {                         // If neither touch sensor was pressed
	    setLED( 0 )                    // Turn LED off
	  }
  }
  sleep(10)
}

// Pressing one touch sensor will turn the LED to Green
// Pressing the other touch sensor will turn the LED to Red
//
// Can you modify the program so that the LED will show Red only if both touch sensors are pressed?
// Hint: You will need to use a boolean "and" to help check both conditions as in:
//    if( touchSensorValue() == 1 && touchSensorValue(4) == 1) { 
// or,
//   You could eliminate lines 29 and 30 as in:
/*--------
setLED( 0 )
while(true) {
  if( touchSensorValue() == 1 ) {      // Check the touch sensor on the lowest port number
    if( touchSensorValue(4) == 1 ) { // Check the touch sensor connected to port #4
      setLED( 2 )                    // Set LED to Red
    } else {                         // If neither touch sensor was pressed
      setLED( 0 )                    // Turn LED off
    }
  }
  sleep(10)
}
--------*/
