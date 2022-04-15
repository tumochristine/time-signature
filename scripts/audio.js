const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// Load a sound
const audioElement = document.querySelector('audio');
const track = audioCtx.createMediaElementSource(audioElement);

const playButton = document.querySelector('.tape-controls-play');

playButton.addEventListener('click', function() {
	if (this.dataset.playing === 'false') {
		audioElement.play();
		this.dataset.playing = 'true';
	} else if (this.dataset.playing === 'true') {
		audioElement.pause();
		this.dataset.playing = 'false';
	}

	let state = this.getAttribute('aria-checked') === "true" ? true : false;
	this.setAttribute( 'aria-checked', state ? "false" : "true" );
}, false);

// If the track ends
audioElement.addEventListener('ended', () => {
	playButton.dataset.playing = 'false';
	playButton.setAttribute( "aria-checked", "false" );
}, false);

// Connect the graph
track.connect(audioCtx.destination);
