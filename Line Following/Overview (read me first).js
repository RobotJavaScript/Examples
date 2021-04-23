/* Line Following - an Overview
   Line following works when the values used in setting the motor's power or robot's steering are set correctly.
   This overview will contain instructions you can use to easily configure the line following program for your robot.
   Line following programs use reflected light.  Light emitted from the sensor is reflected off of the surface and returned back to the sensor.
   The amount of light reflected is measured by the sensor.  Areas of the surface which are lighter reflect more light. 
   Darker areas of the surface absorb light.  Therefore, the amount of reflected light can be used as a measure
   indicating to the robot if the sensor is over a light or dark area.
   
   To follow a line, you want to try to get the robot to find the midpoint between the light and dark.  In other words,
   the robot should follow the edge of the line.  If the robot sees too much light, then it should turn toward the line.
   If the robot sees too much dark, then it should turn away from the line.
   
   A variable will be used to indicate to the robot, what the midpoint should be between light and dark.  This variable 
   will be called the 'target'.  The difference between the lightSensorPct() and the target will be used for steering.
   If the robot does not turn enough to follow curves in the line, then you may need to multiply the difference between
   the lightSensorPct() and the target by a value called the 'gain'.
   
   *Tuning your Line Following Function*
   
   For optimal performance, the values for 'target' and 'gain' should be tuned for the particular line you are following
   and the environment the robot is operating in.  The ambient light in a room can have an effect on the performance.
   A darker room will require a lower target value than a lighter room.  The best way to set these values is to initially 
   set the 'target' and then set the 'gain'.

   The best way to set the target is to start with a gain set to 1.  Then set the power in the syncMotors function to zero
   as in:
      gain=1
      syncMotors(B, C, 0, gain*(lightSensorPct()-target))
	Now look at the display as you push the robot across the line.  You should see positive and negative numbers.
	The target will need adjusting if you see more positive than negative numbers (or see more negative numbers than positive). 
	Decrease the target if you see more positive than negative numbers.
	Increase the target if you see more negative than positive numbers.
	For example, if you see +45 and -10, you will need to decrease the target by about 20.
	If you see +20 and -30, you will need to increase the target by about 5.
	If you see +80 and -20, you will need to decrease the target by 30.
	If you see +50 and -30, you will need to decrease the target by 10.
	
	The target is set correctly once you have about an equal value between positive and negative numbers (e.g., +30 and -30) 
	
	To set the gain, restore power to the syncMotors function and let the robot follow the line.
	If there are curves in the line, does the robot follow them?  
	Increase the gain if the robot is not turning enough to follow the curves in the line.
	
	If the robot wiggles back and forth as it follows the line, try decreasing the amount of sleep.  Instead
	of sleep(100), try sleep(20).
   
*/
target = 40
gain = 1.5
// Summary:
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
while(true) {
  drawText(10,10, gain*(lightSensorPct()-target)+'  ', 2)
  syncMotors(B, C, 20, gain*(lightSensorPct()-target))
  clearRect(0,90, 178, 38)  // clears the bottom of the LCD screen
// Locate a filled rectangle at the midpoint of the screen (90) minus 1/2 of the
//   width of the box minus the difference between the light sensor and the target
  fillRect((90-30*0.5)-(lightSensorPct()-target),90, 30, 38)
  sleep(100)
}


