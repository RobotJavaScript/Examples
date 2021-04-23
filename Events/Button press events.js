/*  Button Press Events
    This program uses events to handle button presses.
    Press a button on the robot to see the numeric value associated with that button.
*/

function drawMenu() {
    clearScreen()
    rect(5,5,160,90)
    drawText(10,10,'Press a', 2)
    drawText(10,30,'button to', 2)
    drawText(10,50,'continue', 2)
}
function buttonHandler(e) {              // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
  if(e.value > 0) {
    clearScreen()
    drawText(0,10,e.type, 2)
    drawText(0,30,e.value, 2)
    sleep(2000)
    drawMenu()
  }
}
addEventListener('buttonPress', buttonHandler)
drawMenu()
waitHereWhile(true)


