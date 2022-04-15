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
        if (this.audioCtx.state === 'suspended') { //autoplay policy
            this.audioCtx.resume();
        }
        if (this.isPlaying) {
            console.log("pause")
            this.audioElement.pause();
        } else {
            console.log("play")

            this.audioElement.play();
        }
        this.isPlaying = !this.isPlaying;
    }

    handleTrackEnd(e) {
        this.playButton.dataset.playing = 'false';
        this.playButton.setAttribute( "aria-checked", "false" );
    }
}
