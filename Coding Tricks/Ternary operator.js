// Ternary Operator -- A shortcut for 'if-then-else'
//
// The classic if-then-else expression contains several components:
//     if(condition)
//        true expression
//     else
//        false expression
//
// The ternary operator can represent this expression using the symbols '?' and ':' as follows
//     condition ? true expression : false expression
//
// Example:
aVar = 5
alert( aVar>0 ? 'aVar greater than zero' : 'aVar not greater than zero' )
//
// Example:
driveFast = false
powerLevel = driveFast ? 80 : 30
alert(powerLevel)

// The true and false expressions may be functions as in

driveFast ? setLED(2) : setLED(0)
// which is equivalent to...
setLED(driveFast ? 2 : 0)


a=1
b=2
c=3

// Ternary expressions may be embedded within one another as in
d = a>0 ? b>1 ? c>4 ? 10 : b>3 ? 20 : 30 : 40 : 50

// Adding parentheses can help make the code more readable
d = a>0 ? (b>1 ? (c>4 ? 10 : (b>3 ? 20 : 30)) : 40) : 50
alert(d)
// Embedded ternary expressions can make the code difficult to read
// The equivalent in if-then-else code would be...
if(a>0) {
  if(b>1) {
    if(c>4) { 
      d=10
    } else {
      if(b>3) { 
      	d=20
      } else {
      	d=30
      }
    }
  } else {
    d=40
  }
} else {
  d=50
}



