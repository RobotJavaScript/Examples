/*-----
The basic idea in this line following program is to increase the number of steps of steering.
The typical implementation will have steps such as:
  1) Turn Sharply to the Left (Motor B 30% power; Motor C Stopped)
  2) Turn Gradually to the Left (Motor B 30% power; Motor 15% power)
  3) Go Straight (Motors B and C 30% power)
  4) Turn Gradually to the Right (Motor B 15% power; Motor 30% power)
  5) Turn Sharply to the Right (Motor B Stopped; Motor C 30% power)

The range of values returned by a calibrated light sensor is 100. 
Divide this by 20 to get the five steps needed for the switch.
-----*/

defaultPower = 30
while(true) {
  var currLight = lightSensorPct()
  drawText(10,10, currLight+'  ', 2)
  clearRect(0,90, 178,128)
  if(currLight <= 20) {
    setMotor(B, 0)
    setMotor(C, defaultPower / 2)
    fillRect(30,90, 30, 38)
  } else if(currLight <= 40) {
    setMotor(B, defaultPower / 2)
    setMotor(C, defaultPower)
    fillRect(50,90, 30, 38)
  } else if(currLight <= 60) {
    setMotor(B, defaultPower)
    setMotor(C, defaultPower)
    fillRect(70,90, 30, 38)
  } else if(currLight <= 80) {
    setMotor(B, defaultPower)
    setMotor(C, defaultPower / 2)
    fillRect(110,90, 30, 38)
  } else {
    setMotor(B, defaultPower / 2)
    setMotor(C, 0)
    fillRect(130,90, 30, 38)
  }
  sleep(100)  // This number controls how frequently the robot will check the sensor
}
