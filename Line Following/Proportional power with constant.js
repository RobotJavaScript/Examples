/*-----
The basic idea in this line following program is to increase the speed of the robot by adding a 
constant level of power to each motor in addition to the proportionally adjusted power from the Light Sensor.
Tip: Try to keep the robot moving forward by adding a constant power to both motors.
Since the light range for a Light Sensor is 100, we can divide the current light sensor percent 
by 100 to convert it to a portion to be multiplied by the Default Power level. Then add the Constant power. 
This becomes the power level for Motor B. The difference between the Default Power Level and the 
product of the Default power and the light sensor becomes the power for Motor C. Don't forget to 
add the Constant power to Motor C as well.

In summary, both motors get the Constant power. But one motor gets more, or less, of the 
variable power depending on the value obtained from the light sensor.

Tuning:
  Increase or decrease the Constant power to make the robot move faster or slower.
  Increase or decrease the Variable power to help the robot to make wider or narrower turns.
  If you want to change which side of the line the robot follows, change whether Motor B or Motor C is shown first in the program.

Troubleshooting:
  If the robot moves away from the line, place the robot on the other side of the line.

----*/

defaultPower = 55
constantPower = 10
currPower = 0
while(true) {
  currPower = lightSensorPct()/100 * defaultPower
  setMotor(B, currPower + constantPower)
  setMotor(C, (defaultPower - currPower) + constantPower)
}
//
// Example: (if the robot is going backwards instead of forwards, use the following instead)
// 
defaultPower = 55
constantPower = 10
currPower = 0
direction = -1
while(true) {
  currPower = lightSensorPct()/100 * defaultPower
  setMotor(B, direction * (currPower + constantPower))
  setMotor(C, direction * ((defaultPower - currPower) + constantPower))
}
