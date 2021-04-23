while(true) {
  setLED(0)
  clearScreen()

  rect(10,10,160,60)
  drawText(15,30,'Press a key to')
  drawText(15,45,'  select a program')

  keyPressed=waitForPress()

  switch(keyPressed)
  {

  case 1:
    alert('You selected UP')
    setLED(4)
    sleep(2000)
    break

  case 2:
    alert('You selected ENTER')
    setLED(5)
    sleep(2000)
    break

  case 3:
    alert('You selected DOWN')
    setLED(6)
    sleep(2000)
    break

  }
}

