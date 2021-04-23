// lightSensorPct() 
// -----------------
// Returns the percent of light reflected from a surface

while(true) {
  clearScreen()
  drawText(0, 10, 'Percent '+lightSensorPct(), 2)
  // Graph it ///////////////
  rect( 20, 40, 100, 40 )                   // x, y, width, height
  fillRect( 21, 41, lightSensorPct(), 38 )  // x, y, width, height
  sleep( 100 )
}
