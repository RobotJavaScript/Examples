// Line Detection

// Single Sensor Reading
syncMotors( B, C, 30 )              // Start moving
while( lightSensorPct() > 30 ) {  // while the light sensor sees a white ground
  drawText(50, 60, lightSensorPct(), 2)                    //   Show the lightSensor Percentage
  sleep(100)                        //   sleep for 1/10th of a second
}                                   // repeat the loop
stopAllMotors()                     // line has been detected
