setMotor(B, 30)
resetEncoder(B)
while( abs(encoderValue(B)) < 1000 ) {
  clearScreen()
  drawText( 10, 10, encoderValue(B), 2 )
  sleep(100)
}
resetEncoder(B)
setMotor(B,  -30)
while( abs(encoderValue(B)) < 1000 ) {
  clearScreen()
  drawText( 10, 10, encoderValue(B))
  sleep(100)
}
