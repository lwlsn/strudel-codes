//File https://strudel.cc/?Lfj4MoIo0vg3


// Set bpm
let setbpm = t => setcps(t/4/60)
setbpm(157)


// Load samples
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
  hbreaks: ['snd/hbreaks/BUMBA.WAV', 'snd/hbreaks/breakcore-ish-drumloop-i-think.wav']
}, 'github:lwlsn/digital-selves-samples/main/');


sound( "bd - - bd - - bd - ")


await initHydra()




// Simple
// let pattern = "3 4 5 [6 7]*2"
// shape(H(pattern)).out(o0)

// n(pattern).scale("A:minor").piano().room(1)



// let pattern= "[1(3,8)]*2"



// n(pattern).sound("bd")

// solid().out()


s("{k ~ rim ~, ~ ~ hh}%<4 8 16 8>")
   .rarely(chunk(4, fast(2)))
   .jux(rev)
   .off(.25, mul(fast(0.5)))
  .superimpose(
    x=>x.vowel("<a <e i>>/4").room(2).slow(2).late(.25)
  )
  // .lastOf(8, mul(speed(-2)))
   .color("[#70D6FF #e63946 #f1faee #457b9d #1d3557]/12")
  .punchcard({fold:1,flipTime:1, vertical:1})


let pattern1 = "{1 ~ ~ ~ }%<4 8 16 8>"
let pattern2 = "{~ ~ 1 ~ }%<4 8 16 8>"
let pattern3 = "{~ ~ 1 }%<4 8 16 8>"

osc()
  .out()

stack(
  sound("k").struct(pattern1).shape(0.69).gain(0.5),
  sound("rim:2").struct(pattern2),
  sound("hh").struct(pattern3)
)
  .rarely(chunk(4, fast(2)))
  .jux(rev)
  .off(.25, mul(fast(2)))


"hhhhhhhhhhhhhhhhhhhhhh".speak(null,null)

