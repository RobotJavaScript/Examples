// Johann Sebastian Bach - Prelude 2 in C-Minor.
// First, a list of MIDI note frequencies are pushed onto an array.  
// While an array literal would have taken less vertical space to create the array, 
//   the .push() method is used here to enable you to see the Note, with its frequency.
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
freq.push(36.71)  // D4
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

// Next, we define a sequence of notes
// Create 3 one-dimensional arrays (note, volume, duration)
// Each array element in the note array is a pointer (index) of the MIDI note to be played
note    =[72, 63, 62, 63, 60, 63, 62, 63, 72, 63, 62, 63, 60, 63, 62, 63, 68, 65, 64, 65, 60, 65, 64, 65, 68, 65, 64, 65, 60, 65, 64, 65, 71, 65, 63, 65, 62, 65, 63, 65, 71, 65, 63, 65, 62, 65, 63, 65, 72, 67, 65, 67, 63, 67, 65, 67, 72, 67, 65, 67, 63, 67, 65, 67, 75, 68, 67, 68, 63, 68, 67, 68, 75, 68, 67, 68, 63, 68, 67, 68, 74, 66, 64, 66, 62, 66, 64, 66, 74, 66, 64, 66, 62, 66, 64, 66, 74, 67, 66, 67, 62, 67, 66, 67, 74, 67, 66, 67, 62, 67, 66, 67, 72, 64, 62, 64, 60, 64, 62, 64, 72, 64, 62, 64, 60, 64, 62, 64, 72, 65, 64, 65, 60, 65, 64, 65, 72, 65, 64, 65, 60, 65, 64, 65, 70, 65, 63, 65, 62, 65, 63, 65, 70, 65, 63, 65, 62, 65, 63, 65, 70, 67, 65, 67, 63, 67, 65, 67, 70, 67, 65, 67, 63, 67, 65, 67, 68, 67, 65, 67, 63, 67, 65, 67, 68, 67, 65, 67, 63, 67, 65, 67, 68, 62, 60, 62, 58, 62, 60, 62, 68, 62, 60, 62, 58, 62, 60, 62, 67, 58, 55, 58, 63, 58, 55, 58, 67, 58, 55, 58, 63, 58, 56, 58, 65, 60, 58, 60, 57, 60, 58, 60, 65, 60, 58, 60, 57, 60, 58, 60, 65, 62, 60, 62, 59, 62, 60, 62, 65, 62, 60, 62, 59, 62, 60, 62, 65, 62, 60, 62, 59, 62, 60, 62, 65, 62, 60, 62, 59, 62, 60, 62, 63, 60, 59, 60, 55, 60, 59, 60, 63, 60, 59, 60, 55, 60, 59, 60, 53, 63, 62, 63, 65, 63, 62, 63, 53, 63, 62, 63, 65, 63, 62, 63, 54, 60, 59, 60, 63, 60, 59, 60, 54, 60, 59, 60, 63, 60, 59, 60, 63, 60, 59, 60, 55, 60, 59, 60, 63, 60, 59, 60, 55, 60, 59, 60, 66, 60, 59, 60, 57, 60, 59, 60, 66, 60, 59, 60, 57, 60, 59, 60, 67, 60, 59, 60, 62, 60, 59, 60, 67, 60, 59, 60, 62, 60, 59, 60, 68, 60, 59, 60, 62, 60, 59, 60, 68, 60, 59, 60, 62, 60, 59, 60, 43, 47, 50, 53, 56, 53, 52, 53, 59, 53, 62, 59, 56, 53, 52, 53, 43, 48, 51, 55, 60, 55, 54, 55, 63, 60, 67, 63, 60, 56, 55, 56, 43, 45, 54, 60, 63, 60, 59, 60, 66, 60, 69, 66, 63, 60, 59, 60, 43, 74, 72, 74, 75, 72, 71, 72, 69, 72, 71, 72, 74, 71, 69, 71, 67, 71, 69, 71, 72, 69, 67, 69, 66, 69, 67, 69, 71, 67, 66, 67, 62, 79, 77, 79, 80, 77, 75, 77, 74, 77, 75, 77, 79, 75, 74, 75, 72, 75, 74, 75, 77, 74, 72, 74, 71, 74, 72, 74, 75, 72, 71, 72, 67, 72, 71, 72, 68, 77, 75, 77, 67, 75, 74, 75, 65, 74, 72, 74, 63, 72, 71, 72, 68, 65, 63, 65, 67, 63, 62, 63, 65, 62, 60, 62, 64, 48, 60, 62, 64, 65, 67, 68, 70, 72, 70, 68, 67, 65, 67, 64, 65, 64, 65, 67, 65, 64, 65, 67, 68, 67, 65, 63, 62, 63, 65, 62, 63, 65, 59, 47, 50, 53, 56, 55, 53, 59, 53, 62, 53, 59, 56, 55, 53, 52, 61, 58, 55, 60, 56, 53, 56, 55, 58, 55, 52, 56, 53, 50, 53, 52, 55, 52, 48, 53, 50, 47, 50, 36, 43, 48, 50, 52, 55, 58, 55, 56, 60, 65, 62, 65, 68, 72, 71, 72, 67, 65, 62, 64]
volume  =[16, 12, 19, 20, 17, 20, 20, 20, 25, 17, 19, 20, 17, 20, 17, 20, 23, 18, 18, 20, 16, 21, 20, 19, 21, 16, 20, 18, 15, 22, 19, 20, 22, 16, 16, 20, 20, 20, 17, 18, 22, 17, 18, 20, 17, 21, 20, 20, 23, 19, 19, 21, 17, 20, 18, 18, 22, 16, 17, 22, 17, 22, 18, 20, 22, 16, 20, 20, 18, 21, 18, 23, 22, 16, 19, 20, 16, 22, 19, 20, 22, 16, 18, 22, 19, 20, 18, 21, 23, 17, 18, 20, 18, 18, 19, 20, 22, 18, 18, 21, 16, 21, 17, 21, 22, 17, 18, 20, 16, 23, 18, 20, 20, 14, 15, 21, 17, 20, 18, 20, 23, 16, 18, 20, 17, 20, 18, 20, 24, 15, 16, 20, 18, 22, 20, 21, 22, 17, 18, 20, 17, 22, 17, 20, 23, 17, 18, 20, 18, 20, 18, 21, 20, 18, 18, 20, 17, 20, 19, 21, 22, 19, 19, 20, 19, 21, 18, 21, 22, 19, 17, 20, 16, 20, 19, 23, 15, 15, 14, 14, 12, 16, 13, 16, 17, 13, 13, 15, 13, 12, 14, 15, 20, 10, 13, 16, 14, 16, 14, 14, 18, 16, 14, 17, 16, 17, 15, 14, 16, 14, 12, 17, 17, 16, 12, 15, 20, 18, 12, 16, 21, 15, 17, 18, 21, 16, 16, 18, 18, 18, 17, 18, 18, 15, 18, 19, 17, 18, 18, 17, 19, 16, 16, 18, 18, 18, 17, 20, 18, 17, 16, 18, 15, 20, 17, 18, 19, 16, 14, 18, 16, 20, 16, 17, 21, 16, 16, 16, 15, 16, 17, 16, 16, 16, 14, 16, 16, 16, 13, 15, 16, 14, 14, 14, 12, 15, 14, 14, 15, 16, 14, 15, 14, 14, 14, 14, 16, 17, 12, 16, 14, 12, 12, 15, 14, 16, 12, 16, 12, 12, 14, 14, 15, 15, 11, 16, 15, 13, 13, 15, 18, 12, 14, 14, 12, 18, 14, 15, 22, 12, 15, 17, 11, 17, 14, 18, 18, 13, 15, 17, 15, 20, 18, 17, 20, 14, 15, 18, 16, 20, 17, 18, 21, 15, 16, 17, 20, 16, 19, 19, 21, 17, 18, 19, 19, 17, 19, 19, 22, 16, 16, 20, 20, 20, 19, 21, 24, 19, 20, 22, 20, 18, 21, 22, 18, 22, 22, 18, 22, 19, 19, 20, 21, 19, 26, 23, 20, 16, 16, 18, 18, 22, 22, 19, 21, 19, 20, 23, 24, 20, 24, 20, 18, 15, 17, 17, 18, 18, 18, 18, 22, 20, 19, 22, 24, 18, 24, 18, 18, 14, 14, 19, 26, 18, 19, 21, 23, 19, 18, 20, 18, 21, 19, 20, 23, 20, 19, 21, 18, 22, 18, 23, 24, 18, 19, 22, 19, 20, 20, 22, 21, 17, 19, 19, 18, 27, 20, 22, 20, 19, 21, 23, 21, 21, 20, 23, 22, 20, 19, 20, 17, 23, 18, 22, 21, 18, 20, 20, 19, 20, 20, 22, 22, 18, 20, 19, 18, 22, 20, 20, 18, 21, 15, 16, 16, 19, 16, 17, 16, 19, 14, 18, 15, 18, 15, 16, 18, 14, 16, 17, 21, 15, 14, 18, 22, 16, 16, 18, 23, 24, 18, 23, 23, 20, 22, 22, 22, 21, 20, 20, 20, 20, 21, 20, 25, 19, 18, 23, 20, 20, 20, 22, 22, 20, 20, 20, 20, 22, 22, 19, 22, 22, 21, 18, 18, 21, 21, 21, 19, 23, 18, 24, 19, 22, 21, 20, 20, 21, 26, 20, 20, 24, 20, 21, 20, 20, 22, 20, 19, 21, 19, 19, 20, 20, 21, 20, 21, 22, 18, 20, 20, 20, 20, 20, 18, 20, 21, 23, 22, 23, 24, 25, 18, 27, 28, 26, 21, 24, 21, 20, 21, 25]
duration=[144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 132, 144, 144, 144, 132, 144, 144, 144, 132, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 156, 156, 156, 156, 180, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 180, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 156, 156, 156, 156, 180, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 480, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 144, 144, 144, 180, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 144, 144, 144, 180, 144, 144, 144, 180, 132, 132, 132, 180, 132, 132, 132, 180, 132, 132, 132, 180, 132, 132, 132, 180, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 36, 306, 72, 72, 72, 48, 48, 48, 48, 48, 48, 48, 48, 144, 72, 72, 30, 30, 306, 72, 72, 72, 72, 72, 72, 72, 48, 48, 48, 48, 48, 48, 48, 48, 132, 132, 132, 132, 132, 132, 132, 138, 138, 138, 138, 138, 138, 138, 138, 144, 144, 144, 144, 144, 144, 144, 144, 144, 150, 150, 150, 150, 150, 156, 156, 156, 156, 156, 156, 162, 162, 162, 162, 162, 162, 168, 168, 168, 168, 168, 168, 174, 174, 174, 174, 174, 174, 174, 192, 192, 192, 192, 192, 864]

// For each note, 
for(i=0; i<note.length; i++) {
  // Play each note in the array
  theNote=freq[note[i]+12]                    // The notes are being transposed up 12 half-steps (1-octave) because the EV3 Brick has difficulty rendering tones that are below 200 herz
                                              // Without this transposition, the brick would repeat the same bass frequency which is at the low end of the sound spectrum that the brick can produce
  drawText(0, 10, 'Index: '+i+'  ', 2)        // This index represents the index of the note within this piece
  drawText(0, 40, 'MIDI: '+note[i]+'  ', 2)   // Show the MIDI note number
  drawText(0, 70, 'Freq: '+theNote+'    ', 2) // Show the frequency being played
  beep(volume[i]*0.6, theNote, duration[i])
  sleep(duration[i])
}

// If you want to adjust the volume, you can multiply the volume[i] by a value such as:
//   volume[i]*1    or   volume[i]*0.2
// If you adjust the duration, note that the duration is used in both the beep() and the sleep() function.
// While at this tempo the notes are going to be played 'legato' (i.e., without breaks), 
//   you can change this to 'staccato' by making the sleep() duration slightly longer than the beep() duration.  Such as:
//     beep(volume[i], theNote, duration[i]*2)
//     sleep(duration[i]*4)
//

