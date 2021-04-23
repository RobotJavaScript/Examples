var i=1
while(true) {
  setLED( 1 + i )
  i++
  i %= 3
  sleep(200)
}
