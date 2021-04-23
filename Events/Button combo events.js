/*  Button Combo Press Events
    This program uses events to handle combo button presses.
    A button combo press is the pressing of two (or more) buttons at the same time.
    For example: press the left and the right buttons at the same time.
    Press two or more buttons on the robot at the same time to see the numeric value associated with that button combo.
*/

function drawMenu() {
    clearScreen()
	rect(1,1,176,90)
	drawText(6,10,'Press two', 2)
	drawText(6,30,'buttons to', 2)
	drawText(6,50,'continue', 2)
}
function buttonComboHandler(e) {              // The event object is passed as a parameter into the handler function.  This variable is often identified as 'e' or 'event'
  if(e.value > 0) {
    clearScreen()
    drawText(0,10,e.type, 2)
    drawText(0,30,e.value, 2)
	sleep(2000)
	drawMenu()
  }
}
addEventListener('buttonComboPress', buttonComboHandler)
drawMenu()
waitHereWhile(true)


