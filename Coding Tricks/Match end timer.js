// FLL Time Limit function
// This program shows how a setTimeout() function could stop the robot automatically after 2.5 minutes.

function toEndTheMatch() {
  clearScreen()
  stopAllMotors()
  drawText( 10, 20, 'Sorry', 2 )
  drawText(  0, 60, 'Game Over', 2 )
  drawText(  0, 100,'Press a button. . .', 2 )
  waitHereWhile(!buttonPressed())
  endProgram()
}
setTimeout(toEndTheMatch, 1000 * 60 * 2.5)        // Create a timeout event that will take place in 2.5 minutes (1000 milliseconds per second * 60 seconds per minute * 2.5 minutes)

//
//  The rest of your program missions goes here
//
//  You can define menus and functions as needed
//

while(true) {
//
// The main loop of your program
//
}

