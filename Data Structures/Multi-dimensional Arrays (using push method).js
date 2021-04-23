// Object Constructor Functions
// Definition: A function whose purpose is to construct instances of objects
// Explanation:  All functions in JavaScript return values.  
//   You can specify the value returned by a function by using the 'return' statement.
//   For example:
function a() {
  return 5
}
//   The above example function will return the value of 5

// What are Object Constructor Functions?
//   Object Constructor Functions are functions that return an instance of an object.
//   The key difference between regular functions and Object Constructor Functions in how the object is returned.

// Example of a Regular Function:
function b() {
  return { x: 10, y: 20 }
}

// Example of an Object Constructor Function:
function c() {
  this.x = 10
  this.y = 20
}

// While both of the above functions will return an object with two properties (x & y), the regular function
// returns a static object that exists in the same memory location throughout the program regardless of
// how many times you use the function b().  To demonstrate how a regular function returns an object that
// exists in only one place in memory, we will create three references to the object: Obj1, Obj2, and Obj3.

Obj1 = b()
Obj2 = b()
Obj3 = b()

// Because the regular function returns a static object that exists in the same memory location, any variable
// that contains a reference to that object will refer to the same memory location.  The above three variables
// each refer to the same memory location.
 
Obj1.y = 25
Obj2.y = 40
Obj3.y = 55

// Therefore, Obj1.y will ALSO equal 55 since Obj1 and Obj3 refer to the same memory location and the Obj3 
// variable was updated last.

alert(Obj1.y)     // 55

// With the object constructor function, you can return a NEW object each time the function is called.
// For example:

Obj4 = new c()
Obj5 = new c()
Obj6 = new c()

// The 'new' keyword specifies that a 'new' instance of the object is to be created. 
// Each instance of the object can be manipulated independently such as:

Obj4.y = 25
Obj5.y = 40
Obj6.y = 55

// Objects Obj4, Obj5, and Obj6 each refer to different 'instances' of the object and can be manipulated independently.
// In this example, Obj4.y will still equal 25 even after we altered Obj5 and Obj6.

alert(Obj4.y)   // 25

// When using Object Constructor Functions, it is necessary to use two important keywords: 'this' and 'new'

// In the 'object constructor' function definition, use 'this' to create properties of the object.
// Object Properties are created with the 'this' keyword.

function d() {
  this.w=0;
  this.x=5;
  this.y=10;
  this.z=15;
}
// Use the 'new' keyword in combination with the name of the constructor function to create a NEW instance of the object.
e = new d()

// Once the object has been instantiated, you can refer to the properties using the variable that stores the object.
alert(e.x)        // 5
alert(e.z*3)      // 45

// As with other functions, you can pass parameters into the object constructor function.
// These parameters can be used to store values in the properties created by the function.

// Instances of the object can be combined with arrays to create efficient menu systems

function menuItem(pText, cValue) {     // Construct a menu item given a label to use as the prompt and a return value
  this.prompt = pText                  // The menu item object will contain a property called 'prompt'
  this.caseValue = cValue              // The menu item object will contain a property called 'caseValue'
}
var menu=[]                            // Initialize an array called menu
menu.push(new menuItem('Item 1', 1))   // Push a new menuItem onto the array
menu.push(new menuItem('Item 2', 2))   // Push another new menuItem onto the array
menu.push(new menuItem('Item 3', 3))   // Push another new menuItem onto the array
menu.push(new menuItem('Item 4', 4))   // Push another new menuItem onto the array
function drawMenu() {                  // Draw the menu
  for(j=0;j<menu.length;j++) {         // For each menu item
    drawText(10, j*20+15, menu[j].prompt)
  }
}
option = 0
while(true) {
  clearScreen()                        // Clear the screen
  drawMenu()                           // Draw the menu
  rect(5,option*20+10, 100,20)         // Draw a rectangle around the current option
  buttonPressed = waitForPress()       // Wait for a button
  clearRect(5,option*20+10, 100, 20)   // Erase the rectangle
  switch(buttonPressed) {              // Switch on the button pressed
  case 1:                              // Case 1 was the UP button
    option--                           // Decrement the option
    break;
  case 2:                              // Case 2 is the ENTER button.
    alert('Do Option '+(option+1))     // Do what option was selected
    break;
  case 3:                              // Case 3 is the DOWN button
    option++                           // Increment the option
    break;
  }
  // Assuming the option has changed either positive or negative
  // Perform the wrap-around if needed
  if( option < 0 ) option = menu.length-1
  if( option >= menu.length ) option = 0

  // As an alternative to the if() statements, you could use modulus
  // Calculate the modulus with the menu.length to wrap-around.  
  // An offset of the menu.length is used to avoid negative values returned by modulus.
  //   option = (option+menu.length) % menu.length   
}
