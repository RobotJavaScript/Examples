// Array Methods

// .push()           // Adds to the end of the array
a=[1,2,3]            // Define variable 'a' as an array with 3 elements
a.push(10)           // Lets add another element to the end of the array
a.push(12)
a.push(14)
a.push(16)

alert(a.length)      // 7
alert(a[3])          // 10
alert(a[6])          // 16


// .pop()            // Removes from the end of the array
b=['a','b','c','d','e']
alert(b.length)      // 5
lastOneWas = b.pop() // removes and returns the last one from the list
                     // After popping the last item from the list, 
                     // b is now: ['a','b','c','d']
alert(b.length)      // 4


// .unshift()        // Will add to the beginning of the array
c=['dogs']
alert(c[0])          // dogs
c.unshift('gerbils') // c is now: ['gerbils', 'dogs']
c.unshift('cats')    // c is now: ['cats', 'gerbils', 'dogs']
alert(c[0])          // cats
alert(c.length)      // 3

// .shift()          // Will remove from the beginning of the array
d=['Mercury', 'Venus', 'Earth', 'Mars']
alert(d.length)      // 4
aPlanet = d.shift()  // d is now: ['Venus', 'Earth', 'Mars']
alert(aPlanet)       // Mercury
alert(d.length)      // 3

// Maintaining a First-In-Last-Out (FILO) fixed size list
f=[45, 50, 55, 60, 65]
f.push(70);          // f is now: [45, 50, 55, 60, 65, 70]
f.shift();           // f is now: [50, 55, 60, 65, 70]
f.push(75);          // f is now: [50, 55, 60, 65, 70, 75]
f.shift();           // f is now: [55, 60, 65, 70, 75]
f.push(80);          // f is now: [55, 60, 65, 70, 75, 80]
f.shift();           // f is now: [60, 65, 70, 75, 80]
alert(f[3])          // 75

// Maintaining a Last-In-First-Out (LIFO) list
f=[45, 50, 55, 60, 65]
f.unshift(40)        // f is now: [40, 45, 50, 55, 60, 65]
f.pop()              // f is now: [40, 45, 50, 55, 60]
f.unshift(35)        // f is now: [35, 40, 45, 50, 55, 60]
f.pop()              // f is now: [35, 40, 45, 50, 55]
f.unshift(30)        // f is now: [30, 35, 40, 45, 50, 55]
f.pop()              // f is now: [30, 35, 40, 45, 50]
alert(f[3])          // 45

// Maintaining a Stack -- First-In-Last-Out (FILO) unlimited size list
g=[]
g.push(1)           // g is now: [1]
g.push(2)           // g is now: [1, 2]
g.push(3)           // g is now: [1, 2, 3]
g.push(4)           // g is now: [1, 2, 3, 4]
alert(g.length)     // 4
g.pop()             // g is now: [1, 2, 3]
g.pop()             // g is now: [1, 2]
g.pop()             // g is now: [1]
g.pop()             // g is now: []

alert('Tests completed')
