/* Mouse Events
   The computer mouse sends events to the computer.  Each event has a specific code that indicates which indicates which mouse button key was pressed.
   There are separate events for mouse button down and mouse button up.  In order to process the event, you need to create an event handler and add 
   an event listener.  The event listener will listen for the event and when an event is perceived, it will be sent to the handler function for 
   processing to determine what action the robot should take.

   Mouse events are restricted to only those events which take place within the Event Window on the EV3 Panel of the Compiler.  
   Connect the robot to the computer (USB or WiFi), then open the EV3 Panel and click with the mouse in the Event Window.  
   As long as the event window has focus, you will be able to send mouse events to the robot.  These events are not sent to
   the robot if the Event Window does not have focus. 

   The purpose for sending events to the robot is to enable you to control the robot through the mouse buttons.  For example, the left button could
   one action by the robot and the right button could trigger a different action.  Even the scroll wheel can trigger actions or other behaviors by the robot.

   The codes for each mouse button can be viewed using the program below.  Just open the EV3 panel, click on the Event Window and then press any mouse button.
   The event value 1 is sent on button down and event value 0 is sent on button up.  The event key code tells you which button was pressed.  These codes
   were created by Microsoft and are part of the operating system's ability to identify which mouse button was pressed.
   
   The codes are as follows:
     0 - Left mouse button  (value 1 - down; value 0 - up)
     1 - Scroll wheel       (value 130 - down; value 120 - up)
     2 - Right mouse button (value 1 - down; value 0 - up)

*/

                                          // Create a 'handler' for the event
function toHandleMouseInput(e) {          // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
  drawText(0, 10, e.type+'  ', 2)         // The event object has three properties: type, code, value.  You can use these event properties in your function to determine actions by the robot.
  drawText(0, 30, e.code+'  ', 2)         // Shows the numeric code of the event.  These event codes are numeric based on standards created by Microsoft.
  drawText(0, 50, e.value+'  ', 2)        // Shows the numeric value of the event.  For most Keyboard and Mouse events, the value will be either 0 (not pressed) or 1 (pressed).
}
                                          // Add an 'event listener'
addEventListener('mouse',toHandleMouseInput) // The event listener requires two parameters: name of the event as a string, callback function to be executed when the event occurs
                                          // Please note that the callback function is entered as a function name without the usual parentheses.
                                          // The parentheses are omitted from the callback function because the addEventListener() function is not executing the callback.
                                          // The addEventListener() function adds the callback to the specified event.  It is the specified event that will execute the callback.

waitHereWhile(true)                       // Enter an infinite wait

// To send the event, open the EV3 panel in the compiler by clicking on the EV3 symbol shown at the top of the compiler window.
// Click once in the box on the right side of that panel for sending events.
// Now, when you click a mouse button or scroll the mouse wheel, the event will be sent to the robot and the relevant codes will be shown on the display.

// You can use this same program to listen for mouse events.  Just change the listener to 'mouse' instead of 'keyboard'
// You can also add additional listeners.


