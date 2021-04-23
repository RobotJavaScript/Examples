/* Using Ultrasonic Sensor Events for obstacle avoidance
   In this program, the robot will drive forward until an obstacle has been placed in its path.
   Once the obstacle has been removed, the robot will continue driving forward.
   A while loop will repeat this behavior.
*/
var somethingThere = false               // Create a flag variable to help monitor the state of the obstacle detection.  Initialize it to false.
                                         // The ultrasonicSensor event handler function will change this flag to true when an obstacle has been detected.
                                         // Create a 'handler' for the ultrasonicSensor event
function toDetectSomething(event) {      // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
  if(event.value<5) somethingThere=true  // If the value of the event is less than 5, then there is an obstacle in front of the robot.  Set the variable to true.
  if(event.value>9) somethingThere=false // If the value of the event is greater than 9, then the obstacle has moved away. Set the variable to false.
}
                                         // Add an 'event listener'
addEventListener('ultrasonicSensor', toDetectSomething)  // The event listener requires two parameters: name of the event as a string, callback function to be executed when the event occurs
                                         // Please note that the callback function is entered as a function name without the usual parentheses.
                                         // The parentheses are omitted from the callback function because the addEventListener() function is not executing the callback.
                                         // The addEventListener() function adds the callback to the specified event.  It is the specified event that will execute the callback.

while(true) {
  syncMotors(B, C, 20)                   // Start the robot moving toward the line.
  waitHereUntil(somethingThere)          // Wait here until an obstacle has been detected.
  stopAllMotors()                        // The line has been detected, you can stop moving now.
  waitHereWhile(somethingThere)          // Wait here until the obstacle has been removed.  Once the obstacle has been removed, the ultrasonicSensor event will fire.
}

// In this example, the event handler (i.e., the callback function) sets a flag variable to different states depending on the value of the event


