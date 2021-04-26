/* Remote Control of the Robot
   This program demonstrates how you can remotely control the robot using the computer's keyboard.
   Events from the keyboard will be sent to the robot for processing.  This program uses two main 
   event handlers: toHandleKeyPress() and toDetectObjects()
   These event handlers will handle the events from the computer keyboard and from the ultrasonic sensor.
   The addEventListener() functions tell the robot which event handler should handle each type of event.
   A flag variable ('okToMove') will indicate whenter the robot should move forward.  This variable is
   set by the ultrasonicSensor event handler.  If an object is less than 5, then the okToMove variable
   will be set to 'false'.
   
   A turbo mode will allow the robot to drive forward faster.  The turbo is triggered by the shift key (right or left).
   Please note that the shift keys are modifier keys and will modify other keys.  Therefore, to get the 
   turbo to work, you will need to press the shift key down first and then press the up key to drive forward.

*/

okToMove=true                                  // Create a variable indicating if it is OK to move
turbo=0                                        // Create a variable to store the value of turbo (initialized to zero)
                                               // Create a function to handle the key press event.
function toHandleKeyPress(event) {             // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
	switch(event.code) {                       // The event object has three properties: type, code, value.  You can use these event properties in your function to determine actions by the robot.
	case 24:                                   // Up key will be used to move forward
		setLED(1)                              // Set the LED to green just to indicate which direction the robot should be driving
		if(okToMove) syncMotors(B,C, 20+turbo) // If it is okToMove, then sync the motors B and C to 20% plus the turbo
	    if(!okToMove) stopAllMotors()          // If it is NOT okToMove, then stop the motors
	    break                                  // No more statements needed for the up key
	case 26:                                   // Down key will be used to move backward
		setLED(2)                              // Set the LED to red to indicate moving backward
		syncMotors(B,C,-20)                    // Sync the motors to move backward
		break                                  // No more statements needed for the down key
	case 25:                                   // Right key to turn right
		setLED(0)                              // Turn off the LED
		syncMotors(B,C, 10, 200)               // Sync motors to turn right
		break                                  // No more statements needed for the right key
	case 23:                                   // Left key to turn left
		setLED(0)                              // Turn off the LED
		syncMotors(B,C, 10, -200)              // Sync motors to turn left
		break                                  // No more statements needed for the left key
	case 116:                                  // Left Shift Key
	case 117:                                  // Right Shift Key
		if(event.value==1) turbo=10            // If the key is down, then set the turbo to 10
		if(event.value==0) turbo=0             // If the key is up, then turn off the turbo
		break                                  // No more statements needed for the shift keys
	}                                          // End of the switch statement
	if(event.code < 100 && event.value==0) stopAllMotors()  // If the key code is less than 100 and the key is up, then just stop all motors
}
                                               // Create a function to detect objects.
function toDetectObjects(distance) {           // The event object is passed as a parameter into the handler function.  In this example we will label the object: distance
	if(distance.value<5)                       // If the distance is less than 5, then it is
		okToMove=false                         //   NOT okToMove
	else                                       // else it is
		okToMove=true                          //   okToMove
}
                                               // Add the event listener(s)
addEventListener('keyboard',toHandleKeyPress)  // The event listener requires two parameters: name of the event as a string, callback function to be executed when the event occurs
addEventListener('ultrasonicSensor',toDetectObjects) // Please note that the callback function is entered as a function name without the usual parentheses.
                                               // The parentheses are omitted from the callback function because the addEventListener() function is not executing the callback.
                                               // The addEventListener() function adds the callback to the specified event.  It is the specified event that will execute the callback.

waitHereWhile(true)                            // Enter an infinite wait

                                               // Drive the robot toward an object.  It will stop automatically before hitting the object.
                                               // The ultrasonicSensor event will stop the robot from crashing into the object.

// To send the keyboard event, open the EV3 panel in the compiler by clicking on the EV3 symbol shown at the top of the compiler window.
// Click once in the box on the right side of that panel for sending events.
// Now, when you press a key, the event will be sent to the robot and the relevant codes will be shown on the display.

// You can use this same program to listen for mouse events.  Just change the listener to 'mouse' instead of 'keyboard'
// You can also add additional listeners.


