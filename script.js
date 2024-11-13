function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


const sampleSequences = {
    sample1: [
        { key: 'KeyD', time: 0 },
        { key: 'KeyS', time: 250 },
        { key: 'KeyA', time: 500 },
        { key: 'KeyJ', time: 750 },
        { key: 'KeyD', time: 1000 },
        { key: 'KeyG', time: 1250 },
        { key: 'KeyF', time: 1500 },
        { key: 'KeyH', time: 1750 },
        { key: 'KeyD', time: 2000 },
        { key: 'KeyA', time: 2250 },
        { key: 'KeyJ', time: 2500 }
    ],
    
    sample2: [
        { key: 'KeyF', time: 0 },
        { key: 'KeyK', time: 300 },
        { key: 'KeyF', time: 600 },
        { key: 'KeyJ', time: 900 },
        { key: 'KeyD', time: 1200 },
        { key: 'KeyL', time: 1500 },
        { key: 'KeyA', time: 1800 },
        { key: 'KeyG', time: 2100 },
        { key: 'KeyD', time: 2400 },
        { key: 'KeyS', time: 2700 },
        { key: 'KeyA', time: 3000 },
        { key: 'KeyH', time: 3300 }
    ],
    
    sample3: [
        { key: 'KeyH', time: 0 },
        { key: 'KeyS', time: 250 },
        { key: 'KeyJ', time: 500 },
        { key: 'KeyH', time: 750 },
        { key: 'KeyA', time: 1000 },
        { key: 'KeyS', time: 1250 },
        { key: 'KeyD', time: 1500 },
        { key: 'KeyG', time: 1750 },
        { key: 'KeyH', time: 2000 },
        { key: 'KeyK', time: 2250 },
        { key: 'KeyL', time: 2500 },
        { key: 'KeyA', time: 2750 }
    ],

    sample4: [
        { key: 'KeyF', time: 0 },
        { key: 'KeyS', time: 200 },
        { key: 'KeyD', time: 400 },
        { key: 'KeyJ', time: 600 },
        { key: 'KeyF', time: 800 },
        { key: 'KeyK', time: 1000 },
        { key: 'KeyG', time: 1200 },
        { key: 'KeyD', time: 1400 },
        { key: 'KeyH', time: 1600 },
        { key: 'KeyD', time: 1800 },
        { key: 'KeyA', time: 2000 },
        { key: 'KeyJ', time: 2200 },
        { key: 'KeyJ', time: 2400 },
        { key: 'KeyF', time: 2600 },
        { key: 'KeyS', time: 2800 },
        { key: 'KeyD', time: 3000 },
        { key: 'KeyD', time: 3200 },
        { key: 'KeyG', time: 3400 },
        { key: 'KeyH', time: 3600 }
    ],

    sample5: [
        { key: 'KeyD', time: 0 },
        { key: 'KeyS', time: 200 },
        { key: 'KeyA', time: 400 },
        { key: 'KeyH', time: 600 },
        { key: 'KeyF', time: 800 },
        { key: 'KeyL', time: 1000 },
        { key: 'KeyJ', time: 1200 },
        { key: 'KeyG', time: 1400 },
        { key: 'KeyS', time: 1600 },
        { key: 'KeyH', time: 1800 },
        { key: 'KeyK', time: 2000 }
    ],

    sample6: [
        { key: 'KeyD', time: 0 },
        { key: 'KeyS', time: 250 },
        { key: 'KeyJ', time: 500 },
        { key: 'KeyD', time: 750 },
        { key: 'KeyG', time: 1000 },
        { key: 'KeyH', time: 1250 },
        { key: 'KeyA', time: 1500 },
        { key: 'KeyD', time: 1750 },
        { key: 'KeyS', time: 2000 },
        { key: 'KeyJ', time: 2250 },
        { key: 'KeyG', time: 2500 }
    ]
};


function playSample(sequenceName) {
    const sequence = sampleSequences[sequenceName];
    if (!sequence) return;

    sequence.forEach(note => {
        setTimeout(() => {
            const audio = document.querySelector(`audio[data-key="${note.key}"]`);
            const key = document.querySelector(`div[data-key="${note.key}"]`);
            if (audio && key) {
                key.classList.add('playing');
                audio.currentTime = 0;
                audio.play();
                setTimeout(() => key.classList.remove('playing'), 100);
            }
        }, note.time);
    });
}
