function drawMenu() {
  clearScreen()
  rect(10, 10, 150, 110)
  drawText(40, 25,"Option 1")
  drawText(40,40,"Option 2")
  drawText(40,55,"Option 3")
  drawText(40,70,"Option 4")
  drawText(40,85,"Option 5")
}
option = 1
function clearCursor() {
  drawText(20, option*15+10, '  ')
}
function drawCursor() {
  drawText(20, option*15+10, '>>')
}
while(true) {
  drawMenu()
  drawCursor()
  key=waitForPress()
  clearCursor()
  if(key==1) option-=1
  if(key==3) option+=1
  if(option<1) option = 1
  if(option>5) option = 5
  drawCursor()
  if(key==2) break

}

if(option==1) {
  alert('1 blah blah blah')
} else if(option==2) {
  alert('2 blah blah blah')
} else if(option==3) {
  alert('3 blah blah blah')
}
