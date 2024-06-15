(Link to file)[https://strudel.cc/#LyogIFBBUlQgMSAtIFNPTUUgQ09NUE9TSVRJT04gRlVOREFNRU5UQUxTICovCgovKiAxLjEgLSBSZXZpZXcgZnJvbSBwcmV2aW91cyB3b3Jrc2hvcC4uIOKPsCA1IG1pbnMgKi8gCgovL3VwZGF0ZSB0aGUgdGVtcG8KbGV0IHNldGJwbSA9IHQgPT4gc2V0Y3BzKHQvNC82MCkKCnNldGJwbSgxNTEpCgovLyBtYWtlIGEgc2ltcGxlIHBhdHRlcm4KLy9zb3VuZCgiYmQgQWxlc2lzU1IxNl9zZCo0IikgLy8gbWluaS1ub3RhdGlvbiBiYXNpY3MsIGZpbmQgYSBzYW1wbGUgCgovLyBtb3JlIGNvbXBsZXggcGF0dGVybnMKLy9zb3VuZCgiYmQ6MSBzZCB%2BIGNwIikgLy8gCgovL3N0YWNraW5nICAKCi8qIDEuMiAtIE1ha2luZyBjb29sIGRydW0gYmVhdCAg4o%2BwIDEwIG1pbnMgKi8gCnMoIntiZCB%2BIHJpbSB%2BLCB%2BIH4gaGh9JTw0IDggMTYgOD4iKS5iYW5rKCdWaXNjb1NwYWNlRHJ1bScpCiAgLmNodW5rKDQsIGZhc3QoMikpCiAgLmp1eChyZXYpCiAgLm9mZiguMjUsIG11bChzcGVlZCguOCkpKQogIC5zdXBlcmltcG9zZSgKICAgIHg9Pngudm93ZWwoIjxhIDxlIGk%2BPi80Iikucm9vbSgyKS5zbG93KDIpLmxhdGUoLjI1KS5jb2xvcigiIzAwZmYwMDUwIikKICApCiAgLmxhc3RPZig4LCBtdWwoc3BlZWQoLTIpKSkKICAuY29sb3IoIlsjMDAwMGZmNTAgI2ZmZmYwMDIwXSozIikKICAucHVuY2hjYXJkKCkKCgoKLyogIFBBUlQgMiAtIEdPSU5HIERFRVBFUiAqLw%3D%3D]


/*  PART 1 - SOME COMPOSITION FUNDAMENTALS ~ ⏰ 30 mins */

/* 1.1 - Review Strudel fundamentals ⏰ 5 mins */ 

//update the tempo
let setbpm = t => setcps(t/4/60)

setbpm(151)

// make a simple pattern
//sound("bd AlesisSR16_sd*4") // mini-notation basics, find a sample 

// more complex patterns
//sound("bd:1 sd ~ cp") // 

//stacking  

// stack(
//   sound("bd:1 sd ~ cp").color("[#5BC0EB #FDE74C #9BC53D ]"), 
//   sound("bd:4(3,8) AlesisSR16_sd*4").color("[#C3423F #7E2E84]")
// )
// .punchcard()




// Loading in other samples

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




/* 1.2 - Making cool drum beat  ⏰ 10 mins */ 
s("{bd ~ rim ~, ~ ~ hh}%<4 8 16 8>").bank('ViscoSpaceDrum')
  .chunk(4, fast(2))
  .jux(rev)
  .off(.25, mul(speed(.8)))
  .superimpose(
    x=>x.vowel("<a <e i>>/4").room(2).slow(2).late(.25).color("#00ff0050")
  )
  .lastOf(8, mul(speed(-2)))
  .color("[#0000ff50 #ffff0020]*3")
  .punchcard()




/*  PART 2 - GOING DEEPER */



  
  
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
//     sound("~ ~ ~ cp")
//   )
