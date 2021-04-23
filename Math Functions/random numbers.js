clearScreen()
for(i=1; i<=8; i++) {
  drawText(30, i*12, random())
  sleep(500)
}
waitForPress()
