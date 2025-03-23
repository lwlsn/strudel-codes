/* Workshop Exercise 2 - Starting Your Own Algorithmic Pattern Compositions! 
 Now you've taken a look at the fundamentals in Strudel, we can learn some more advanced 
 approaches to algorithmic pattern. 
 */

/*2.1 Run multiple patterns together in the same window: 
*/
//p1: sound("bd ~ sd*2 hh") 

//p2: sound("insect wind jazz metal")

// stack(
//   sound("bd ~ sd*2 hh"),
//   sound("insect wind jazz metal")
// )

/* Using stack allows you to add effects to both of the patterns without repeating code
*/

// stack(
//   sound("bd ~ sd*2 hh"),
//   sound("insect wind jazz metal")
// ).every(4, fast(2))


/* 2.2 Euclidean Rhythms 

Changes the structure of the pattern to form an euclidean rhythm. 
Euclidian rhythms are rhythms obtained using the greatest common divisor of two numbers. 
They were described in 2004 by Godfried Toussaint, a canadian computer scientist. 
Euclidian rhythms are really useful for computer/algorithmic music because they can describe 
a large number of rhythms with a couple of numbers.

>> pulses : number - the number of onsets / beats
>> steps : number - the number of steps to fill

*/ 

// Playing with euclidean rhythms
// sound("cp").euclid(3,8).spiral()


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


/*
2.3 Visualising Patterns 
*/ 

// Using Punchcard 
// stack(
//   sound("bd:1 sd ~ cp").color("[#5BC0EB #FDE74C ~ #9BC53D ]"),
//   sound("bd:4(3,8) AlesisSR16_sd*4").color("[#C3423F #7E2E84]")
// )
// .punchcard()


// // Using Spiral
// stack(
//   sound("bd:1 sd ~ cp").color("[#5BC0EB #FDE74C ~ #9BC53D ]"), 
// )
// ._spiral()


// // Using Scope
// note("c a f e").sound("sawtooth")._scope() .

// //Using pitchweel
// n("0 .. 12").scale("C:chromatic")
// .s("sawtooth")
// .lpf(500)
// ._pitchwheel()

/* 2.4 Loading your own samples? 

Github Repo for you to work with
>> https://github.com/lwlsn/digital-selves-samples/tree/main

How do i download it? 
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

*/

// How do i load it into strudel? 
// samples({
//   k:  ['snd/k/DNC_Kick.wav' ], 
//   hjdsynth: ['snd/hjdsynth/bass-armor.wav', 'snd/hjdsynth/bass-elder.wav', 'snd/hjdsynth/bass-juan.wav',
//              'snd/hjdsynth/bell-anomal.wav', 'snd/hjdsynth/bell-castan.wav', 'snd/hjdsynth/bell-dingo.wav'],
//   gel: ['snd/gel/glass_gel_1.wav', 'snd/gel/glass_gel_2.wav', 'snd/gel/glass_gel_3.wav',
//        'snd/gel/glass_gel_4.wav', 'snd/gel/glass_gel_5.wav', 'snd/gel/glass_gel_6.wav',
//        'snd/gel/glass_gel_7.wav', 'snd/gel/glass_gel_8.wav', 'snd/gel/glass_gel_9.wav'],
//   csubs: ['snd/csubs/sub_with_kick_12_C.wav'],
//   hack: ['snd/hackspace/opening-bar.wav'],
//   hbass: ['snd/hbass/001.wav','snd/hbass/002.wav'], 
//   hkeys: ['snd/hkeys/001.wav', 'snd/hkeys/002.wav', 'snd/hkeys/003.wav', 'snd/hkeys/004.wav'], 
//   hbreaks: ['snd/hbreaks/BUMBA.WAV', 'snd/hbreaks/breakcore-ish-drumloop-i-think.wav']
// }, 'github:lwlsn/digital-selves-samples/main/');

// // Using randomness to select different samples:

// sound("gel*8")
//   .n(rand.range(0,8))
//   .sus(rand.range(0.1, 0.25)).rel(rand.range(0.1,0.25))


// 2.5 (Disrupting) Repetition

// note("c3 eb3 g3 as3")
//   .sound("hjdsynth").every(4, fast(2))
// .punchcard()


// 2.6 Playing with symmetry and randomness

// note("c3 eb3 g3 as3")
//   .sound("hjdsynth")
//   .every(4, fast(2))
// .every(6,rev)
// .punchcard()


// 2.8 Interference Patterns
// "c3 eb3 g3 as3"
//   .off(1/8, x=>x.add(7))
//   .off(1/16, x=>x.add(12))
//   .note()
//   .sound("hjdsynth:0")
//   .slow(2)
//   .every(4, fast(2))
// .rarely(rev)
// .punchcard()

// 2.9 - Have a go at building your own compositions below.. ! 

