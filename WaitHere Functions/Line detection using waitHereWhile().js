// Line Detection Example Program
//
// This program is for Line Detection using a single sensor and comparison to a value.
// Using a single light sensor mounted toward the front of the robot, aim the robot toward a line and start the program.
// The robot will start driving and while driving, it will check the light sensor percentage.  The robot will continue 
// to drive forward while the light sensor percentage is above 20.  Once the light sensor percentage drops to 20 or 
// below 20, the robot will then execute the next statement.
// 
syncMotors( B, C, 30 )                  // Start moving using motors B & C
waitHereWhile( lightSensorPct() > 20 )  // Wait here (on this statement) while the light sensor sees a light background
stopAllMotors()                         // line has been detected


