/* WaitHere functions.
Two functions were specifically created for the RobotJavaScript language:
  waitHereUntil()
  waitHereWhile()

Both functions perform a task similar to a while() loop except that there is no body to the wait functions--only a condition.
A single parameter is provided in the form of a boolean expression (or a variable or function that 
has a value that is either true or false)

For example, to wait until the gyroSensor has rotated 90 degrees, you could use the following statements:
  syncMotors(B, C, 20, 100)
  resetGyroSensor()
  waitHereWhile(abs(gyroSensorValue()) < 90)
  stopAllMotors()
The gyroSensorValue() function returns the current number of degrees the robot has turned.  This value is converted to a
positive number using the absolute value function: abs().  The robot will wait while the number of degrees turned is
less than 90.  Once the number of degrees is 90 or more, then the robot will perform the next statement: stopAllMotors().

The waitHereWhile() function will wait here while the condition remains true.  Once the condition becomes false, 
control moves to the next statement in the program.

Be careful to try to avoid creating an infinite loop.  
This function works best when you are waiting for a specific value from a sensor.

For example, to wait until the lightSensorPct() is less than 10, you could use the following statement:
  syncMotors(B, C, 15)
  waitHereUntil(lightSensorPct()<10)
  stopAllMotors()
These statements could help the robot stop on a line.
  
You could use a variable in the conditional expression of the waitUntil() function, but only if you update that variable
through some timer or event handler.

The example below shows how you could delay the start of a program until the user presses the touchSensor.

*/

clearScreen()                         // Clear the screen
drawText( 0, 10, 'Press the', 2)      // Show a message to the user
drawText( 0, 30, 'touchSensor', 2)
drawText( 0, 50, 'to begin.', 2)
waitHereWhile(touchSensorPressed()==false)  // Wait here while the the touchSensor has not been pressed
beep()
sleep(500)
clearScreen()                         // Clear the screen
drawText( 0, 10, 'The program', 2)    // Show a new message now that the program has begun
drawText( 0, 30, 'has begun.', 2)
sleep(3000)                           // Allow enough time to read the message

