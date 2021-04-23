// Accessing Array Elements

// Use a For Loop to access all of the array elements
// Note that curly braces are not needed if the for loop only contains one statement
var a=[1,2,3,4,5,6,7,8]
clearScreen()
for(i=0;i<a.length;i++)    // The incrementing variable 'i' starts at zero
  drawText(0, i*12, a[i])
sleep(1000)
drawText(80,100, "press a key")
waitForPress()             // Using a waitForPress() here instead of an alert()
                           // because we want to show multiple lines of text
                           // and the alert() only shows one line of text.

// The index of the first element of the array is always zero
// The index of the last element of the array is always [n-1]
//    where n is the number of elements in the array
//
// If an array has 5 elements, the first element will be at
//   array[0] and the last element will be at array[4]

// You may include array elements in expressions
// 
clearScreen()
for(i=0;i<a.length;i++) {
  drawText( 0, i*12, a[i] )          // Just show the array element value
  drawText(45, i*12, a[i] + 10)      // Add 10 to the array element value
  drawText(90, i*12, a[i] * a[i])    // Calculate the square of the array element value
}
sleep(1000)
drawText(80,100, "press a key")
waitForPress()

// Building arrays using array.length
// The length of the array can be used to append elements to an existing array.
// Since the last element of an array is [n-1], any references to [n] will append to the array.
b=[]                     // b is: []
b[b.length]=10           // b is: [10]
b[b.length]=20           // b is: [10, 20]
b[b.length]=30           // b is: [10, 20, 30]
alert(b.toString())      // 10,20,30

// Since [n] appends to an array, you can add elements onto an existing array
d=[1,2,3]
d[d.length]=10           // d is: [1, 2, 3, 10]
d[d.length]=20           // d is: [1, 2, 3, 10, 20]
d[d.length]=30           // d is: [1, 2, 3, 10, 20, 30]
d[d.length]=40           // d is: [1, 2, 3, 10, 20, 30, 40]
alert(d.toString())      // 1,2,3,10,20,30,40

// You can append any number of elements to an array
e=[12]                   // Creating an array literal with one element: the number 12
alert(e.length)          // 1
alert(e[0])              // 12     The first element of array 'e' is e[0] and it has the numeric value of 12
alert(e[0] / 2)          // 6      If I divide e[0] by 2 then I will get (12/2) which is 6
alert(e[12])             // undefined    Since 'e' only has one element, anything referenced after e[0] will be 'undefined'


e[12]=0                  // I could define what e[12] is.  In this case I am defining it as zero.
                         // e is: [12,,,,,,,,,,,, 0]
                         // By assigning a value to an array element that has not yet been defined,
                         //   JavaScript will create array elements up to the last element being defined.
                         // The length of the array now equals the last element defined plus one.
alert(e.length)          // 13
e[1]=11                  // e is: [12, 11,,,,,,,,,,, 0]
e[2]=10                  // e is: [12, 11, 10,,,,,,,,,, 0]
// Use a for loop to define the remaining elements of array 'e'
for(j=9, i=3; i<e.length; i++, j--) e[i]=j
// Using a for loop to define the remaining values of array 'e'
//   In this example, the incrementing variable i is used to reference which element to define
//   The decrementing variable j is used to determine the value to be assigned to the array element
// e is: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
alert(e[3] + e[9])       // 12     (9+3)
alert(e[10] + 1)         // 3      (2+1)

