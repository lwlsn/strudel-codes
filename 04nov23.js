// note("~ [~ gs5] [gs5 g5] [g5 f5] f5 f5 g5 [g5 g5] [~ gs5] [~ gs5] [gs5 g5] [g5 f5] f5 [gs5 as5] [~ gs5] [g5 [gs5 gs5]]")
//   .slow(4)
// .s("piano")
// .cutoff(500)
// //.delay(0.5)
// .room(0.5)
// .pianoroll()


samples({
    k: [
      'samples/alk/0001.wav', 
      'samples/alk/0001b.wav',
      'samples/alk/0001c.wav',
      'samples/k/DNC_Kick.wav'
    ],
    cp: [
      'samples/lcp/cp2.mp3'
    ]
  }, 'github:lwlsn/lwlsn.github.io/master/');
  
  
  // stack(
  //   "{k:3*2 k:3 ~ k:1 ~ k:3 ~  k:3}%4".color('#F5A623'),
  //   "~ ~ ~ cp".color('#673AB7')
  // )
  // .s()
  
  