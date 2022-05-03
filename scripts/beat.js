class Beat {
    constructor({ filled, correct }) {
        this.audioElement = audioElement;
        this.progress = document.getElementById('progress');
        this.progressContainer = document.getElementById('progress-container');
        this.audioElement.addEventListener('timeupdate', (e) => this.updateProgress(e));
        this.progressContainer.addEventListener('click', (e) => this.setProgress(e));
    }

    setProgress(e) {
        this.audioElement.currentTime = (e.offsetX / (e.currentTarget.clientWidth)) * this.audioElement.duration;
        this.audioElement.play()
    }

    updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        this.progress.style.width = `${progressPercent}%`;
    }
}
