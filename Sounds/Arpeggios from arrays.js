// This is an experiment in generating 
// Frequencies for notes
freq=[
    392.00, 415.30, 440, 466.16, 493.88, 523.25,  554.37,  587.33,  622.25,  659.26,  698.46,  739.99, /* First octave: g, g-sharp, a, a-sharp, b, c, c-sharp, d, d-sharp, e, f, f-sharp */
    783.99, 830.61, 880, 932.33, 987.77, 1046.5, 1108.73, 1174.66, 1244.51, 1318.51, 1396.91, 1479.98, /* Second octave: g, g-sharp, a, a-sharp, b, c, c-sharp, d, d-sharp, e, f, f-sharp */
   1567.98  /* Third octave: g */
 ]
// Create a 3-dimensional array to store the note information
//   dimension 1: [key]
//   dimension 2: [up/down] (where 0=up and 1=down)
//   dimension 3: [note index] (0-4 or 0-5 depending on the up/down sequence
sequence=[]
sequence.push([[7, 12, 16, 19], [19, 16, 12, 7, 4]])  // G-Major
sequence.push([[4,  8, 12, 20], [20, 16, 12, 8, 4]])  // Augmented
sequence.push([[5,  9, 12, 17], [21, 17, 12, 9, 5]])  // C-Major
sequence.push([[8, 12, 15, 20], [20, 15, 12, 8, 3]])  // E-flat-Major
sequence.push([[7, 12, 16, 19], [19, 16, 12, 7, 4]])  // G-Major

clearScreen()
for(k=0;k<sequence.length; k++) {
  beep(20, freq[0], 150 )   // Tonic
  sleep(200)
  for(l=0; l<4; l++) {      // sequence up
    f=sequence[k][0][l]
    x=freq[f]
    beep(20, x, 150 )
    sleep(200)
  }
  beep(20, freq[24], 150 )  // Tonic 3rd Octave
  sleep(200)
  beep(20, freq[24], 150 )  // Tonic 3rd Octave
  sleep(200)
  for(l=0; l<5; l++) {      // sequence down
    f=sequence[k][1][l]
    x=freq[f]
    beep(20, x, 150 )
    sleep(200)
  }
}
beep(20, freq[0], 1000 )    // Tonic
sleep(1000)

waitForPress()

