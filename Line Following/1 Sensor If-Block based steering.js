defaultPower = 20
while(true) {
  if(lightSensorPct() < target) {
    setMotor(B, 0)
    setMotor(C, defaultPower)
  } else {
    setMotor(B, defaultPower)
    setMotor(C, 0)
  }
}
