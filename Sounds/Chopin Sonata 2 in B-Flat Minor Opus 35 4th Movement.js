// Chopin Sonata #2 in b-flat Minor Opus 35 4th movement (Presto).
// This program will play the Chopin sonata at tempo.
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
note    =[53, 55, 58, 61, 52, 55, 53, 55, 58, 61, 52, 55, 55, 57, 60, 63, 54, 57, 55, 57, 60, 63, 54, 57, 58, 60, 63, 66, 57, 60, 61, 63, 66, 69, 60, 63, 61, 63, 66, 69, 60, 63, 66, 70, 72, 75, 65, 69, 70, 73, 78, 77, 72, 73, 76, 72, 73, 69, 70, 66, 64, 65, 70, 68, 69, 73, 69, 70, 73, 71, 72, 77, 68, 71, 76, 75, 70, 71, 74, 70, 71, 67, 68, 64, 62, 63, 68, 64, 65, 71, 65, 66, 71, 69, 70, 75, 73, 65, 70, 61, 64, 69, 72, 63, 68, 59, 62, 67, 71, 62, 66, 58, 61, 66, 70, 66, 71, 72, 73, 75, 76, 67, 72, 63, 66, 71, 74, 65, 70, 61, 64, 69, 72, 64, 68, 59, 62, 67, 71, 66, 73, 74, 75, 76, 77, 69, 75, 76, 77, 78, 77, 70, 73, 76, 77, 78, 79, 71, 77, 78, 79, 80, 79, 72, 75, 78, 79, 80, 75, 72, 77, 75, 68, 73, 72, 63, 70, 68, 60, 65, 63, 56, 61, 60, 55, 56, 60, 54, 62, 60, 53, 54, 55, 57, 59, 60, 62, 63, 56, 58, 59, 60, 61, 63, 57, 58, 60, 61, 63, 65, 58, 59, 60, 61, 63, 65, 60, 61, 62, 63, 65, 66, 57, 61, 62, 63, 65, 66, 69, 66, 64, 62, 64, 66, 57, 61, 62, 64, 65, 66, 69, 68, 67, 66, 63, 60, 66, 63, 60, 58, 57, 56, 55, 56, 57, 53, 54, 56, 52, 53, 54, 50, 51, 53, 43, 44, 46, 48, 49, 51, 53, 54, 55, 56, 53, 58, 56, 65, 63, 61, 60, 58, 56, 53, 54, 56, 53, 58, 56, 51, 53, 54, 51, 58, 56, 49, 51, 53, 49, 58, 56, 48, 49, 51, 48, 53, 51, 46, 53, 51, 44, 46, 44, 49, 51, 53, 54, 56, 58, 60, 61, 63, 65, 66, 68, 77, 75, 73, 72, 70, 68, 65, 66, 68, 65, 70, 68, 63, 65, 66, 63, 70, 68, 61, 63, 65, 61, 70, 68, 60, 61, 63, 60, 65, 63, 58, 65, 63, 56, 65, 66, 65, 63, 61, 60, 58, 57, 65, 60, 63, 61, 58, 57, 65, 60, 63, 61, 58, 57, 65, 60, 63, 61, 58, 68, 67, 65, 63, 62, 60, 59, 67, 62, 65, 63, 60, 59, 67, 62, 65, 63, 60, 59, 67, 62, 65, 63, 60, 73, 72, 70, 68, 67, 65, 70, 64, 67, 61, 64, 60, 73, 72, 70, 68, 67, 65, 70, 64, 67, 61, 64, 60, 70, 64, 67, 61, 64, 60, 67, 61, 64, 60, 64, 58, 64, 58, 61, 57, 58, 56, 61, 56, 58, 55, 58, 54, 53, 55, 58, 61, 52, 55, 53, 55, 58, 61, 52, 55, 55, 57, 60, 63, 54, 57, 55, 57, 60, 63, 54, 57, 58, 60, 63, 66, 57, 60, 61, 63, 66, 69, 60, 63, 61, 63, 66, 69, 60, 63, 66, 70, 72, 75, 65, 69, 70, 73, 78, 77, 72, 73, 76, 72, 73, 69, 70, 66, 64, 65, 70, 68, 69, 73, 69, 70, 73, 71, 72, 77, 68, 71, 76, 75, 70, 71, 74, 70, 71, 67, 68, 64, 62, 63, 68, 64, 65, 71, 65, 66, 71, 69, 70, 75, 73, 72, 71, 70, 69, 77, 75, 74, 73, 72, 70, 78, 77, 75, 74, 73, 72, 81, 72, 73, 82, 74, 75, 82, 84, 82, 80, 78, 77, 76, 84, 82, 80, 78, 77, 76, 78, 77, 76, 75, 74, 73, 75, 71, 72, 73, 69, 70, 72, 67, 68, 71, 66, 75, 70, 65, 66, 69, 64, 73, 68, 63, 64, 67, 62, 71, 66, 61, 62, 65, 60, 69, 74, 69, 70, 73, 68, 77, 72, 67, 68, 71, 66, 75, 70, 65, 66, 69, 64, 73, 68, 63, 64, 67, 62, 71, 76, 71, 72, 75, 70, 79, 74, 69, 70, 73, 68, 77, 72, 67, 68, 71, 66, 75, 70, 65, 75, 70, 65, 73, 66, 65, 64, 63, 61, 60, 66, 65, 63, 61, 60, 58, 66, 65, 63, 61, 60, 59, 66, 65, 63, 61, 59, 58, 57, 58, 60, 63, 61, 57, 60, 58, 53, 56, 54, 53, 51, 53, 54, 58, 56, 54, 53, 49, 51, 53, 52, 53, 54, 53, 52, 51, 49, 48, 54, 53, 51, 49, 48, 46, 54, 53, 51, 49, 48, 47, 54, 53, 51, 49, 47, 46, 45, 46, 47, 49, 51, 53, 54, 56, 58, 59, 61, 63, 65, 64, 61, 60, 58, 54, 53, 52, 49, 48, 46, 42, 41, 46, 44, 45, 49, 45, 46, 51, 47, 48, 53, 48, 49, 54, 50, 51, 57, 53, 54, 61, 57, 60, 66, 65, 57, 61, 57, 60, 66, 65, 57, 61, 57, 60, 66, 65, 60, 66, 65, 60, 66, 65, 60, 66, 65, 58, 66, 65, 61, 63, 65, 63, 61, 58, 53, 60, 61, 60, 58, 61, 53, 63, 65, 63, 61, 58, 53, 60, 61, 60, 58, 53, 58, 61, 49, 53, 51, 53, 58, 61, 49, 53, 48, 49, 53, 58, 46, 49, 48, 49, 53, 58, 46, 49,   0, 48, 49, 53, 58, 46, 49,   0, 48, 49, 53, 58, 46, 49,  46,  58]
volume  =[35, 29, 30, 30, 33, 31, 37, 30, 31, 32, 34, 33, 40, 33, 35, 36, 34, 36, 40, 34, 34, 35, 34, 36, 45, 35, 38, 43, 39, 38, 41, 39, 39, 43, 39, 39, 49, 42, 39, 40, 42, 43, 50, 40, 41, 44, 44, 44, 56, 45, 49, 46, 45, 45, 50, 46, 45, 43, 47, 36, 40, 37, 44, 45, 45, 45, 47, 44, 45, 46, 45, 45, 48, 43, 45, 44, 40, 38, 51, 43, 42, 43, 45, 43, 47, 41, 41, 44, 42, 42, 47, 45, 43, 45, 44, 44, 51, 45, 41, 45, 43, 43, 45, 41, 42, 42, 41, 42, 53, 45, 45, 42, 42, 43, 50, 45, 42, 46, 51, 54, 57, 45, 45, 43, 44, 44, 48, 42, 43, 43, 45, 45, 49, 45, 45, 45, 43, 43, 50, 45, 45, 50, 52, 54, 56, 45, 45, 54, 53, 56, 61, 46, 50, 55, 57, 59, 64, 47, 54, 60, 60, 65, 68, 51, 60, 64, 67, 68, 68, 58, 51, 53, 49, 52, 57, 45, 47, 50, 47, 47, 56, 45, 45, 45, 42, 43, 47, 39, 38, 40, 39, 37, 42, 38, 35, 36, 38, 42, 45, 36, 34, 38, 37, 37, 48, 41, 38, 43, 41, 42, 48, 38, 39, 43, 39, 43, 51, 43, 39, 44, 43, 45, 51, 43, 43, 47, 45, 48, 59, 48, 48, 49, 45, 46, 51, 43, 41, 45, 40, 45, 51, 44, 40, 46, 43, 44, 49, 43, 43, 45, 44, 43, 46, 39, 39, 39, 39, 39, 44, 38, 37, 38, 36, 36, 38, 34, 34, 36, 38, 39, 41, 40, 41, 42, 41, 41, 46, 49, 47, 49, 46, 46, 45, 43, 43, 43, 46, 45, 51, 44, 44, 45, 43, 53, 51, 46, 47, 51, 47, 53, 51, 44, 44, 46, 43, 50, 48, 46, 47, 51, 47, 47, 51, 40, 42, 43, 45, 46, 48, 51, 48, 53, 50, 56, 59, 60, 57, 56, 54, 54, 56, 51, 51, 52, 51, 51, 56, 48, 48, 53, 51, 51, 52, 46, 46, 51, 49, 56, 52, 48, 40, 48, 47, 43, 51, 46, 47, 49, 48, 49, 53, 49, 51, 49, 48, 44, 54, 47, 46, 49, 47, 47, 54, 47, 46, 47, 45, 45, 54, 47, 46, 49, 47, 45, 53, 47, 45, 49, 45, 47, 49, 47, 43, 47, 47, 47, 49, 47, 44, 51, 47, 47, 54, 47, 43, 51, 47, 47, 67, 58, 56, 56, 55, 55, 61, 55, 54, 66, 55, 52, 67, 56, 59, 58, 56, 56, 62, 55, 56, 54, 55, 57, 59, 53, 53, 51, 48, 48, 57, 51, 49, 50, 48, 48, 59, 50, 48, 51, 49, 50, 51, 48, 48, 50, 48, 41, 51, 46, 45, 45, 45, 46, 51, 46, 45, 45, 45, 46, 53, 45, 46, 47, 45, 48, 53, 47, 46, 49, 48, 46, 55, 47, 48, 49, 48, 45, 50, 49, 48, 49, 49, 50, 55, 49, 48, 50, 49, 50, 57, 51, 52, 54, 54, 55, 65, 56, 55, 55, 54, 55, 62, 57, 55, 56, 55, 51, 56, 51, 51, 56, 51, 51, 58, 55, 56, 59, 56, 53, 65, 59, 56, 62, 58, 54, 62, 56, 53, 58, 51, 51, 56, 51, 51, 56, 53, 54, 61, 55, 56, 64, 56, 58, 64, 53, 47, 56, 52, 56, 64, 55, 55, 57, 54, 58, 67, 59, 56, 60, 58, 63, 68, 62, 62, 71, 62, 67, 72, 60, 56, 62, 60, 60, 72, 62, 59, 63, 59, 58, 67, 58, 56, 60, 56, 55, 58, 54, 50, 51, 47, 50, 53, 45, 45, 46, 42, 39, 46, 42, 45, 43, 41, 39, 51, 44, 44, 43, 41, 41, 47, 40, 40, 44, 38, 40, 49, 42, 45, 48, 42, 39, 47, 42, 42, 44, 43, 39, 47, 39, 41, 41, 39, 39, 44, 39, 41, 42, 39, 43, 53, 39, 45, 45, 39, 42, 51, 38, 42, 43, 38, 39, 49, 38, 39, 39, 36, 37, 47, 36, 39, 41, 34, 39, 49, 42, 39, 43, 43, 42, 49, 42, 42, 45, 44, 42, 49, 45, 42, 45, 44, 42, 49, 45, 42, 45, 44, 42, 45, 43, 43, 44, 41, 40, 45, 40, 40, 41, 40, 40, 45, 43, 43, 44, 41, 40, 44, 40, 40, 43, 40, 40, 44, 39, 39, 39, 36, 37, 44, 39, 39, 39, 36, 37, 44, 39, 39, 39, 36, 37, 44, 39, 39, 39, 36, 37, 41, 36, 37, 45, 39, 40, 49, 45, 46, 54, 51, 51, 58, 53, 46, 50, 49, 44, 49, 43, 39, 43, 36, 34, 39, 33, 33, 36, 34, 34, 41, 37, 37, 39, 39, 39, 43, 39, 39, 41, 39, 39, 46, 40, 39, 40, 42, 40, 45, 39, 41, 42, 43, 43, 45, 39, 41, 43, 43, 43, 47, 43, 40, 41, 43, 40, 45, 43, 40, 44, 43, 43, 45, 39, 39, 40, 40, 44, 39, 39, 40, 39, 40, 45, 39, 39, 41, 40, 40, 44, 39, 39, 40, 40, 40, 39, 34, 37, 35, 35, 44, 39, 34, 36, 35, 35, 44, 39, 34, 36, 35, 35, 44, 39, 34, 36, 35, 35,   0, 44, 39, 34, 35, 35, 35,   0, 57, 51, 46, 47, 48, 49, 100,  66]
duration=[32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 192, 32, 32, 32, 32, 32, 32, 192, 32, 32, 32, 32, 32, 32, 192, 1000]

