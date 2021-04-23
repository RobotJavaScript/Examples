// Defining Literal Arrays

// One dimensional literal arrays
a=[]           // Empty array (length=0)
b=[10,15,20]   // Array of numbers (length=3)
c=[3.14159, 2.71828, 1.41421 ]   // Array of real numbers (length=3)
d=['this', 'is', 'a', 'test']    // Array of strings (length=4)
e=['a', 1, 'b', 2, 'c', true]    // Array of mixed data (length=6)
f=[ { x: 10, y: 10 }, { x: 15, y: 25 }, { x: 2, y: 100 } ] // Array of objects {coordinates} (length=3)

// Multi-dimensional literal arrays
g=[[ 0, 1, 2 ], [ 13, 14, 15 ], [ 26, 27, 28 ]]  // Two dimensional array of numbers
h=[0,1,2,3,4,[5,6,7,8,9,10,11,[12,13,14,15,16,[17,18,19,20],21,22],23,24],25,26]  // Large multi-dimensional array
i=[a, b, c, d, e, f, g, h] // Array of arrays

// Tests:
alert(a.length)       // 0
alert(b[1])           // 15
alert(c[2])           // 1.41421
alert(d[0]+" "+d[1]+" "+b[0]) // This is 10
e[1]+=10; alert(e[1]) // 11
alert(e[0]+e[1])      // a11
alert(f[2].y)         // 100
alert(h[4]);          // 4
alert(h[5][2]);       // 7
alert(h[5][7][3]);    // 15
alert(h[5][7][5][2]); // 19
alert(i[3][3])        // test



