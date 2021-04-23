
function menuItem(pText, cValue) {     // Construct a menu item given a label to use as the prompt and a return value
  this.prompt = pText                  // The menu item object will contain a property called 'prompt'
  this.caseValue = cValue              // The menu item object will contain a property called 'caseValue'
}
function clearCursor(cValue) {
  clearCircle(10, cValue*15+3, 5)
}
function drawCursor(cValue) {
  circle(10, cValue*15+3, 5)
}
var menu=[]                            // Initialize an array called menu
menu.push(new menuItem('Item 1', 1))   // Push a new menuItem onto the array
menu.push(new menuItem('Item 2', 2))   // Push another new menuItem onto the array
menu.push(new menuItem('Item 3', 3))   // Push another new menuItem onto the array
menu.push(new menuItem('Item 4', 4))   // Push another new menuItem onto the array
menu.push(new menuItem('Item 5', 5))   // Push another new menuItem onto the array
menu.push(new menuItem('Item 6', 6))   // Push another new menuItem onto the array
function drawMenu() {                  // Draw the menu
  clearScreen()                        // Clear the screen
  for(j=0;j<menu.length;j++) {         // For each menu item
    drawText(20, j*15+15, menu[j].prompt)
  }
}
option = 1
while(true) {
  drawMenu()
  while(true) {
    drawCursor(option)
    buttonPressed = waitForPress()
    clearCursor(option)
    if(buttonPressed==1) option-=1
    if(buttonPressed==3) option+=1
    if(buttonPressed==2) break
  }
  switch(option) {               
  case 1:
    alert('Case 1: blah blah blah')
    break;
  case 2:
    alert('Case 2: blah blah blah')
    break;
  case 3:
    alert('Case 3: blah blah blah')
    break;
  case 4:
    alert('Case 4: blah blah blah')
    break;
  case 5:
    alert('Case 5: blah blah blah')
    break;
  case 6:
    alert('Case 6: blah blah blah')
    break;
  }
}

