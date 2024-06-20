/*  PART 1 - SOME COMPOSITION FUNDAMENTALS */

/* 1.1 - Review strudel basics.. ⏰ 5 mins */ 


// Comments and evaluations..

//update the tempo
const loopAx = register('loopAx', 
  (l, pat) => pat.loopAt(l).chop(l*8).legato(1).mul(speed(0.99))
);

let setbpm = t => setcps(t/4/60)

setbpm(157)

// make a simple pattern
// sound("bd AlesisSR16_sd*4") // mini-notation basics, find a sample, repeat events 

// more complex patterns
//sound("bd:1 hh ~ cp") // select samples using :, add rests using ~, 


// Euclidean rhythms 

// sound("casio:1(3,8)")

/*
E(2,5)=[x . x . .] is a thirteenth century Persian rhythm called Khafif-e-ramal [34]. It is also the metric
pattern of the second movement of Tchaikovsky’s Symphony No. 6 [17]. When it is started on the second
onset ([x . . x .]) it is the metric pattern of Dave Brubeck’s Take Five as well as Mars from The Planets by
Gustav Holst [17].
E(3,4)=[x . x x] is the archetypal pattern of the Cumbia from Colombia [20], as well as a Calypso rhythm
from Trinidad [13]. It is also a thirteenth century Persian rhythm called Khalif-e-saghil [34], as well as the
trochoid choreic rhythmic pattern of ancient Greece [21].
E(3,5)=[x . x . x], when started on the second onset, is another thirteenth century Persian rhythm by the
name of Khafif-e-ramal [34], as well as a Rumanian folk-dance rhythm [25].
E(3,7)=[x . x . x . .] is a Ruchenitza rhythm used in a Bulgarian folk-dance [24]. It is also the metric
pattern of Pink Floyd’s Money [17].
E(3,8)=[x . . x . . x .] is the Cuban tresillo pattern discussed in the preceding [15].
E(4,7)=[x . x . x . x] is another Ruchenitza Bulgarian folk-dance rhythm [24].
E(4,9) = [x . x . x . x . .] is the Aksak rhythm of Turkey [6]. It is also the metric pattern used by Dave
Brubeck in his piece Rondo a la Turk [17].
E(4,11) = [x . . x . . x . . x .] is the metric pattern used by Frank Zappa in his piece titled Outside Now [17].
E(5,6)=[x . x x x x] yields the York-Samai pattern, a popular Arab rhythm, when started on the second
onset [30].
E(5,7)=[x . x x . x x] is the Nawakhat pattern, another popular Arab rhythm [30].
E(5,8)=[x . x x . x x .] is the Cuban cinquillo pattern discussed in the preceding [15]. When it is started
on the second onset it is also the Spanish Tango [13] and a thirteenth century Persian rhythm, the Al-saghilal-sani [34].
E(5,9)=[x . x . x . x . x] is a popular Arab rhythm called Agsag-Samai [30]. When started on the second
onset, it is a drum pattern used by the Venda in South Africa [26], as well as a Rumanian folk-dance
rhythm [25].
E(5,11)=[x . x . x . x . x . .] is the metric pattern used by Moussorgsky in Pictures at an Exhibition [17].
E(5,12) = [x . . x . x . . x . x .] is the Venda clapping pattern of a South African children’s song [24].
E(5,16) = [x . . x . . x . . x . . x . . . .] is the Bossa-Nova rhythm necklace of Brazil. The actual BossaNova rhythm usually starts on the third onset as follows: [x . . x . . x . . . x . . x . .] [31]. However, there are
other starting places as well, as for example [x . . x . . x . . x . . . x . .] [3].
E(7,8) = [x . x x x x x x] is a typical rhythm played on the Bendir (frame drum), and used in the accompaniment of songs of the Tuareg people of Libya [30].


Check out the paper here: 
https://archive.bridgesmathart.org/2005/bridges2005-47.pdf
*/

// Adding functions
// sound("bd:1 cp:2").fast(2)
// sound("bd:1 cp:2").slow(2)
// sound("bd:1 cp:2").chop(8)
// sound("bd sd hh cp").rev()
// sound("bd:1 bd:2").every(4, fast(4))

