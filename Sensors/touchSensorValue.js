// touchSensorValue() returns a number (0 or 1)
setLED( 0 )
while(true) {
  if( touchSensorValue() == 1 ) {
    setLED( 1 )
  } else {
    setLED( 0 )
  }
  sleep(500)
}
