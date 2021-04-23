// This program will start motor B at 30% power
// Variable i with sleep(100) is used to count 2 seconds
// After the for() loop, the encoder is reset
// The while() loop repeats this process infinitely
setMotor( B, 30 )
while( true ) {
  for( i=0; i<20; i++ ) {
    clearScreen()
    drawText( 10, 10, encoderValue(B), 2 )
    sleep(100)
  }
  resetEncoder(B)
}
