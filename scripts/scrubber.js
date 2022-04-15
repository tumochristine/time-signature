class Scrubber {
    constructor({ audioElement }) {
        this.audioElement = audioElement;
        this.scrubber = document.querySelector('media-scrubber');
        this.scrubber.media = this.audioElement;
    }
}
