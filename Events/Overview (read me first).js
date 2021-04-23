/* JavaScript is a single-threaded programming language.  
JavaScript does not have startThread() or stopThread() functions.
JavaScript does not permit parallel threads of execution.
What JavaScript does have instead of threads are: Events.
JavaScript allows you to handle various events that the 
computer (or robot in this language) may encounter.

In RobotJavaScript, you can handle events that occur in the sensors,
motor encoders, and buttons on the robot.

For example, a touch sensor event occurs when the touch sensor is pressed.
A touch sensor event also occurs when the depressed touch sensor is subsequently released.
A light sensor event occurs whenever there is a change in the light sensor percent.
A gyro sensor event occurs whenever the gyro sensor detects rotation.
An ultrasonic sensor event occurs whenever the ultrasonic sensor detects a change in distance.
A motor encoder event occurs whenever the motor turns.

As a programmer you will need to specify what you want the robot to do
when an event occurs.  For example, what should the robot do if the touch
sensor is pressed?  What should the robot do if it has detected a change in the light sensor?

You will need to create a function to handle the event(s).
You could create a separate function for each event or a single function for all events.
You could have several functions that handle different combinations of events.
You can even have multiple functions that handle the same event.

*/
                                         // Create a 'handler' for the event
function sensorState(event) {            // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
  drawText(0,10,event.type,2)            // The event object has three properties: type, value, port.  You can use these event properties in your function to determine actions by the robot.
  drawText(0,30,'Value: '+event.value,2) // Shows the numeric value of the event.  Event values are numeric since events are based on sensor input.
  drawText(0,50,event.port,2)            // Shows the port where this event occurred
  drawText(0,70,(event.value==1) ? 'Pressed ': 'Released',2)  // Display a message based on the value of the event
  setLED(event.value)                    // Set the LED based on the value of the event
}
                                         // Add an 'event listener'
addEventListener('touchSensor', sensorState)  // The event listener requires two parameters: name of the event as a string, callback function to be executed when the event occurs
                                         // Please note that the callback function is entered as a function name without the usual parentheses.
                                         // The parentheses are omitted from the callback function because the addEventListener() function is not executing the callback.
                                         // The addEventListener() function adds the callback to the specified event.  It is the specified event that will execute the callback.

setLED(0)                                // Turn the LED off
waitHereWhile(true)                      // Enter an infinite wait

/* Multiple sensors of the same type . . .
There is an optional third parameter to the addEventListener() function for situations where you have more than one sensor of the same type.
You may specify the port that the 'Listener' should be attached to.  For example, if you have a touch sensor on ports 1 and 4, you could add 
the following information to the addEventListener() function:

  addEventListener('touchSensor', sensorState)      // The default port for a sensor will always be the lowest numbered port where that sensor is attached
  addEventListener('touchSensor', sensorState, 4)   // You could add the port number as a parameter if you have more than one sensor of the same type

Events are processed during while loops, the sleep() function, and the waitHereWhile() / waitHereUntil() functions.

*/