//  Layers of sound

// sound("bd sd ~ cp:1, casio:0(3,8) casio:1")

// Layers of sound with stack 

// stack(
//   sound("bd:1 sd ~ cp").color("[#5BC0EB #FDE74C #9BC53D ]"), 
//   sound("bd:4(3,8) AlesisSR16_sd*4").color("[#C3423F #7E2E84]")
// )
// .punchcard()

/* 1.2 - Playing sounds from the digital selves sample pack ⏰ 5-10 mins */ 

// How do i download it? 

// https://github.com/lwlsn/digital-selves-samples/tree/main

// https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

// How do i load it into strudel? 
samples({
  k:  ['snd/k/DNC_Kick.wav' ], 
  hjdsynth: ['snd/hjdsynth/bass-armor.wav', 'snd/hjdsynth/bass-elder.wav', 'snd/hjdsynth/bass-juan.wav',
             'snd/hjdsynth/bell-anomal.wav', 'snd/hjdsynth/bell-castan.wav', 'snd/hjdsynth/bell-dingo.wav'],
  gel: ['snd/gel/glass_gel_1.wav', 'snd/gel/glass_gel_2.wav', 'snd/gel/glass_gel_3.wav',
       'snd/gel/glass_gel_4.wav', 'snd/gel/glass_gel_5.wav', 'snd/gel/glass_gel_6.wav',
       'snd/gel/glass_gel_7.wav', 'snd/gel/glass_gel_8.wav', 'snd/gel/glass_gel_9.wav'],
  csubs: ['snd/csubs/sub_with_kick_12_C.wav'],
  hack: ['snd/hackspace/opening-bar.wav'],
  hbass: ['snd/hbass/001.wav','snd/hbass/002.wav'], 
  hkeys: ['snd/hkeys/001.wav', 'snd/hkeys/002.wav', 'snd/hkeys/003.wav', 'snd/hkeys/004.wav'], 
  hbreaks: ['snd/hbreaks/BUMBA.WAV', 'snd/hbreaks/breakcore-ish-drumloop-i-think.wav'], 
  amencutup: ['snd/amencutup/000_AMENCUT_001.wav','snd/amencutup/001_AMENCUT_002.wav', 'snd/amencutup/002_AMENCUT_003.wav',
             'snd/amencutup/003_AMENCUT_004.wav', 'snd/amencutup/004_AMENCUT_005.wav', 'snd/amencutup/005_AMENCUT_006.wav'], 
  ifdrums: ['snd/ifdrums/ignorebd.wav', 'snd/ifdrums/ignorehh.wav', 'snd/ifdrums/ignoresd.wav']
}, 'github:lwlsn/digital-selves-samples/main/');


// Using randomness to select different samples:

// sound("gel*8")
//   .n(rand.range(0,8))
//   .sus(rand.range(0.1, 0.5)).rel(rand.range(0.1,0.5))

// samples({
//     k: [
//       'samples/alk/0001.wav', 
//       'samples/alk/0001b.wav',
//       'samples/alk/0001c.wav',
//       'samples/k/DNC_Kick.wav'
//     ],
//     cp: [
//       'samples/lcp/cp2.mp3'
//     ]
//   }, 'github:lwlsn/lwlsn.github.io/master/');



// Visualising outputs with the punchcard:
// stack(sound("{k:3*2 k:3 ~ k:1 ~ k:3 ~  k:3}%4").color("[#5BC0EB*4 #FDE74C ]")
//     //sound("~ ~ ~ cp").color("[#C3423F]")
//       )
// .punchcard()



/* 1.3 - Creating a complex drum beat through function chaining  ⏰ 5 mins */ 

// s("{k ~ rim ~, ~ ~ hh}%<4 8 16 8>")
//   .rarely(chunk(4, fast(2)))
//   .jux(rev)
//   .off(.25, mul(speed(.8)))
//   .superimpose(
//     x=>x.vowel("<a <e i>>/4").room(2).slow(2).late(.25)
//   )
//   .lastOf(8, mul(speed(-2)))
//    .color("[#70D6FF #e63946 #f1faee #457b9d #1d3557]/12")
//   .punchcard({fold:1,flipTime:1, vertical:1})
  

