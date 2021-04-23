/*-----
The basic idea in this line following program is to adjust the speed of each motor of the robot 
by adding (or subtracting) a variable level of power from a constant level of power.

Background: This method is based on a part of the classic PID controller. PID is short for 
Proportional, Integral, Derivative. A PID controller calculates an error value as the 
difference between a measured light value and the desired value (usually 50% if following a line). 
The controller attempts to minimize the error through the use of a formula. The PID controller 
formula involves three separate parameters: the proportional, the integral and derivative. 
Using a NXT robot, we can obtain excellent line following using just the P part of the formula. 
The Integral and Derivative are not needed at this level.

Since the light range for a Light Sensor is 100, we can divide the current light sensor 
percent by 100 to convert it to a portion to be multiplied by the Default Power level. 
This becomes the power level for Motor B. The difference between the Default Power Level 
and the power for Motor B becomes the power for Motor C.

Tuning:

  Increase or decrease the Constant power to make the robot move faster or slower.
  Increase or decrease the Variable power to help the robot to make wider or narrower turns.
  If you want to change which side of the line the robot follows, change whether Motor B or Motor C is shown first in the program.
  If the robot shakes rapidly while following the line, reduce the amount of variable power.
  If the robot fails to make turns, increase the amount of variable power.

Troubleshooting:

  If the robot moves backwards along the line, try multiplying the power for each motor by -1.
  In Robot JavaScript, if you want to change the direction, you would need to reverse the sign of the power being supplied to the motor statement.
  If the robot moves away from the line, place the robot on the other side of the line. Remember, all line following robots try to steer toward the edge of the line.
  The program tells them whether to look for the left side or the right side of the line.
  If the robot moves back and forth without making progress, adjust the value of variablePower (see Tuning above).

----*/
//
// Example:
//
constantPower = 45
variablePower = 20
Kp = 0
while(true) {
  Kp = ((lightSensorPct() - 50) / 50) * variablePower;
  setMotor(B, constantPower + Kp)
  setMotor(C, constantPower - Kp)
}
//
// Example: (if the robot is going backwards instead of forwards)
//
constantPower = 45
variablePower = 20
direction = -1
Kp = 0
while(true) {
  Kp = ((lightSensorPct() - 50) / 50) * variablePower;
  setMotor(B, direction * (constantPower + Kp))
  setMotor(C, direction * (constantPower - Kp))
}
