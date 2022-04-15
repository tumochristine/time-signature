document.addEventListener("DOMContentLoaded", function(){
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();
    this.audioElement = document.querySelector('audio');
    this.track = this.audioCtx.createMediaElementSource(this.audioElement);
    let chosenAudio = new Audio({
        context: this.audioCtx,
        audioElement: this.audioElement,
        track: this.track,
        location: "assets/CanYouHelpMeLoop.wav"
    });
    let scrubber = new Scrubber({
        context: this.audioCtx,
        audioElement: this.audioElement
    })
})
