// Defining Literal Objects

// Simple literal objects
a={}      // Empty object (0 properties)
b={ x: 10 } // Defining a property 'X' with value 10 in object b.
          //  Property names and their values are separated by colons.
b={ x: 10, y: 15 }  // Properties are separated by commas in the literal object.
b={ x: 10, y: 15, z: 20 }  // No limit to the number of properties.
          // Like variable names, the names of properties cannot have spaces and must begin with a letter
c={ Motor_Power: 30, Steering_Ratio: 1 }
          // Property names should be descriptive of what value is being stored
c={ pi: 3.14159, e: 2.71828, SquareRootOf2: 1.41421 }
          // String values are encapsulated using apostrophies
d={ aString: 'this is a test' }
          // Objects can store a variety of data formats (in this example: string, numeric, boolean)
e={ accessoryMotor: 'd', port: 1, powerOn: true }
          // Objects can store other objects
f={ pointA: { x: 10, y: 10 }, pointB: { x: 15, y: 25 }, pointC: { x: 2, y: 100 } }
          // If Objects are similar, it may be useful to store them in arrays
          // In the example below, g is an object that contains a property called 'points'.
          // That property is an array [] with three elements.  
          // Each of the elements in the array is an object with properties 'x' and 'y'
          // This is an example of an object with an array of other objects
g={ points: [ { x: 10, y: 10 }, { x: 15, y: 25 }, { x: 2, y: 100 } ] }
          // Spaces are ignored by the compiler when reading Literals.
          // 'h' below has the same value as 'g'
h={points:[{x:10,y:10},{x:15,y:25},{x:2,y:100}]}
          // Literal Objects may be defined over several lines of code
          // In the example below, 'j' is an object with properties of several types.
          // Labels is an array of strings.  Responses is an array of integers.  ReverseScoring is boolean.  NumResponded is an integer.
j={ QuestionNumber: 'BenefitFrom', 
    Type: 'Checkbox', 
    Labels: ['Team building','Conflict resolution','Problem solving','Time management','Change management'], 
    NumResponded: 40, 
    ReverseScoring: false, 
    Responses: [ 21, 14, 14, 14, 15 ] 
  }

// Referencing Properties

// When referencing a property, you need to separate the property name from the object name using a period.

// Tests:
alert(b.x)            // 10
alert(b.y)            // 15
alert(c.pi)           // 3.14159
alert(d.aString)      // This is a test
e.port=2; 
alert(e.port)         // 2
if(e.powerOn)
  alert('Power is On')// Power is On
else
  alert('Power is Off')
alert(f.pointB.y)     // 25    // Referencing a property of a property of an object
alert(g.points[2].y); // 100   // Referencing a property of an array ('points') of an object
alert(h.points[0].x); // 10
alert(j.Labels[2]);   // Problem Solving   // Referencing an element [2] of a property 'Label' of object 'j'



