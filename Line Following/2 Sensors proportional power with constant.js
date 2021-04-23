/* Line Following Using Two Light Sensors and Proportional Power With a Constant

   The basic idea in this line following program is to get the robot to follow the line using a light sensor on each side of the line. 
   Optimally, the two light sensors should each see Grey (half over the line and half over the white background). 
   This program will subtract the value from one sensor from the value of the other sensor (i.e., it will calculate the difference between the two sensors). 
   If the difference between the sensors is zero (i.e., each sensor is receiving the same amount of light), then the robot will 
   apply 50% power to each motor (driving the robot straight). If one sensor sees more light than the other, then the difference 
   between them will not be zero. The robot will then apply a greater percentage of power to one motor than to the other.

   The function getLightDiffPortion() is created here to calculate a portion of the default power that should be applied to motor B.
   The function will return the ratio of the numerator divided by 200.  This will result in a real number from 0.00 to 1.00.
   This portion will be multiplied by the default power to determine the power for motor B.
   Motor C will then receive the difference between the default power and the power given to motor B.

*/

function getLightDiffPortion() {
  // This function reads two light sensors.  The port number is passed as a parameter to the lightSensorPct() function.
  // In the example below, lightSensors are on ports 1 and 4.
  // Add 100 to the difference between the two numerators
  numerator = lightSensorPct(1) - lightSensorPct(4) + 100
  // At this point, the variable numerator will be a number from 0 to 200
  // For example: if LS(1) is 100% and LS(4) is 0%, the numerator will be 200
  //    if LS(1) is 0% and LS(4) is 100%, the numerator will be 0
  //    if LS(1) is 30% and LS(4) is 30%, then the numerator will be 100
  // Dividing the numerator by 200 will result in a real number from 0.00 to 1.00.
  return numerator / 200
}
// This program uses two variables to help determine power: a constant amount and a variable amount.
variablePower = 30       // The amount of variable power applied to each motor is determined by the product of getLightDiffPortion() and variablePower
constantPower = 15
while(true) {
  currPower = getLightDiffPortion() * variablePower       // Multiply the portion times the variable power and assign this product to 'currPower'
  setMotor(B, constantPower + currPower)                  // Add the constant power to currPower
  setMotor(C, constantPower + defaultPower - currPower)   // Add the constant power to the difference between defaultPower and currPower
}


