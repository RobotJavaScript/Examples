// Additional Array Methods: .join() and .toString()
// Both .join() and .toString() perform the same function.
// They scan the array elements and build a string as
// a return value.  The string is each element delimited
// by a comma.  You can specify a different delimiter.

// .toString() examples:
a=['a','b','c','d']
b=a.toString()        // b is: a,b,c,d
alert(b)              // a,b,c,d

c=[10, 11, 12, 13]
alert(c.toString())   // 10,11,12,13

// .join() examples:
d=['cats','dogs']
e=d.join(' and ')
alert(e)              // cats and dogs and birds

f=['first','second','third']
g=f.join('-')
alert(g)              // first-second-third

h=['a','b','c','d']
i=h.join('; ')
alert(i)              // a; b; c; d

j=['This','is','a','test!']
alert(j.join(' '))              // This is a test!
