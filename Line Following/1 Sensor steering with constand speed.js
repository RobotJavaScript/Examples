/* Line Following Using One Light Sensor and Steering with Constant Power

   This program requires one light sensor.
   
   The basic idea in this line following program is to get the robot to follow the side of a line using a light sensor. 
   Optimally, the light sensor should see gray (half over the line and half over the white background). 

   This program will subtract a target value from the value of the sensor (i.e., it will calculate the difference between the sensor and the target). 
   If the difference between the sensor and target is zero (i.e., the sensor is receiving the target amount of light), then the robot will 
   apply 0 steering (driving the robot straight). If the sensor sees more light or less light than the target amount, then the difference 
   between them will not be zero. The robot will then apply a greater percentage of power to one motor than to the other.
      
   Steering is a numeric value that ranges from -200 to +200. To drive straight, the steering value is zero. 
   Different combinations of power applied to the two motors when steering is between -200 and 0 and +200 and 0. 
   Values of steering that are between -99 and +99 result in the motors turning in the same direction. 
   Values between -200 to -101 and +200 to +101 result in the motors turning in opposite directions. 
   Steering that has a value of either +100 or -100 will result in a swing turn in which only one motor is turning.
   To follow a line, we will try to calculate a value for steering that varies between -99 and +99.
   
   To control steering using one light sensor, just multiply the difference between the light sensor and target by a constant 
   called gain (0.5 to 2). If both the target and light sensor are the same, then the difference between them would be zero and the 
   product of this difference times the constant would also be zero resulting in the robot diving straight.
   
   If the sensor has a value higher or lower than the target value, then the difference between them times the constant would 
   enable the robot to turn toward the center of the line.
   
   You need to adjust the target and the gain to obtain optimal (or even acceptable) performance from the robot.
   The example numbers shown here should only be considered examples.

*/

target = 40
gain = 1.5
// The values for these variables may need to be adjusted higher or lower
// Watch the numbers shown on the display.
// Before adjusting the target, first set the gain to 1.
// Adjust the value of the target higher or lower so that you will see positive and negative numbers that are about equally distanced from zero (e.g., +45 and -45).
// If the robot is moving too much for you to see the numbers, lower the power level parameter in the syncMotors() function below.
// The target value should represent the midpoint between light and dark areas.
// When you have finished setting the target, you should see values shown on the display that range from +target to -target.
// The gain value is an adjustment to control how much the robot steers in relation to the target value.
// Typical values for the gain will range from 0.5 to 2.0
// If the robot turns too much, lower the gain.  If the robot is not turning enough, increase the gain.
// To get the robot to follow the other side of the line, you can multiply the gain by -1 as in:  gain = -1.5
constantPower = 20
while(true) {
  drawText(10,10, gain*(lightSensorPct()-target)+'  ', 2)
  syncMotors( B, C, constantPower, gain*(lightSensorPct()-target))
  clearRect(0,90, 178, 38)  // clears the bottom of the LCD screen
// Locate a filled rectangle at the midpoint of the screen (90) minus 1/2 of the
//   width of the box minus the difference between the light sensor and the target
  fillRect((90-30*0.5)-(lightSensorPct()-target),90, 30, 38)
  sleep(100)
}

// Please note, if the robot is turning away from the line, multiply the gain by -1 in the formulas above as in: -1*gain*(lightSensorPct()-target)
// If the robot does not turn fast enough, try increasing the gain by 0.3
// If the gain is too low, the robot may be unable to turn enough to follow curves in the line.
// If the gain is too high, the robot may be unable to follow straight parts of the line.
// If the robot wiggles back and forth as it follows the line, try lowering the value of sleep from sleep(100) to sleep(20)


