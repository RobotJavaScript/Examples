// Accelerate the robot by increasing power to the syncMotors function.
for(i=1;i<20;i++) {
  syncMotors(B,C, 10+i*4)
  sleep(300)
}
sleep(3000)