// Using the stack notation: 

// stack(
//   sound("[ifdrums](5,8)").shape(0.6).gain(0.5).speed(iter(3, "0.5 1 0.75")),
//   sound(" ~ [k(3,8)] ~ k*2"),
//    n("<0 1 4>".add("<1 3 5 2>")).sound("[amencutup amencutup amencutup amencutup]/8")
//   .struct("x(<3 5>,8,<0 2 1>)@2").speed("[1 2]/2") ,
//     sound("RolandTR808_hh(7,8)?").speed(0.7).gain(0.875)
// ).every(8, x=>x.hpf("200 400 800 1200"))
//   .every(5, x=>x.crush(5))

/* 1.4  Melodies and arpeggios ⏰ 5 mins  */  

// You can play with more traditional notation: 
// note("c3 as3 g3 c4")
//   .sound("hjdsynth:0")

// Or work with 'degrees of the scale', if you are not familiar with notation: 
// n("0 2 4 7 2 4 <7 9> <9 13> ")
//   .scale("A3:minor")
//   .sound("hjdsynth:0")

//You could also use randomness here 
  // sound("hjdsynth:3(9,12)")
  //   .note(rand.range(0,7).scale("A:minor"))

  // Make patterns more like a traditional DAW
// note("{c2 c3 [~ g2] ds3}%8")
//   .sound("hjdsynth:4").color("[#70D6FF]" )
//   .punchcard()
  
/* 1.5  Playing with strudel-based synthesisers ⏰ 5 mins  */
  
// stack(
//   n("[0 1 3 [~ 4] 5 6 [~ 7] 8]")
//     .sometimesBy("<0.1 0.5>".slow(16), rev())
//     .chord("Am C".slow(4))
//     .voicing()
//     .s(choose("sawtooth", "square"))
//     .gain("0.6")
//     .add(note("<[0,-12,12] [0,-12.2, <5 7>]>".slow(8)))
//     .add(note("0, -12.1"))
//     .lpf(saw.rangex(100,"<200 1000 5000 20000>".slow(2)).slow(8))
//     .lpe(sine.rangex(10,1))
//     .room(saw.rangex(0.1,1).slow(8))
//     .delay("0.1:0.6:0.7"),
//     sound("{k:3*2 k:3 ~ k:1 ~ k:3 ~  k:3}%4"),
//     sound("~ ~ ~ <cp cp*4>")
//   )





/*  PART 2 - GOING DEEPER */

/* 2.1 - Writing melodies */

// 2.1.1 -- Repetition and expectation ⏰ 5 mins

// David Huron suggests in music theory in his book "Sweet Anticipation," 
// pleasure in music arises when the listener's expectations are violated in a way 
//that is both surprising and yet musically coherent, 
//creating a sense of novelty and engagement.

// Let's explore that:

// note("c2 c3 [~ g2] ds3")
//   .sound("hkeys:0")

// // Change the pattern every n-cycles
// note("c2 c3 [~ g2] ds3")
//   .sound("hkeys:0")

// // Add unexpected elements
// note("<c2 g3(3,8)> <c3*3 c3> [~ g2] ds3")
//   .sound("hkeys:0")

// // Using randomness again
// note("<c2 g3(3,8)> <<c3 c3*2> c3> [~ g2] ds3")
//   .rarely(fast(2))
//   .sound("hkeys:0")

// 2.1.2 -- Interference  ⏰ 5 mins

// Interference patterns in melodies occur when overlapping musical lines create 
//complex harmonic and rhythmic interactions, leading to a rich and textured sound

// Let's explore that:

// Using off to offset the pattern
// note("c2 c3 [~ g2] ds3".off(1/16, x=>x.add(12)).off(1/8, x=>x.add(7)))
//   .sound("hkeys:0")
// .every(4,fast(2))

// OR layering melodies with stack: 

