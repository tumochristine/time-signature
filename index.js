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
    });

    $(".close-btn").click(() => $(".modal-right").hide());
    $(".close-btn").click(() => $(".modal-wrong").hide());


    const userCorrect = (userAnswer) => {
        userAnswer.target.style.background = "green";
        $(".modal-right").show()
    }
    const userWrong = (userAnswer) => {
        userAnswer.target.style.background = "red";
        $(".modal-wrong").show()
    }
    let beatsContainer = new BeatsContainer({
        correctBeatNums: [5, 9, 13],
        userCorrect: userCorrect,
        userWrong: userWrong,
    })
})
