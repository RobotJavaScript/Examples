// The drawText() function requires 3 arguments (parameters): x, y, text
// A 4th argument, to specify font size, is optional
// The font sizes are specified as an integer from 0 to 2 as follows:
//    0 - smallest font
//    1 - medium font
//    2 - largest font
// The display area is 178 pixels (width) by 128 pixels (height)
// When displaying text using the smallest font (fontSize=0), each row of text will use 15 pixels of vertical space.
// When displaying text using the bolded font (fontSize=1), each row of text will use 15 pixels of vertical space.
// When displaying text using the largest font (fontSize=2), each row of text will use 25 pixels of vertical space.


drawText( 10, 10, "drawText()", 2)    // fontSize = 2
line( 0, 30, 178, 30 )
drawText( 0, 35, "Arguments:", 1)     // fontSize = 1
drawText( 20, 55, "x-coordinate")     // fontSize = 0
drawText( 20, 70, "y-coordinate")     // fontSize = 0
drawText( 20, 85, "text to display")  // fontSize = 0
drawText( 20, 100, "fontSize")        // fontSize = 0

waitForPress()

// In the examples below, the variable 'i' is used as the value for the y-coordinate in the drawText() function
//   variable 'j' is used as an indicator of the row number
// In the for() loops, variable 'i' is incremented by the pixel height of the font.
// Variable 'j' is simply incremented by one.

// Display rows of text in font size 0
clearScreen()
for(i=10, j=1; i<120; i+=15, j++) drawText( 10, i, "Row: "+j)
waitForPress()

// Display rows of text in font size 1 (bolded)
clearScreen()
for(i=10, j=1; i<120; i+=15, j++) drawText( 10, i, "Row: "+j, 1)
waitForPress()

// Display rows of text in font size 2
clearScreen()
for(i=10, j=1; i<120; i+=25, j++) drawText( 10, i, "Row: "+j, 2)
waitForPress()

// Reversed Text
// To draw text with reversed colors (i.e., black background and white text), you need to create a background area onto which you will draw the white text.
// In the examples below, a fillRect() function is used to draw the background
// Display rows of text in font size 0
clearScreen()
for(i=10, j=1; i<120; i+=15, j++) { fillRect(0, i, 178, i+13); drawWhiteText( 10, i, "Row: "+j) }
waitForPress()

// Display rows of text in font size 1 (bolded)
clearScreen()
for(i=10, j=1; i<120; i+=15, j++) { fillRect(0, i, 178, i+13); drawWhiteText( 10, i, "Row: "+j, 1) }
waitForPress()

// Display rows of text in font size 2
clearScreen()
for(i=10, j=1; i<120; i+=25, j++) { fillRect(0, i, 178, i+23); drawWhiteText( 10, i, "Row: "+j, 2) }
waitForPress()

