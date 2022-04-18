class Audio {
    constructor({ context, audioElement, track }) {
        this.audioCtx = context;
        this.audioElement = audioElement;
        this.track = track;
        this.isPlaying = false;
        this.playButton = document.querySelector('.play-pause');
        this.playButton.addEventListener("click", () => this.handlePlay());
        this.audioElement.addEventListener("ended", () => this.handleTrackEnd());
        this.track.connect(this.audioCtx.destination);
    }

    handlePlay(e) {
        if (this.audioCtx.state === 'suspended') { this.audioCtx.resume(); } // autoplay policy
        this.isPlaying ? this.audioElement.pause() : this.audioElement.play();
        this.isPlaying = !this.isPlaying;
    }

    // replayTrack(e) {
    //     this.audioElement.currentTime = 0;
    // }

    handleTrackEnd(e) {
        this.playButton.dataset.playing = 'false';
    }
}
