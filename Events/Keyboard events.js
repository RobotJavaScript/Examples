/* Keyboard Events
   Computer keyboards send events to the computer.  Each event has a specific code (i.e., the key code) which indicates which key was pressed.
   There are separate events for key down and key up.  Three events are created with each key press: key down, key up, and key press.
   The Robot JavaScript compiler will send two keyboard events for each key pressed: key down and key up.
   In order to process the event, you need to create an event handler and add an event listener.  The event listener will listen for the event
   and when an event is perceived, it will be sent to the handler function for processing to determine what action the robot should take.

   Keyboard events are restricted to only those events which take place within the Event Window on the EV3 Panel of the Compiler.  
   Connect the robot to the computer (USB or WiFi), then open the EV3 Panel and click with the mouse in the Event Window.  
   As long as the event window has focus, you will be able to send keyboard and/or mouse events to the robot.  These events are not sent to
   the robot if the Event Window does not have focus. 

   The purpose for sending events to the robot is to enable you to control the robot through the keyboard.  For example, the arrow keys could
   drive the robot forward/backward/turning.  The Enter key or Spacebar could trigger accessory motor actions or other behaviors by the robot.
   You could program the event handler to process any key on the keyboard.

   The key codes for each key can be viewed using the program below.  Just open the EV3 panel, click on the Event Window and then press any key.
   The event value 1 is sent on key down and event value 0 is sent on key up.  The event key code tells you which key was pressed.  The key codes
   were created by Microsoft and are part of the operating system's ability to identify which key was pressed.

*/

                                          // Create a 'handler' for the event
function fromKeyboard(e) {                // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
  drawText(0, 10, e.type+'  ', 2)         // The event object has three properties: type, code, value.  You can use these event properties in your function to determine actions by the robot.
  drawText(0, 30, e.code+'  ', 2)         // Shows the numeric code of the event.  These event codes are numeric based on standards created by Microsoft.
  drawText(0, 50, e.value+'  ', 2)        // Shows the numeric value of the event.  For most Keyboard and Mouse events, the value will be either 0 (not pressed) or 1 (pressed).
}
                                          // Add an 'event listener'
addEventListener('keyboard',fromKeyboard) // The event listener requires two parameters: name of the event as a string, callback function to be executed when the event occurs
                                          // Please note that the callback function is entered as a function name without the usual parentheses.
                                          // The parentheses are omitted from the callback function because the addEventListener() function is not executing the callback.
                                          // The addEventListener() function adds the callback to the specified event.  It is the specified event that will execute the callback.

waitHereWhile(true)                       // Enter an infinite wait

// To send the event, open the EV3 panel in the compiler by clicking on the EV3 symbol shown at the top of the compiler window.
// Click once in the box on the right side of that panel for sending events.
// Now, when you press a key, the event will be sent to the robot and the relevant codes will be shown on the display.

// You can use this same program to listen for mouse events.  Just change the listener to 'mouse' instead of 'keyboard'
// You can also add additional listeners.
