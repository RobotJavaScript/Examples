// endProgram() function
// This program will perform a countdown from 10
// Though the program uses an infinite loop, when i==0, the program will end.

var i=10                                 // Initialize a countdown variable

function toShowCountdown() {             // Create a function to show the countdown
  drawText( 10, 20, i+' ', 2 )           // Show the number
  i--                                    // Decrement the variable
}
setInterval(toShowCountdown, 1000)       // Start a timer to process the countdown every 1000 milliseconds

while(true) {                            // Enter a while() loop
  if(i==0) sleep(1000), endProgram()     // If the variable is zero, then sleep for 1 second and end the program
}                                        // Repeat the loop


