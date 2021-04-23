/*-------------------------------------
Variables

In Javascript, a variable is a name that can be used to store any value.
The values that can be stored in variables include the following:

    Boolean  (true or false)
	Numeric  (any number)
	String   (characters, ascii codes, unicode characters)
	Array    (a collection of values)
	Object   (a collection of properties and/or methods)

A variable declaration or variable assignment may be preceeded with the keyword: 'var'.
The keyword 'var' is optional and not required in JavaScript.

-----------------------------------------*/

// Example:

var a = 1          // In this example, the variable 'a' is assigned the numeric value 1.
alert(a)           // 1

a = false          // In this example, a is assigned the boolean value: false.
alert(a)           // false

a = 'a is First'   // In this example, the variable 'a' is assigned the string: 'a is First'.
alert(a)           // a is First

// VARIABLE TYPECASTING
// In JavaScript, any variable can be assigned any value at any point in the program.
// JavaScript does not use variable 'typecasting'.  Variables in JavaScript are not defined as specific types.
// Some languages, such as Python, C, C#, and Ruby, use typecasting to help the compiler organize 
// memory to avoid problems at runtime.  In languages that use typecasting, variables of specific types
// are stored together in arrays of the same type of value.  In these languages, any misuse of the 
// variable type is identified by the compiler prior to the program being downloaded to the robot.
//
// JavaScript does not use variable types.  Any variable could contain any value at any time.
// Because JavaScript does not use variable types (or typecasting) it may be possible for the 
// programmer to write a program that compiles OK but does not work as expected at runtime.
// For example, 
//    setMotor(A, 20)    // Sets the power for motor A to the value of 20%
//
//  The power for the above function could be assigned to a variable such as:
//    var aPower = 20
//    setMotor(A, aPower)   // In this example, the power for motor A is stored in a variable called aPower
//
//  Now consider the potential for the variable to store a non-numeric value such as:
//    var aPower = 'full power'  // the variable is being assigned a String value.
//    setMotor(A, aPower)   // In this example, the aPower variable does not contain a numeric value.
//                          //  The program will compile just fine.  This is not a syntax or compile error.
//                          //  This is known as a 'logic' error and would normally result in an error at runtime.
//                          //  However, this JavaScript compiler automatically inserts a validation test to
//                          //  determine if the passed parameter is numeric.  If it is not numeric, the robot
//                          //  will display a warning message (at runtime) when that function is attempted.
//                          //  The warning message will let the robot operator know that a numeric value is required.

// ARRAYS
// Definition: A collection of elements where each element may contain any value
// Arrays may be defined using either the Array constructor function or an Array literal

// Creating Arrays using the Array() constructor function.  Make sure you use the 'new' keyword to indicate that 
// a new array is being created (instantiated; an instance of an array is being created).
a = new Array() // Creates an empty array
a.push(10)      // Pushes the number 10 onto the end of the array
a.push(20)      // Pushes the number 20 onto the end of the array
a.push(30)      // Pushes the number 30 onto the end of the array
alert(a[0])     // 10

// Creating Arrays using an Array literal.
b = []          // Creates an empty array
b.push(10)
b.push(20)
b.push(30)
alert(b[1])     // 20

// or even ...
b = [10, 20, 30]  // Creates an array with 3 elements
alert(b[2])     // 30



