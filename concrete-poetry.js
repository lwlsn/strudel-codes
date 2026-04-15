

// ╔══════════════════════════════════════════════════════╗
// ║  CONCRETE POETRY PREAMBLE — strudel.cc REPL          ║
// ╚══════════════════════════════════════════════════════╝
const WORDS = {
  bd:  'body',
  snares:  'falls',
  hhs:  'into',
  cp:  'silence',
  rim: 'again',
  perc:  'breath',
  lt:  'threshold',
  mt:  'membrane',
};

// Get FONT From Google 
await fetch('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap')
  .then(r => r.text())
  .then(css => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  });

let flashes = [];
const ctx = getDrawContext();
const cv  = ctx.canvas;

function paintLoop() {
  requestAnimationFrame(paintLoop);
  const W = cv.width, H = cv.height;

  ctx.fillStyle = 'rgba(0,0,0,0.18)';
  ctx.fillRect(0, 0, W, H);

  flashes = flashes.filter(f => f.life > 0);
  for (const f of flashes) {
    const t = f.life / f.maxLife;
    const a = t * t;
    const drift = (1 - t) * f.baseSz * 1.5;
    ctx.save();
    ctx.globalAlpha = a;
    ctx.font = Math.round(f.baseSz) + 'px "UnifrakturMaguntia"';
    ctx.fillStyle = f.col;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(f.word, f.x, f.y + drift);
  




      ctx.restore();
    f.life--;
  }
}

paintLoop();

const COLS = {
  bd:  '#C3423F', snares:  '#ffaa55',
  hhs:  '#D7C0D0', cp:  '#ff88cc',
  rim: '#ccff88', perc:  '#ffdd88',
  lt:  '#bb88ff', mt:  '#88ffee',
};

function spawnWord(snd, vel) {
  const word = WORDS[snd] || snd;
  const W = cv.width, H = cv.height;
  const v = vel ?? 1;
  flashes.push({
    word,
    x:       (0.1 + Math.random() * 0.8) * W,
    y:       (0.2 + Math.random() * 0.6) * H,
    col:     COLS[snd] || '#ffffff',
    baseSz:  80 + v * 60,
    life:    50,
    maxLife: 50,
  });
}


// ╔══════════════════════════════════════════════════════╗
// ║  CONCRETE POETRY SCORE — strudel.cc REPL             ║
// ╚══════════════════════════════════════════════════════╝

// ── PATTERNING ────────────────────────────────────────

let pat1 = "{ks:3 ks:4 ks:2*2 ks:3 ~ ~ bd:2 ~ bd:2 ~ bd:3 [~ bd:4] ~ ~ bd:2 bd:2*2}%8"
let pat2 = "hhs:4*8?"
let pat3 = "~ ~ snares ~ ~ ~ snares ~"
let pat4 = "~ cp ~ ~ ~ cp ~ ~"
let pat5 = "~ ~ ~ rim ~ ~ ~ rim:2"
let pat6 = "computer-perc*8"


$_: stack(
  sound(pat1),
  sound(pat1).onTrigger((hap) => spawnWord('bd',  hap.value.gain ?? 1),   true))
.rarely(fast(2))

$: stack(
  sound(pat2),
  sound(pat2).onTrigger((hap) => spawnWord('hhs',  hap.value.gain ?? 0.8), true)
  )

$: stack(
  sound(pat3).n(irand(8)),
  sound(pat3).onTrigger((hap) => spawnWord('snares',  hap.value.gain ?? 0.5), true)
  )

$_: stack(
  sound(pat4),
   sound(pat4).onTrigger((hap) => spawnWord('cp',  hap.value.gain ?? 0.9), true)
)

$_: stack(
  sound(pat5),
  sound(pat5).onTrigger((hap) => spawnWord('rim', hap.value.gain ?? 0.7), true)
)

$: stack(
  sound(pat6).n(irand(16)), 
  sound(pat6).onTrigger((hap) => spawnWord('perc', hap.value.gain ?? 0.7), true)
)  




