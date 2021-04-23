// Line Detection
// Single Sensor Reading using break
syncMotors( B, C, 30 )              // Start moving
while( true ) {                     // while the light sensor sees a white ground
  if( lightSensorPct() > 30 ) break  // break out of the loop
  sleep(100)                        //   sleep for 1/10th of a second
}                                   // repeat the loop
stopAllMotors()                     // line has been detected
