// The back button will normally terminate a program.
// If you want, you may disable this function of the back button.
// You could program the back button to perform a different task.
// The example program below shows how you can manipulate the functionality of the back button.

disableBackButtonTerminate()    // This function will disable the back button from terminating your program

sleep(500)
drawText(5, 10, 'The Back button has')
drawText(5, 25, 'will not terminate')
drawText(5, 40, 'the program. Instead,')
drawText(5, 55, 'the Back button will')
drawText(5, 70, 'change the LED.')
drawText(5, 100, 'Press ENTER to enable')
drawText(5, 115, 'the Back button.')
ledValue=0
while(buttonPressed(2)==0) {   // Enter a loop where only the ENTER key will exit
  sleep(400)
  if(buttonPressed(6)) setLED(ledValue++ % 3)
}
sleep(500)
clearScreen()
alert('Ok.')
sleep(500)
alert('Back button enabled')
clearScreen()
enableBackButtonTerminate()     // This function will enable the back button to terminate your program 
waitHereWhile(true)             // Infinite loop

