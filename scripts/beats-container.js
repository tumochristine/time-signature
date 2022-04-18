class BeatsContainer {
    constructor({ audioElement, correctBeatNums, userWrong, userCorrect}) {
        this.audioElement = audioElement;
        this.beats = document.getElementById('beats');
        this.numBeats = 16;
        this.correctBeatNums = correctBeatNums;
        this.userWrong = userWrong;
        this.userCorrect = userCorrect;
        this.initAllBeats = this.initAllBeats.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.audioElement.addEventListener('timeupdate', (e) => this.updateProgress(e));
        // this.progressContainer.addEventListener('click', (e) => this.setProgress(e));
        this.initAllBeats();
    }

    handleClick(e) {
        if (this.correctBeatNums.includes(parseInt(e.target.id))) {
            this.userCorrect(e);
        } else {
            this.userWrong(e);
        }
    }

    initAllBeats() {
        for (var i = 0; i < this.numBeats; i++) {
            if (i === 0) {
                $("#beats").append(`<li class='beat-circle filled' id='${ i + 1 }'></li>`)
            } else {
                $("#beats").append(`<li class='beat-circle' id='${ i + 1 }'></li>`)
            }
        }
        $(".beat-circle").click(this.handleClick);
    }

    setProgress(e) {
        this.audioElement.currentTime = (e.offsetX / (e.currentTarget.clientWidth)) * this.audioElement.duration;
    }

    updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        this.progress.style.width = `${progressPercent}%`;
    }
}
