// Motor Encoder
// --------------------
// The motor encoder stores the degrees of rotation of the motor.
// Each motor has its own encoder which is updated through a rotation sensor inside the motor.
// The value of the encoder is reset either by turning the robot off, or by using the resetEncoder() function.

// Connect one or motors to the motor ports.
// Connect a touch sensor to one of the sensor ports.  Pressing the touch sensor will reset the encoders.

// You can either rotate the motors by hand.  Or apply power to the motors.
// To apply power to motors B and C, uncomment the lines below.
//setMotor( B, 20 )
//setMotor( C, -20 )

// You can start, then stop, then re-start the program.  The motor encoders continue from their last recorded value.
// The encoders are not re-set each time you start the program.
// You could include the resetEncoder() functions at the beginning of your program if you want the encoders to be reset.

while( true ) {
  if(touchSensorPressed()) {  // Reset each encoder
    resetEncoder(A)
    resetEncoder(B)
    resetEncoder(C)
    resetEncoder(D)
  }
  // Display the encoder values
  clearScreen()
  drawText( 0,  10, 'A: '+encoderValue(A)+'  ', 2)
  drawText( 0,  40, 'B: '+encoderValue(B)+'  ', 2)
  drawText( 0,  70, 'C: '+encoderValue(C)+'  ', 2)
  drawText( 0, 100, 'D: '+encoderValue(D)+'  ', 2)
  // Graph the encoder values
  radius = 15
  x = 150
  for(i=A; i<=D; i++) {           // Starting with motor A, loop through each motor port until D
     circle( x, i*30-10, radius )   // x, y, radius
     // Draw a line pointing to the current degree of rotation
     line( x, (i*30-10),  x + cosin(encoderValue(i))*radius, (i*30-10) + sin(encoderValue(i))*radius )
  }
  // Pause for 300 milliseconds 
  sleep(300)
}

