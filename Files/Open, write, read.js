// This program demonstrates creating, 
//    writing to, and reading from a
//    text file.  A file "handle" is
//    generated by the fileOpenWrite()
//    and fileOpenRead() functions.  
//    This handle is then used in the
//    fileWriteLine() and fileReadLine()
//    functions.

var myHandle = fileOpenWrite("test.txt")        // Open a file for writing
fileWriteLine(myHandle, "This is a test!")  // Write a line of text to it
fileClose(myHandle)                         // Close the file

myHandle = fileOpenRead("test.txt")         // Open a file for reading
var a=fileReadLine(myHandle)                // Read a line of text from the file
fileClose(myHandle)                         // Close the file

alert(a)                                    // Show the text read


