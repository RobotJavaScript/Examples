/* Using motorSpeed Events for executing step sequences.
   In this program, the robot will move in one direction in three separate steps: acceleration, at speed, and deceleration.
   An event listener is used to enable you to see a visual representation of the speed.  The speed will be graphed on the LCD panel.
   The event listener also sets a flag variable to indicate if the motor is stopped (or not).
   The waitHereWhile() and waitHereUntil() functions are useful for pausing the program until (or while) certain conditions are present in the robot.
*/

var motorIsStopped = true                // Create a flag variable to help monitor the state of the motor (i.e., stopped or not stopped).  Initialize it to true.
                                         // Create a 'callback' function that will handle the events that occur in motorSpeed.
                                         // Callback functions have one variable (the 'event') that is passed into the function.
function toShowSpeed(e) {                // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
  motorIsStopped = (e.value==0) ? true: false  // Set the boolean variable to 'true' of the motor is stopped and 'false' if the motor is not stopped.
  drawText(30,70,e.value+'  ',2)         // Show the speed of the motor.
  fillRect( 0,90, e.value*2, 38)         // Draw a graph of the motor speed.  The rectangle uses x, y, width, and height.
  clearRect(e.value*2,90, 178, 38)       // clears the remainder of the bottom of the LCD screen.
}
                                         // Add an 'event listener' for a specified event to use a handler (callback) function.  Because this is a motor event, you will need to specify the port.
addEventListener('motorSpeed', toShowSpeed, B) // The motorSpeed event listener requires three parameters: name of the event as a string, callback function to be executed when the event occurs, and motor port
                                         // Please note that the callback function is entered as a function name without the usual parentheses.
                                         // The parentheses are omitted from the callback function because the addEventListener() function is not executing the callback.
                                         // The addEventListener() function adds the callback to the specified event.  It is the specified event that will execute the callback.
                                         // The event listener: 'toShowSpeed()' will be triggered when there is a change in the speed of motor B.

stepMotors( B, C, 50, 360, 720, 360 )    // Create a sequence of 3 steps for the motor: acceleration, run at top speed, and deceleration.
                                         // The stepMotors() function uses the following parameters: motor1, motor2, top speed, acceleration (degrees of rotation), top speed (degrees), and deceleration (degrees).
                                         // The sequence of three steps will be performed during the following two waitHere functions.
waitHereWhile(motorIsStopped)            // When the sequence of steps starts, the motor speed will be zero.
                                         // This initial 'waitHereWhile()' function helps to pause the program while the robot prepares to move.
                                         // Once the robot starts moving, the change in speed of the motor will trigger the event listener.
                                         // If the motor is moving, the event listener will set the 'motorIsStopped' variable to false (i.e., no longer stopped)

                                         // The stepMotors() function called above includes a deceleration parameter. 
                                         // This means the robot will reduce the speed to zero at the end of the 3 step cycle.
waitHereUntil(motorIsStopped)            // The robot will wait on this line until the entire 3 step cycle has been completed and the motor is now stopped.
                                         // Once the motor stops, the change in motor speed will trigger the event listener which will then set the variable
                                         // to the value of 'true' indicating that the motor has now stopped moving.
                                         // We are officially done with the step sequence and can now proceed to the rest of the program.

beep(20, 440, 200)                       // Beep
sleep(500)                               // The above Beep will be played during the sleep() function.


