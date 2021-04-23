/*  Line Following Using Events
    This program uses events.  It requires an ultrasonicSensor and a lightSensor. 
    Note that the behavior of following the line is started and stopped inside the ultrasonicSensor event handler.
    When the ultrasonic sensor detects an obstacle, it will turn the line following off.
    When the ultrasonic sensor detects that the path is clear, it will turn the line following on.
*/

target = 40
gain = 1.5
var somethingThere = false               // Create a flag variable to help monitor the state of the lineDetection.  Initialize it to false.

                                         // Create a 'handler' for the lightSensor event
function toFollowLine(event) {           // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
  if(somethingThere) return;             // If there is an obstacle in front of the robot, 
  drawText(10,10, gain*(event.value-target)+'  ', 2)
  syncMotors(B, C, 20, gain*(event.value-target))
  clearRect(0,90, 178, 38)               // clears the bottom of the LCD screen
  fillRect((90-30*0.5)-(event.value-target),90, 30, 38)  // Locate a filled rectangle at the midpoint of the screen (90) minus 1/2 of the width of the box minus the difference between the light sensor and the target
}

                                         // The ultrasonicSensor event handler function will change this flag to true when an obstacle has been detected.
                                         // Create a 'handler' for the ultrasonicSensor event
function toDetectSomething(event) {      // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
  if(event.value<5) {                    // If the value of the event is less than 5, then there is an obstacle in front of the robot.  Set the variable to true.
    somethingThere=true  
    stopAllMotors()                      // The line has been detected, you can stop moving now.
  }
  if(event.value>9) {                    // If the value of the event is greater than 9, then the obstacle has moved away. 
    somethingThere=false                 // Set the variable to false which will allow the line following to continue.
    syncMotors(B, C, 20)                 // Obstacle has been cleared.  Start the motors again.
  }
}

                                         // Add a few 'event listeners'
addEventListener('lightSensor', toFollowLine)
addEventListener('ultrasonicSensor', toDetectSomething)

waitHereWhile(true)                      // Infinite loop


