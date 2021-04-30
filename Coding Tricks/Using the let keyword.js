/* Variable Scope
   The scope of a variable indicates the area of your program where the variable may be referenced (i.e., used).
   Most variables that you declare at the start of your program or outside of any functions will be global.
   Global variables are accessible anywhere in your program.  Variables declared within a function are local 
   only to the function and are not accessible outside of the function in which they were declared.
   
   You may also restrict the scope of variables to specific blocks of code by declaring them with the 'let' keyword.
   Any variable declared with the 'let' keyword is accessible only within the block in which it was declared.
   It is possible to declare multiple instances of the same variable name and each instance could have a different scope.
   
   The 'let' keyword allows you to write programs that have variable scoping restrictions that are more similar to C and C++
   where Variable scopes are limited to only the blocks in which they were declared.  Because this is JavaScript and not
   C or C++, most of the example programs in this compiler will forgo using the 'let' keyword.  
   You may use 'let' in your program if you feel that is necessary or useful.
   
*/


v = 99                 // Scope: Global
var w = 0              // Scope: Global
let x = 1              // Scope: Global

function someFunction() {
  var t = 80           // Scope: someFunction().  This variable only exists inside of this function.
  var x = 70           // x was originally defined as Global.  It will remain global unless you use the 'let' keyword.
  if( true ) {         // Creating new scope: If-Block1
    let t = 90         // Scope: If-Block1
    alert(t) // 90     // This t is in the scope If-Block1
  }                    // End of scope: If-Block1
  alert(t) // 80       // This t is in the scope: someFunction()
}                      // End of scope: someFunction()

if (x === 1) {         // Creating new scope: If-Block2
  let x = 2            // Scope: If-Block2.  This will create a new instance of the variable 'x'.  Your program will now have two x's--one that is global and one that is scoped to If-Block2.
  var y = 10           // Scope: Global.  Though we are in If-Block2, this variable is Global because it is not being declared with 'let' and not being declared inside a function.
  if (x === 2) {       // Creating new scope: If-Block3
    let x = 3          // Scope: If-Block3.  This will create a new instance of the variable 'x'.  Your program will now have three x's--one that is global and one that is scoped to If-Block2, and one scoped to IfBlock-3.
    var z = 11         // Scope: Global.  Though we are in If-Block3, this variable is Global because it is not being declared with 'let' and not being declared inside a function.
    alert(x)  // 3     // This x is in the scope If-Block3
  }                    // End of scope: If-Block3
  alert(x)  // 2       // This x is in the scope If-Block2
}                      // End of scope: If-Block2

alert(x)  // 1         // This x is in the scope Global
alert(z)  // 11        // This z is in the scope Global
someFunction()         // Execute the function someFunction()

/* As you can see from the above example, there are three separate instances of the 'x' variable.  Each instance of this variable is scoped to a different
   block and also stores a different value.  This happens only when you use the 'let' keyword to declare the variable.  The 'let' keyword creates a new
   instance of the variable if you are in a new scope.  This would obviously be a problem if you are creating multiple instances of the same variable name
   and become confused as to which instance is supposed to be used in each scope within your program.
   
   The purpose of the 'let' keyword is to enable your functions to become more 'portable' (i.e., to enable other programmers to safely use your functions in
   their programs and for you to safely use functions from other programmers in your program.  For example, imagine if you create a fanstastic function to 
   turn the robot and your function creates (and uses) a variable called: 'defaultPower'.  Then someone else takes your function and inserts it into their
   program.  If their program had created a global variable called 'defaultPower', then your function would overwrite the value of that variable in the program.
   This may be an unintended use of their variable 'defaultPower'.  This unintended usage could be prevented if you declared the variable in your function 
   using the 'let' keyword.
   
   The 'let' keyword in not very useful if you have only 1 programmer who is writing all the code.
   The 'let' keyword could be useful if you have multiple programmers each writing different functions and then all of the code is copied-and-pasted into one large program at a later time.

*/

