// Sine and Cosine are functions from trigonometry
// These functions are used to determine coordinates which can help in drawing and positioning graphical objects

center = { x: 89, y: 64, radius: 40 }
for(j=0; j<=720; j+=6) {         // Orbit two times around the larger circle incrementing 6 degrees at a time
  clearScreen();                 // Clear the display

  circle( center.x, center.y, center.radius );   // Draw a large circle in the center of the screen

  i =  j % 360;             // Modulus operator converts 'j' to a scale of 0 to 360 degrees.

  // Show current values for degree, sine, cosine
  drawText(center.x-20, center.y-15, i, 2);
  drawText(center.x-20, center.y+5, ' deg', 1);
  drawText(130, 90, 'sine', 1);
  drawText(130, 110, sin(i), 1);
  drawText(  0, 40, 'cosine:', 1);
  drawText(  0, 20, cosin(i), 1);

  // Draw 3 smaller circles:
  //   1 - orbits the big circle 
  //   2 - shows the position of sine
  //   3 - shows the position of cosine

  // Position the orbiting circle
  circle(center.x + cosin(i)*center.radius, center.y - sin(i)*center.radius, 10);

  // Position the Sine function circle at column 170x.  The y-Value will change with the orbiting circle
  circle(170, center.y - sin(i)*center.radius, 4);

  // Position the Cosine function circle at row 10y.  The x-Value will change with the orbiting circle
  circle(center.x + cosin(i)*center.radius, 10, 4);

  sleep(400);
}
sleep(3000);
waitForPress();

