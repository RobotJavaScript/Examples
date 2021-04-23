// This program will play a variety of arpeggios based on the MIDI index number of the note to be played.
// First, a list of MIDI note frequencies are pushed onto an array.  
// While an array literal would have taken less vertical space to create the array, the .push() method is used here to enable you to see the Note, with its frequency.
// Frequencies for MIDI notes (Musical Instrument Digital Interface)
// The following MIDI note numbers are defined in the MIDI standard and matched to the Middle C (note number 60) as C4.
freq=[]
freq.push(8.18)
freq.push(8.66)
freq.push(9.18)
freq.push(9.72)
freq.push(10.3)
freq.push(10.91)
freq.push(11.56)
freq.push(12.25)
freq.push(12.98)
freq.push(13.75)
freq.push(14.57)
freq.push(15.43)
freq.push(16.35)  // C0 (Octave 0)
freq.push(17.32)
freq.push(18.35)  // D0
freq.push(19.45)
freq.push(20.60)  // E0
freq.push(21.83)  // F0
freq.push(23.12)  
freq.push(24.50)  // G0
freq.push(25.96)
freq.push(27.50)  // A0
freq.push(29.14)
freq.push(30.87)  // B0
freq.push(32.70)  // C1 (Octave 1)
freq.push(34.65)
freq.push(36.71)  // D1
freq.push(38.89)
freq.push(41.20)  // E1
freq.push(43.65)  // F1
freq.push(46.25)
freq.push(49.00)  // G1
freq.push(51.91)
freq.push(55.00)  // A1
freq.push(58.27)
freq.push(61.74)  // B1
freq.push(65.41)  // C2 (Octave 2)
freq.push(69.3)
freq.push(73.42)  // D2
freq.push(77.78)
freq.push(82.41)  // E2
freq.push(87.31)  // F2
freq.push(92.50)
freq.push(98.00)  // G2
freq.push(103.83)
freq.push(110.00) // A2
freq.push(116.54)
freq.push(123.47) // B2
freq.push(130.81) // C3 (Octave 3)
freq.push(138.59)
freq.push(146.83) // D3
freq.push(155.56)
freq.push(164.81) // E3
freq.push(174.61) // F3
freq.push(185.00)    
freq.push(196.00)  // G3
freq.push(207.65)
freq.push(220.00)  // A3
freq.push(233.08)
freq.push(246.94)  // B3
freq.push(261.63)  // C4 (Octave 4)
freq.push(277.18)
freq.push(293.66)  // D4
freq.push(311.13)
freq.push(329.63)  // E4
freq.push(349.23)  // F4
freq.push(369.99)
freq.push(392.00)  // G4
freq.push(415.30)
freq.push(440.00)  // A4
freq.push(466.16)
freq.push(493.88)  // B4
freq.push(523.25)  // C5 (Octave 5)
freq.push(554.37)
freq.push(587.33)  // D5
freq.push(622.25)
freq.push(659.26)  // E5
freq.push(698.46)  // F5
freq.push(739.99)  
freq.push(783.99)  // G5
freq.push(830.61)
freq.push(880.00)  // A5
freq.push(932.33) 
freq.push(987.77)  // B5
freq.push(1046.5)  // C6
freq.push(1108.73)
freq.push(1174.66) // D6
freq.push(1244.51)
freq.push(1318.51) // E6
freq.push(1396.91) // F6
freq.push(1479.98)
freq.push(1567.98) // G6
freq.push(1661.22)
freq.push(1760.00) // A6
freq.push(1864.66)
freq.push(1975.53) // B6
freq.push(2093.00) // C7
freq.push(2217.46)
freq.push(2349.32) // D7
freq.push(2489.02)
freq.push(2637.02) // E7
freq.push(2793.83) // F7
freq.push(2959.96)
freq.push(3135.96) // G7
freq.push(3322.44)
freq.push(3520.00) // A7
freq.push(3729.31)
freq.push(3951.07) // B7
freq.push(4186.01) // C8
freq.push(4434.92)
freq.push(4698.64) // D8
freq.push(4978.03)
freq.push(5274.04) // E8
freq.push(5587.65) // F8
freq.push(5919.91)
freq.push(6271.93) // G8
freq.push(6644.88)
freq.push(7040.00) // A8
freq.push(7458.62)
freq.push(7902.13) // B8
freq.push(8372.02) // C9
freq.push(8869.84)
freq.push(9397.27)
freq.push(9956.06)
freq.push(10548.08)
freq.push(11175.30)
freq.push(11839.82)
freq.push(12543.85)

// Next, we define a sequence of arpeggios
// Create a 2-dimensional array
   // Dimension 1 = arpeggios
   // Dimension 2 = notes in each apeggio
// Each array element in the sequence array is a pointer (index) of the MIDI note to be played
sequence=[]
sequence.push([67, 74, 79, 83, 86, 91, 91, 86, 83, 79, 74, 71]) // G-Major arpeggio starting on G4
sequence.push([67, 71, 75, 79, 87, 91, 91, 87, 83, 79, 75, 71])
sequence.push([67, 72, 76, 79, 84, 91, 91, 88, 84, 79, 76, 72])
sequence.push([67, 70, 76, 79, 84, 91, 91, 88, 82, 79, 76, 70])
sequence.push([67, 75, 79, 82, 87, 91, 91, 87, 82, 79, 75, 70])
sequence.push([67, 73, 79, 85, 88, 91, 91, 88, 85, 79, 76, 73])
sequence.push([67, 72, 79, 84, 88, 91, 91, 88, 84, 79, 76, 72])
sequence.push([67, 70, 76, 79, 88, 91, 91, 88, 82, 79, 76, 70])
sequence.push([67, 75, 79, 82, 87, 91, 91, 87, 82, 79, 75, 70])
sequence.push([67, 74, 79, 83, 86, 91, 91, 86, 83, 79, 74, 71])

// For each sequence, 
for(i=0; i<sequence.length; i++) {
  // Play each note in the sequence
  for(j=0; j<sequence[i].length; j++) {
    beep(20, freq[sequence[i][j]]); sleep(100);
  }
}
beep(20, freq[sequence[0][0]]);
sleep(1000)

// You can transpose these arpeggios to a different key simply by adding or subtracting from the MIDI index number. 
// 
// The sequence below would be transposed from G to C, 
/*------
for(i=0; i<sequence.length; i++) {
  // Play each note in the sequence
  for(j=0; j<sequence[i].length; j++) {
    beep(20, freq[sequence[i][j] – 7 ]);   // Subtracting 7 to transpose down 7 half-steps (from G down to C) 
    sleep(100); 
  }
}
beep(20, freq[sequence[0][0] - 7 ]);
sleep(1000)
-----*/
