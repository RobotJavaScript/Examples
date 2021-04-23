// Accelerate the motor on port A
for(i=1;i<20;i++) {
  setMotor(1, 10+i*4)
  sleep(300)
}
sleep(3000)
