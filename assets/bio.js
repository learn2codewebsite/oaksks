function playAudio() {
    const audio = document.getElementById('audio');
    audio.play();
    document.getElementById("audio").volume = 0.2;
    }
    const audio = document.getElementById('audio');
    if (audio.canPlayType('audio/mpeg')) {
   
    } else {
    document.addEventListener('touchstart', function() {
    audio.play();
    }, { once: true });
    }
    document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    });
    document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    }
    });