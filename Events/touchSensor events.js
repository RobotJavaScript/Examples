/* Driving the Robot Using the touchSensor Events
   This program shows you how you can control the driving of the robot
   using the touch sensor.  For an effective demonstration of this program
   connect a touchSensor to the robot using one of the longest cables you have.
   You would then hold the touch sensor in your hand to control the robot.
   Push the touchSensor button down to move.  Release the button to stop.
   The direction that the robot moves will change with each press of the touchSensor.
*/
okToMove=false                       // Create a Boolean variable to indicate when the robot should move
                                     // The robot will only move when okToMove is true
                                     // This variable will be initialized to 'false' and will be
                                     // set to 'true' when the touchSensor is pressed.

direction=-1                         // This variable controls the direction the robot travels.
                                     // The value of this variable will change between -1 and +1.
                                    
                                     // Create an event handler to handle the touchSensor events
function toHandleTheTouchSensor(e) { // A touchSensor event will occur when the touchSensor is pressed as well as when it is released.
  if(e.value==1) { okToMove=true; direction*=-1; }  // If the touchSensor was pressed the event value will equal 1.
  if(e.value==0) okToMove=false      // If the event value is zero, the touchSensor was released.  Set the okToMove to 'false'.
  drawText(10,10, e.value, 2)        // Show the event value on the LCD screen
}
                                     // Add an event listener to listen for touchSensor events and then handle them by passing the event to the callback function.
                                     // An event listener requires two parameters: 1) name of the event as a string and 2) identifier of the callback function (i.e., the event handler).
addEventListener('touchSensor',toHandleTheTouchSensor)

while(true) {                        // Enter an infinite loop
  syncMotors(B,C, 30*direction)      // Multiplying the power by the direction enables the robot to move either forward or backward
  waitHereWhile(okToMove)            // The Boolean variable okToMove is set in the handler function above.
  stopAllMotors()                    // If okToMove is false, then stop all motors.
  waitHereUntil(okToMove)            // Wait here until it is OK to move.
}                                    // Repeat the loop.



