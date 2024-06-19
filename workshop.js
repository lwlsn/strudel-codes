/*  PART 1 - SOME COMPOSITION FUNDAMENTALS */

/* 1.1 - Review strudel basics.. ⏰ 5 mins */ 

//update the tempo
let setbpm = t => setcps(t/4/60)

setbpm(151)

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

/* 1.2 - Playing sounds from the digital selves sample pack ⏰ 5 mins */ 

// How do i download it? 
// https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

// How do i load it into strudel? 
samples({
  k:  ['snd/k/DNC_Kick.wav' ], 
  hjdsynth: ['snd/hjdsynth/bass-armor.wav', 'snd/hjdsynth/bass-elder.wav', 'snd/hjdsynth/bass-juan.wav',
             'snd/hjdsynth/bell-anomal.wav', 'snd/hjdsynth/bell-castan.wav', 'snd/hjdsynth/bell-dingo.wav'],
  gel: ['snd/gel/glass_gel_1.wav', 'snd/gel/glass_gel_2.wav', 'snd/gel/glass_gel_3.wav',
       'snd/gel/glass_gel_4.wav', 'snd/gel/glass_gel_5.wav', 'snd/gel/glass_gel_6.wav',
       'snd/gel/glass_gel_7.wav', 'snd/gel/glass_gel_8.wav', 'snd/gel/glass_gel_9.wav'],
  csubs: ['snd/csubs/sub_with_kick_12_C.wav']
}, 'github:lwlsn/digital-selves-samples/main/');

// using randomness 
sound("gel*8")
  .n(rand.range(0,8))
  .sus(rand.range(0.1, 0.5)).rel(rand.range(0.1,0.5))

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
  



/* 1.4  Melodies and arpeggios ⏰ 5 mins  */  


  
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

// note("c3 c4 g3 ds4").sound("hjdsynth:5")

// note("c3 c4 g3 ds4").sound("hjdsynth:5").every(4,fast(2))

// note("c3 c4 g3 ds4".off(1/16, x=>x.add(12)).off(1/8, x=>x.add(7)))
//   .sound("hjdsynth:8")
// .every(4,fast(2))

// 2.1.2 -- Interference  ⏰ 5 mins


// note("{fs3 ~!2 e3 ~!2 d3 ~!9 a2 ~!6 d3  ~!9 d3 ~!2 }%8")
//   .s(choose("sawtooth", "square")).punchcard()


// note("{a4 ~!3 gs4 a4 e5 ~ ~!8 cs5 ~!3 d5 cs5 a4 ~ ~!8 }%8")
// .s(choose("sawtooth", "square")).punchcard()


// stack(
//   note("{fs3 ~!2 e3 ~!2 d3 ~!9 a2 ~!6 d3  ~!5 d3 ~!2 }%8".off(1/8, x=>x.add(12)).color("[#70D6FF]" )),
//   note("{a4 ~!3 gs4 a4 e5 ~ ~!8 cs5 ~!3 d5 cs5 a4 ~ ~!8 }%8").color("[#1d3557]")
// )
// .s("hjdsynth:5").theme("tokyoNight").punchcard()

// // 2.1.3 -- Call and response ⏰ 5 mins
// stack(
//   note("{fs3 ~!2 e3 ~!2 d3 ~!9 a2 ~!6 d3  ~!5 d3 ~!2 }%8".off(1/8, x=>x.add(12)).color("[#70D6FF]" )),
//   note("{a4 ~!3 gs4 a4 e5 ~ ~!8 cs5 ~!3 d5 cs5 a4 ~ ~!8 }%8").color("[#1d3557]")
// )
// .s("hjdsynth:0").theme("tokyoNight").punchcard()

// 2.2 -- Creating compositions ⏰ 20 mins

let intro = stack(
  sound("gel*8?")
  .n(rand.range(0,8))
  .sus(rand.range(0.1, 0.5)).rel(rand.range(0.1,0.5)).gain(0.25),
  stack(
    note("{fs3 ~!2 e3 ~!2 d3 ~!9 a2 ~!6 d3  ~!5 d3 ~!2 }%8".off(1/8, x=>x.add(12)).color("[#70D6FF]" )),
    note("{a4 ~!3 gs4 a4 e5 ~ ~!8 cs5 ~!3 d5 cs5 a4 ~ ~!8 }%8").color("[#1d3557]")
  ).sound("hjdsynth:0")
)


let shift = stack(
  note("{~ [~ e2] [gs3 [~ cs4]] [a2 cs3]}%4").sound("hjdsynth:3")
)
  
arrange(
  [7, intro],
  [1, shift]
)


// arrange(
//   [16, build],
//   [2, predrop],
//   [16, drop],
//   [16, verse],
//   [4, postverse]
// ).fontFamily("x3270")




