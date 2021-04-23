// This program will start motor B at 30% power
// Variable motorPower will be reversed with *= -1
// The absolute value abs() is used because the motor
// will drive backwards when the power is negative
// The inner while() loop checks the encoderValue
// After exiting the inner while() loop, encoder is reset
// The outer while() loop repeats infinitely
var motorPower = 30
while( true ) {
  setMotor(B, motorPower);
  while( abs(encoderValue(B)) < 180)  {
    clearScreen()
    drawText(10,10,encoderValue(B))
    sleep(10)
  }
  motorPower *= -1;
  resetEncoder(B)
}
