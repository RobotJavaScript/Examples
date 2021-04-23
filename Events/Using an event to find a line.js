/* Using Light Sensor Events for line detection
*/
var lineDetected = false                 // Create a flag variable to help monitor the state of the lineDetection.  Initialize it to false.
                                         // The lightSensor event handler function will change this flag to true when a line has been detected.
                                         // Create a 'handler' for the lightSensor event
function toDetectLine(event) {           // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
  if(event.value<10) lineDetected=true   // If the value of the event is less than 10, then set the lineDetected variable to true.
}
                                         // Add an 'event listener'
addEventListener('lightSensor', toDetectLine)  // The event listener requires two parameters: name of the event as a string, callback function to be executed when the event occurs
                                         // Please note that the callback function is entered as a function name without the usual parentheses.
                                         // The parentheses are omitted from the callback function because the addEventListener() function is not executing the callback.
                                         // The addEventListener() function adds the callback to the specified event.  It is the specified event that will execute the callback.

syncMotors(B, C, 20)                     // Start the robot moving toward the line.
waitHereUntil(lineDetected)              // Wait here until the lineDetected variable is true.
stopAllMotors()                          // The line has been detected, you can stop moving now.

/* The above code is a rather simple implementation (for example purposes) of using an Event to detect a line.
   At the assembly level, this program is no different than:

    syncMotors(B, C, 20)                 // Start the robot moving toward the line.
    waitHereUntil(lightSensorPct()<10)   // Wait here until the light sensor percent is less than 10.
    stopAllMotors()                      // The line has been detected, you can stop moving now.


*/


