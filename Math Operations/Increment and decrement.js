/*--------------
Increment
  Definition: to increase by one
    Often in programming a variable will be used to keep track of how many times a block of code has been executed
    This is done by adding (or subtracting) one from a variable and then storing the updated value into the original variable

For example:  
  i = 0
  while( i < 10 ) {   // Loop while variable 'i' is less than 10
    // Doing something here in the loop
    //
    i = i + 1
  }

JavaScript includes a shortcut operator '++' to perform this math operation.

The increment operator can increment any numeric variable, array element, or object property.

For example:  
  i = 0
  while( i < 10 ) {   // Loop while variable 'i' is less than 10
    // Doing something here in the loop
    //
    i++               // Using the increment operator to increment variable 'i'
  }

------------*/

a = 50
a++
alert(a)        // 51

b = 14
b++
b++
b++
alert(b)        // 17

q=[ 1, 10, 100 ] 
q[2]++
alert(q[2])     // 101

z={ alpha: 1, bravo: 2 }
z.bravo++
alert(z.bravo)  // 3


/*--------------
Decrement
  Definition: to decrease by one

JavaScript includes a shortcut operator '--' to perform this math operation.

The decrement operator can increment any numeric variable, array element, or object property.

For example:  
  i = 10
  while( i > 0 ) {   // Loop while variable 'i' is greater than 0
    // Doing something here in the loop
    //
    i--               // Using the decrement operator to decrease variable 'i'
  }

------------*/

c = 80
c--
alert(c)        // 79

d = 14
d--
d--
d--
alert(d)        // 11

r = [ 1, 10, 100 ] 
r[2]--
alert(r[2])     // 99

y = { charlie: 3, delta: 5 }
y.delta--
alert(y.delta)  // 4


/*--------------
Both Increment and Decrement include pre- and post- forms of the operation.

This means that the target of the operation can be altered either before or after it is used in another expression.

For example:

  a = 0
  b = a++
  alert(a)    // a is now 1
  alert(b)    // b is still 0 since b was assigned the value of a and a was only incremented after it was used in the expression 'b = a'

verses:

  a = 0
  b = ++a
  alert(a)    // a is now 1
  alert(b)    // b is also 1 since it was assigned the value of a and a had been incremented before being used in the expression 'b = a'

--------------*/

e = 40
++e
++e
alert(e)      // 42

f = [ 4, 5, 6 ]
--f[0]
alert(f[0])      // 3



