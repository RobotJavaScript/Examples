// touchSensorPressed() returns a boolean value (true/false)
setLED( 0 )
while(true) {
  if( touchSensorPressed() ) {
    setLED( 1 )
  } else {
    setLED( 0 )
  }
  sleep(500)
}
