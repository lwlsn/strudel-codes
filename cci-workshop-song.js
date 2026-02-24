// Workshop Song

// Melody 
$: "c2 eb2 g2 as2"
  .off(1/8, x=> x.add(7))
  .off(1/16, x=> x.add(12)).slow(2)
    .note()
    .every(4, fast(2))
.rarely(rev)
    .lpf(slider(650, 200, 2000))
  .sound("hjdsynth:3")._punchcard()


// Drums 
$: stack(
   sound("k sd ~ <cp cp:1*2>").fast(2).color("[#5BC0EB #FDE74C ~ #9BC53D ]"),
   sound("k(3,8) dr:1*4").color("[#C3423F #7E2E84]")
 )
 ._punchcard()

// Bass 
$: note("{c2 eb2 g2 as2}%1").sound("hbass:1").sus(0.4).rel(0.4)
    .lpf(slider(2000, 200, 2000))

// Breaks 
$: s("<lbreak:4/2>")
  .fit().scrub("0@5 0.625@3")
.scrub(irand(16).seg(8).div(16))
.gain(0.68)
  //.hpf(2000)
.rib(52,4)
._punchcard()

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