// note("{fs2 ~!2 e2 ~!2 d2 ~!9 a1 ~!6 d2  ~!9 d2 ~!2 }%8")
//   .s("hkeys:0")
//   .punchcard()


// note("{a3 ~!3 gs3 a3 e4 ~ ~!8 cs4 ~!3 d4 cs4 a3 ~ ~!8 }%8")
// .s(choose("hkeys:0"))
//   .delay("0.125:0.25:0.3")
//   .punchcard()


// stack(
//   note("{fs2 ~!2 e2 ~!2 d2 ~!9 a1 ~!6 d2  ~!5 d2 ~!2 }%8".off(1/8, x=>x.add(12)).color("[#70D6FF]" )),
//   note("{a3 ~!3 gs3 a3 e4 ~ ~!8 cs4 ~!3 d4 cs4 a3 ~ ~!8 }%8").color("[#1d3557]")
// )
// .s("hkeys:0")
//   .delay("0.125:0.25:0.3")
//  .punchcard()


// // 2.1.3 -- Call and response ⏰ 5 mins


// stack(
//   note("{fs2 ~!2 e2 ~!2 d2 ~!9 a1 ~!6 d2  ~!5 d2 ~!2 }%8".sometimes(off(1/8, x=>x.add(12))).color("[#70D6FF]" )),
//   note("{a3 ~!3 gs3 a3 e4 ~ ~!8 cs4 ~!3 d4 cs4 a3 ~ ~!8 }%8").color("[#1d3557]")
// )
// .s("hkeys:0").punchcard()

// Response 1 
// note("{[e3 ~] ~ ~ ~ ~ ~ [~ d3] [cs3 cs2] ~ ~ ~ ~ ~ ~ ~ [a3 gs3] [fs2 ~] ~ ~ ~  ~ ~ [~ a2] [e3 fs3] [d2 ~] ~ ~ ~ ~ ~ ~ ~}%4").s("hkeys:2")

// Response 2
// note("{~!4 ~ e3 [~ d4] [cs4 a3] ~!4 ~ [a3 cs4] [e3 ~] [a3 gs3]}%4")
//   .sound("hkeys:3")

// Add these altogether.. with different colours to visualis


//  2.2 Add a bassline and some drums  :)

// note("{fs2 ~ ~ d2 ~!4 a2 ~ ~ d3 ~ ~ [~ a2] ~ fs2 ~ ~ d2 ~!4 a2 ~!3}%4")
//   .sound("hbass:1")

// sound("hbreaks:0")
//   .loopAx(4)

// sound("hbreaks:1")
//   .loopAx(8)


// 2.3 -- Creating compositions ⏰ 20 mins

// Intro - main melody /sfx / lowpass breaks
// Shift - sfx/ a shorter melody. 
// C+R1 -  main melody/ response 1 / sfx / bass / lowpass breaks
//  C+R1 -  main melody/ response 1 / sfx / bass / lowpass breaks / highpass breaks


//  // explain this at the end..? 
// let preintro = stack(
//   s("hack").loopAx(4)
// )

// let intro = stack(
//   sound("gel*8?")
//   .n(rand.range(0,8))
//   .sus(rand.range(0.1, 0.5)).rel(rand.range(0.1,0.5)).gain(0.125),
//   stack(
//   note("{fs2 ~!2 e2 ~!2 d2 ~!9 a1 ~!6 d2  ~!5 d2 ~!2 }%8".off(1/8, x=>x.add(12)).color("[#70D6FF]" )),
//   note("{a3 ~!3 gs3 a3 e4 ~ ~!8 cs4 ~!3 d4 cs4 a3 ~ ~!8 }%8").color("[#1d3557]")
//   )
//   .sound("hkeys:0")
//   .delay("0.125:0.25:0.3"), 
//   sound("hbreaks:0")
//   .loopAx(4)
//   .lpf(rand.range(100, 1000))
//   .lpq(rand)
// )


// let shift = stack(
//   sound("gel*8?")
//   .n(rand.range(0,8))
//   .sus(rand.range(0.1, 0.5)).rel(rand.range(0.1,0.5)).gain(0.125),
//   note("{~ [~ e1] [gs2 [~ cs3]] [a1 cs2]}%4").sound("hkeys:1")
// )