// For each note, 
for(i=0; i<note.length; i++) {
  // Play each note in the array
  theNote=freq[note[i]+12]                    // The notes are being transposed up 12 half-steps (1-octave) because the EV3 Brick has difficulty rendering tones that are below 200 herz
                                              // Without this transposition, the brick would repeat the same bass frequency which is at the low end of the sound spectrum that the brick can produce
  drawText(0, 10, 'Index: '+i+'  ', 2)        // This index represents the index of the note within this piece
  drawText(0, 40, 'MIDI: '+note[i]+'  ', 2)   // Show the MIDI note number
  drawText(0, 70, 'Freq: '+theNote+'    ', 2) // Show the frequency being played
  beep(volume[i], theNote, duration[i])
  sleep(duration[i])
}
// Approximately 900 notes are played in 90 seconds.  This is the tempo the original piece is to be played.
// If you want to slow the tempo, you can multiply the duration[i] by a value such as:
//   duration[i]*4
// If you adjust the duration, note that the duration is used in both the beep() and the sleep() function.
// While at this tempo the notes are going to be played 'legato' (i.e., without breaks), 
//   you can change this to 'staccato' by making the sleep() duration slightly longer than the beep() duration.  Such as:
//     beep(volume[i], theNote, duration[i]*2)
//     sleep(duration[i]*4)
//
