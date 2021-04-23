// ambientLight() 
// -----------------
// Returns the percent of ambient light detected by the sensor

while(true) {
  clearScreen()
  drawText(0, 10, 'Percent '+ambientLight(), 2)
  // Graph it ///////////////
  rect( 20, 40, 100, 40 )                   // x, y, width, height
  fillRect( 21, 41, ambientLight(), 38 )  // x, y, width, height
  sleep( 100 )
}
