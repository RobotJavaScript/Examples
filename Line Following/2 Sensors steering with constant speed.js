/* Line Following Using Two Light Sensors and Steering with Constant Power

   This program requires two light sensors.
   
   The basic idea in this line following program is to get the robot to follow the line using a light sensor on each side of the line. 
   Optimally, the two light sensors should each see Grey (half over the line and half over the white background). 
   This program will subtract the value from one sensor from the value of the other sensor (i.e., it will calculate the difference between the two sensors). 
   If the difference between the sensors is zero (i.e., each sensor is receiving the same amount of light), then the robot will 
   apply 0 steering (driving the robot straight). If one sensor sees more light than the other, then the difference 
   between them will not be zero. The robot will then apply a greater percentage of power to one motor than to the other.
      
   Steering is a numeric value that ranges from -200 to +200. To drive straight, the steering value is zero. 
   Different combinations of power applied to the two motors when steering is between -200 and 0 and +200 and 0. 
   Values of steering that are between -99 and +99 result in the motors turning in the same direction. 
   Values between -200 to -101 and +200 to +101 result in the motors turning in opposite directions. 
   Steering that has a value of either +100 or -100 will result in a swing turn in which only one motor is turning.
   To follow a line, we will try to calculate a value for steering that varies between -99 and +99.
   
   To control steering using two light sensors, just multiply the difference between the light sensors by a constant 
   called gain (0.5 to 2). If both light sensors are the same, then the difference between them would be zero and the 
   product of this difference times the constant would also be zero resulting in the robot diving straight.
   
   If one sensor has a value higher than the other sensor, then the difference between them times the constant would 
   enable the robot to turn toward the center of the line.

*/

// The port number is passed as a parameter to the lightSensorPct() function.
// In the example below, lightSensors are on ports 1 and 4.
gain = 1.5
constantPower = 20
while(true) {
  syncMotors(B, C, constantPower, (lightSensorPct(1) - lightSensorPct(4)) * gain)
  // Graph the line
  clearRect(0,90, 178, 38)  // clears the bottom of the LCD screen
  // Draw a box representing the approximate position of the line
  fillRect((90-30*0.5)-((lightSensorPct(1) - lightSensorPct(4)) * gain),90, 30, 38)
  sleep(100)
}

// Please note, if the robot is turning away from the line, reverse the light sensor ports used in the formulas above.
// If the robot does not turn fast enough, try increasing the gain by 0.3
// If the gain is too low, the robot may be unable to turn enough to follow curves in the line.
// If the gain is too high, the robot may be unable to follow straight parts of the line.
// If the robot wiggles back and forth as it follows the line, try lowering the value of sleep from sleep(100) to sleep(20)


