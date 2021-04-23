function menuItem(pText, cValue) {     // Construct a menu item given a label to use as the prompt and a return value
  this.prompt = pText                  // The menu item object will contain a property called 'prompt'
  this.caseValue = cValue              // The menu item object will contain a property called 'caseValue'
}
var menu=[]                            // Initialize an array called menu
menu.push(new menuItem('Item 1', 1))   // Push a new menuItem onto the array
menu.push(new menuItem('Item 2', 2))   // Push another new menuItem onto the array
menu.push(new menuItem('Item 3', 3))   // Push another new menuItem onto the array
menu.push(new menuItem('Item 4', 4))   // Push another new menuItem onto the array
function drawMenu() {                  // Draw the menu
  for(j=0;j<menu.length;j++) {         // For each menu item
    drawText(10, j*20+15, menu[j].prompt)
  }
}
option = 0
while(true) {
  clearScreen()                        // Clear the screen
  drawMenu()                           // Draw the menu
  rect(5,option*20+10, 100,20)         // Draw a rectangle around the current option
  buttonPressed = waitForPress()       // Wait for a button
  clearRect(5,option*20+10, 100, 20)   // Erase the rectangle
  switch(buttonPressed) {              // Switch on the button pressed
  case 1:                              // Case 1 was the UP button
    option--                           // Decrement the option
    break;
  case 2:                              // Case 2 is the ENTER button.
    alert('Do Option '+(option+1))     // Do what option was selected
    break;
  case 3:                              // Case 3 is the DOWN button
    option++                           // Increment the option
    break;
  }
  // Assuming the option has changed either positive or negative
  // Perform the wrap-around if needed
  if( option < 0 ) option = menu.length-1
  if( option >= menu.length ) option = 0

  // As an alternative to the if() statements, you could use modulus
  // Calculate the modulus with the menu.length to wrap-around.  
  // An offset of the menu.length is used to avoid negative values returned by modulus.
  //   option = (option+menu.length) % menu.length   
}
