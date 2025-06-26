$: gain("{1 [ ~ 1 ] 1*2 [~ 1] 1 ~ 1 1}%8")
  .sound("bd:4").every(4,chunk(2,hurry(2))).shape(0.69)
._punchcard()

$: s("<lbreak:4/2>")
  .fit().scrub("0@5 0.625@3")
.scrub(irand(16).seg(8).div(16))
.gain(0.68)
.rib(52,4)
._punchcard()

$: note("{<a4 as4 c5!2> <c5!2 e5!2> f5 <a4 as4 c5!2> <c5!2 e5!2> f5 <a4 as4 c5!2>  <c5!2 e5!2> f5 <a4 as4 c5!2>  <c5!2 e5!2> f5 <a4 as4 c5!2>  <c5!2 e5!2> f5 <d5!2 g5 a5> }%16")
  .sound("sawtooth")
._punchcard()

$: note("{<[f1,f2] [as1, as2] c2!2> <a2 as2 g2!2> ~ <a2 as2 c2!2>}%4")
  .sound("gbass:4")
