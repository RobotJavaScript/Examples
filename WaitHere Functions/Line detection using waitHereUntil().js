// Line Detection Example Program
//
// This program is for Line Detection using a single sensor and comparison to a value.
// Using a single light sensor mounted toward the front of the robot, aim the robot toward a line and start the program.
// The robot will start driving and while driving, it will check the light sensor percentage.  The robot will continue 
// to drive forward until the light sensor percentage is below 10.  Once the light sensor percentage drops below 10, 
// the robot will then execute the next statement.
// 
syncMotors( B, C, 30 )                  // Start moving using motors B & C
waitHereUntil( lightSensorPct() < 10 )  // Wait here (on this statement) until the light sensor sees the line
stopAllMotors()                         // line has been detected


