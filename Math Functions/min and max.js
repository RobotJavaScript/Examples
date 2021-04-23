// The min() and max() functions return the
//   minimum and maximum of two parameters
//   passed to the function.
alert(min(10, 20))  // 10
a=30
b=50
alert(max(a, b))    // 50
// You may also use these functions in expressions
alert(max(a, b) * 5 + min(8, 6))  // 256

alert(max(min(3,4),min(10,20)) )   // 10

alert( min( max(25, 42), max(min(3,4), min(5,20)) ))   // 5
