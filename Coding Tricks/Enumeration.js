/* Enumeration
   Often it is useful to delineate a sequence of values that represent different types or classes of a 'thing'.
   In many languages (e.g., C, C++, C#) enum is used to enumerate a series of variables.  This means, to assign
   each variable in a list a unique sequential number (usually starting with 0 or 1).  For example, in the C language:
   enum motorPorts { portA = 1, portB, portC, portD };  
   This would assign the number 1 to portA and then each subsequent port would be assigned the next sequential number.
   Some languages such as Perl, JavaScript, and Python, use objects instead of enumerated variables.
   While JavaScript does not use the 'enum' keyword, you can implement enumeration through Objects (see below).
*/
                                 // Enumerate a set of object properties.
const missions = {               // Declare them as immutable (using the 'const' keyword).  This is optional.  You could declare missions using 'var' instead of 'const'.
  M1: 'Climb the mountain',      // An immutable variable remains the same throught the whole program.
  M2: 'Swim the ocean',          // This means that, once defined with the 'const' keyword, you cannot accidently  
  M3: 'Harvest the field',       // change the value later in your program.  This variable is now a constant.
  M4: 'Deliver the merchandise'  // In this example, we are declaring an object ('missions') to contain 4 properties.
}                                // Each property here is declared as a string (e.g., a literal description of the mission).

let currentMission = missions.M2 // As an example, let's assign the currentMission the value of missions.M2 (i.e., 'Swim the ocean').

drawText(10, 10, 'Mission:', 1)  // Show a simple menu
drawText(10, 30, currentMission, 1)
switch(currentMission) {         // Switch on the currentMission
	case missions.M1:            // Use the missions Object with the particular mission property
		alert(currentMission)    // Display which mission is being executed
		// blah blah blah        // Do mission M1 here
		break;                   // Done with this mission
	case missions.M2: 
		alert(currentMission)
		// blah blah blah        // Do mission M2 here
		break;
	case missions.M3: 
		alert(currentMission)
		// blah blah blah        // Do mission M3 here
		break;
	case missions.M4: 
		alert(currentMission)
		// blah blah blah        // Do mission M4 here
		break;
}

// In a full-menu program, a while() loop would be used to allow the user to select other missions
// This example is just to demonstrate the concept of enumeration in JavaScript using an Object and referring to
// the properties of that Object in the switch cases.