// let pattern2 = stack(
//   stack(
//  stack(
//   note("{fs2 ~!2 e2 ~!2 d2 ~!9 a1 ~!6 d2  ~!5 d2 ~!2 }%8".sometimes(off(1/8, x=>x.add(12))).color("[#70D6FF]" )),
//   note("{a3 ~!3 gs3 a3 e4 ~ ~!8 cs4 ~!3 d4 cs4 a3 ~ ~!8 }%8").color("[#1d3557]")
//   )
//  .s("hkeys:0"),
//   note("{[e3 ~] ~ ~ ~ ~ ~ [~ d3] [cs3 cs2] ~ ~ ~ ~ ~ ~ ~ [a3 gs3] [fs2 ~] ~ ~ ~  ~ ~ [~ a2] [e3 fs3] [d2 ~] ~ ~ ~ ~ ~ ~ ~}%4")
//   .color("[#f1faee]")
//   .s("hkeys:2"),
//   sound("hbreaks:0")
//   .loopAx(4)
//   .lpf(rand.range(100, 1000))
//   .lpq(rand),
//     sound("gel*8?")
//   .n(rand.range(0,8))
//   .sus(rand.range(0.1, 0.5)).rel(rand.range(0.1,0.5)).gain(0.125),
//   note("{fs2 ~ ~ d2 ~!4 a2 ~ ~ d3 ~ ~ [~ a2] ~ fs2 ~ ~ d2 ~!4 a2 ~!3}%4")
//   .sound("hbass:1")
// )
// )


// let drop = stack(
// stack(
//  stack(
//   note("{fs2 ~!2 e2 ~!2 d2 ~!9 a1 ~!6 d2  ~!5 d2 ~!2 }%8".sometimes(off(1/8, x=>x.add(12))).color("[#70D6FF]" )),
//   note("{a3 ~!3 gs3 a3 e4 ~ ~!8 cs4 ~!3 d4 cs4 a3 ~ ~!8 }%8").color("[#1d3557]")
//   )
//  .s("hkeys:0"),
//   note("{[e3 ~] ~ ~ ~ ~ ~ [~ d3] [cs3 cs2] ~ ~ ~ ~ ~ ~ ~ [a3 gs3] [fs2 ~] ~ ~ ~  ~ ~ [~ a2] [e3 fs3] [d2 ~] ~ ~ ~ ~ ~ ~ ~}%4")
//   .color("[#f1faee]")
//   .s("hkeys:2"),
//   sound("hbreaks:0")
//   .loopAx(4)
//   .lpf(rand.range(100, 1000))
//   .lpq(rand),
//     sound("gel*8?")
//   .n(rand.range(0,8))
//   .sus(rand.range(0.1, 0.5)).rel(rand.range(0.1,0.5)).gain(0.125),
//   note("{fs2 ~ ~ d2 ~!4 a2 ~ ~ d3 ~ ~ [~ a2] ~ fs2 ~ ~ d2 ~!4 a2 ~!3}%4")
//   .sound("hbass:1"),
//   note("{~!4 ~ e3 [~ d4] [cs4 a3] ~!4 ~ [a3 cs4] [e3 ~] [a3 gs3]}%4")
//     .color("[#d62828]")
//     .sound("hkeys:3")
//   .delay("0.33:0.25:0.2")
//   .gain(0.5),
//   s("{k ~ rim ~, ~ ~ hh}%<4 8 16 8>")
//   .rarely(chunk(4, fast(2)))
//   .jux(rev)
//   .off(.25, mul(speed(.8)))
//   .superimpose(
//     x=>x.vowel("<a <e i>>/4").room(2).slow(2).late(.25)
//   )
//   .lastOf(8, mul(speed(-2))).gain(0.5)
// )
// )
  
// arrange(
//   [8, preintro],
//   [7, intro],
//   [1, shift], 
//   [7, pattern2],
//   [1, shift], 
//   [8, drop]
// )
//   .theme('tokyoNight')
//   .punchcard()





