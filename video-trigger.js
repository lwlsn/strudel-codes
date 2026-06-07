
const getVideoPlayer = (id = 'videoplayer', options) => {
    let player = document.querySelector('#' + id);
    if (!player) {
        player = document.createElement('video');
        player.id = id;

        // Make it fullscreen background
        Object.assign(player.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: '-1',
            pointerEvents: 'none',
            background: 'black'
        });

        player.preload = "auto";
        player.muted = true;
        player.playsInline = true;

        document.body.prepend(player);
    }
    return player;
}

const clips = {};
const cache = new Map();

function preloadClip(src) {
    return new Promise((resolve) => {
        const v = document.createElement('video');
        v.preload = 'auto';
        v.src = src;
        v.muted = true;
        v.style('position: absolute;right: 0;bottom: 0;min-width: 100%;min-height: 100%');

        v.addEventListener('loadeddata', () => {
            cache.set(src, v);
            resolve();
        });

        v.load();
    });
}

async function loadClips(newClips) {
    const promises = [];
    for (const [name, url] of Object.entries(newClips)) {
        promises.push(preloadClip(url));
        clips[name] = url;
    }
    await Promise.all(promises);
}

Pattern.prototype.video = function() {
    const player = getVideoPlayer();
    return this.withHap((hap) => {
      const onTrigger = (hap, currentTime, _cps, targetTime) => {
          const clip = clips[hap.value];
          console.log('value: ' + hap.value + ' ' + clip);
          if (clip) {
              if (cache.has(clip)) {
                  player.src = cache.get(clip).src;
              } else {
                  player.src = clip;
              }
              player.currentTime = 0;
              player.play().catch(err => {
                  console.log('Error:', err);
              });
          }
      };
      return hap.setContext({ ...hap.context, onTrigger, dominantTrigger: true });
    });
};

loadClips({a: 'https://cci.arts.ac.uk/~lizziewlsn/videos/vid2-001.mp4',
           b: 'https://cci.arts.ac.uk/~lizziewlsn/videos/vid2-002.mp4',
           c: 'https://cci.arts.ac.uk/~lizziewlsn/videos/vid2-004.mp4',
          d: 'https://cci.arts.ac.uk/~lizziewlsn/videos/vid2-003.mp4'
          }
         )


$_: "a b c d".struct("x!2 ~ x ~ ~ x!2 ~ x ~ ~ ~ x ~ x ~ ~").video()

$: "<a*16 b*16 [c*32 d*8] a*16>".video()

$: sound("shorty*<16 16 [32 8] 16>").n("<0 0 0 [2 1]>")

$: stack(
  sound("breakers:2")
  .loopAt(8).splice(32, "0 1*2 2 3*4  4*8 5 6 7 ").gain(0.5) // add bits??
)

setcpm(120/4)
