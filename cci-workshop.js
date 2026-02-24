// CCI LIVE CODING WORKSHOP


/* How to make a track?  */

/* 1. Run multiple patterns together in the same window:  */

// $: sound("bd ~ sd*2 hh") 

// p2: sound("insect wind jazz metal")

/* Using stack allows you to add effects to both of the patterns without repeating code */

// $: stack(
//   sound("bd ~ sd*2 hh"),
//   sound("insect wind jazz metal")
// ).every(4, fast(2))


/* 2. - Visualising Patterns  */ 

// Using Spiral
// $: stack(
//   sound("bd:1 sd ~ cp").color("[#5BC0EB #FDE74C ~ #9BC53D ]"), 
// )._spiral()


// Using Punchcard 
// $: stack(
//   sound("bd:1 sd ~ cp").fast(2).color("[#5BC0EB #FDE74C ~ #9BC53D ]"),
//   sound("bd:4(3,8) sd:1*4").color("[#C3423F #7E2E84]")
// )
// ._punchcard()



//  Using Scope
// $: note("c a f e").sound("sawtooth")._scope()

// //Using pitchweel
// $: n("0 .. 12").scale("C:major")
// .s("sawtooth")
// .lpf(500)
// ._pitchwheel()



/* 3. Loading your own samples? */ 

// Use the import-sounds tab! 

// Or you can upload from Github

// How do i load it into strudel? 
samples({
  k:  ['snd/k/DNC_Kick.wav' ], 
  gel: ['snd/gel/glass_gel_1.wav', 'snd/gel/glass_gel_2.wav', 'snd/gel/glass_gel_3.wav',
       'snd/gel/glass_gel_4.wav', 'snd/gel/glass_gel_5.wav', 'snd/gel/glass_gel_6.wav',
       'snd/gel/glass_gel_7.wav', 'snd/gel/glass_gel_8.wav', 'snd/gel/glass_gel_9.wav'],
  csubs: ['snd/csubs/sub_with_kick_12_C.wav'],
  hack: ['snd/hackspace/opening-bar.wav'],
  hjdsynth: ['snd/hjdsynth/bass-armor.wav', 'snd/hjdsynth/bass-elder.wav', 'snd/hjdsynth/bass-juan.wav',
              'snd/hjdsynth/bell-anomal.wav', 'snd/hjdsynth/bell-castan.wav', 'snd/hjdsynth/bell-dingo.wav',
            'snd/hjdsynth/bell-undine.wav'],
  hbass: ['snd/hbass/001.wav','snd/hbass/002.wav'], 
  hkeys: ['snd/hkeys/001.wav', 'snd/hkeys/002.wav', 'snd/hkeys/003.wav', 'snd/hkeys/004.wav'], 
  hbreaks: ['snd/hbreaks/BUMBA.WAV', 'snd/hbreaks/breakcore-ish-drumloop-i-think.wav'], 
  dr: ['snd/dr/001_003.WAV'],
  onekpd: ['snd/1kpd/Pad_Grains_Am_DataArcane.wav', 'snd/1kpd/Pad_Grains_C#m_AstralDip.wav']
}, 'github:lwlsn/digital-selves-samples/main/');


/* 4. (Disrupting) Repetition */

// $: note("c3 eb3 g3 as3")
//   .sound("hjdsynth:3")
//   .every(4, fast(2))
// ._punchcard()


/* 5. Playing with symmetry and randomness */

// $: note("c3 eb3 g3 as3")
//   .sound("hjdsynth:3")
//   .every(4, fast(2))
// .every(6,rev)
// ._punchcard()


/* 6. Interference Patterns */


$: "c2 eb2 g2 as2"
  .off(1/8, x=> x.add(7))
  .off(1/16, x=> x.add(12)).slow(2)
    .every(4, fast(2))
.rarely(rev)
  .note().sound("hjdsynth:3")._punchcard()

// $: "c2 eb2 g2 as2"
//   .off(1/8, x=>x.add(7))
//   .off(1/16, x=>x.add(12))
//   .note()
//   .sound("hjdsynth:0")
//   .slow(2)
//   .every(4, fast(2))
// .rarely(rev)
// ._punchcard()












