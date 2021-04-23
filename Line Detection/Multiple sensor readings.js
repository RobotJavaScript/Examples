/*------------------
Line Detection

Multiple Sensor Readings stored in an Array
 In this technique, multiple sensor readings are stored in an array
 A filter (mask) is applied to the array to detect a pattern
 The array will have a specific size that is maintained through out the loop
 New light sensor readings are 'pushed' onto the array
 Old light sensor readings are removed from the array using 'shift'

 The array is initialized using either a 'for()' loop or an array literal
 If you use an array literal, you will need to enter values that represent the background
 The lightSensorPct() function will return the percentage of the light detected by the sensor
 When over a line, the value will be a lower number
 When over the background, the value will be a higher number

Initializing the Array
 Advantages and disadvantages of using for() loop or array literal
 A for() loop allows you to change the size of the array programmatically
 An array literal allows you to initialize the array with fewer lines of code.

 Example of using a for() loop: 
   var sensorReadings=[]
   for(i=0; i<6; i++) sensorReadings.push(lightSensorPct())

 Example of using an array literal: 
   var sensorReadings=[100,100,100,100,100,100]

Inside the Loop
 After defining the array, you will use an infinite loop to add and remove values from the array
 New values are added to the array using the .push() method
 Old values are removed from the array using the .shift() method
 Example of the while loop:
    while(true) {
      sensorReadings.push(lightSensorValue())
      sensorReadings.shift()
      sleep(100)
    }


If you move the robot over the background without a line, you may see array values such as:
  [70,65,68,72,71,67]
  note that these are high numbers and there is some variation in the sensor readings

If you move the robot over a line, you may see array values such as:
 pattern 1: [70,65,68,72,71,67] - sensor readings just before crossing the line
 pattern 2: [65,68,72,71,67,35] - light sensor beginning to cross the line
 pattern 3: [68,72,71,67,35,12] - light sensor is still crossing the line
 pattern 4: [72,71,67,35,12,10] - light sensor is still crossing the line
 pattern 5: [71,67,35,12,10,13] - light sensor is still crossing the line
 pattern 6: [67,35,12,10,13,11] - light sensor is still crossing the line
 pattern 7: [35,12,10,13,11,34] - light sensor is in the middle of the line
 pattern 8: [12,10,13,11,34,65] - light sensor starting to pass the line
 pattern 9: [10,13,11,34,65,72] - light sensor has passsed the line

To detect a line, multiply the array elements by a filter
The filter is also an array of values that is the same size as the array of lightSensor values.

A typical filter will be:
   [3, 2, 1, -1, -2, -3]

Multiple the arrays (element by element).

For example, using pattern 1:
   [ 70*3 , 65*2, 68*1, 72*-1, 71*-2, 67*-3 ]
   Then sum the products:
     210  +  130 + 68 + -72  + -142 + -201 
   The sum of the products is: -7

For example, using pattern 4:
   [ 72*3 , 71*2, 67*1, 35*-1, 12*-2, 10*-3 ]
   Then sum the products:
     216  +  142 + 67 + -35  + -24 + -30 
   The sum of the products is: 336

The sum of products when the robot has not crossed a line should be close to zero.
The sum of products when the robot is crossing the line will be a high value

To calculate the sum of the products of the array of light sensor values with the filter, use a for() loop as in:

  var filter=[3, 2, 1, -1, -2, -3]
  for( i=0, sum=0; i<sensorReadings.length; i++) {
     sum += sensorReadings[i]*filter[i]
  }

If you are having trouble detecting the line, 
You can tune the program for your particular use by altering things such as: 
	- length of time for the sleep function
	- number of array elements
	- values used in the filter
	- values used as the criteria to break out of the loop

----*/

var filter=[3, 2, 1, -1, -2, -3]
var sensorReadings=[]
for(i=0; i<6; i++) sensorReadings.push(lightSensorPct())  // Initialize the sensor readings array
if(sensorReadings.length != filter.length) alert('Filter length not match') // length of the filter has to match the length of the sensorReadings array
syncMotors( B, C, 30 )              // Start moving
while(true) {                       // loop forever
  sensorReadings.push(lightSensorPct()); // push new value onto array
  sensorReadings.shift();                  // shift old value off of array
  for( i=0, sum=0; i<sensorReadings.length; i++) { // scan the array elements
    sum += sensorReadings[i]*filter[i]  // calculate a sum
  }
  if( sum > 150 ) break;      // break out of the loop if sum > criteria
}

