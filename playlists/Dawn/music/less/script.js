document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 211;

    function updateTimer() {
        const minutes = Math.floor(audioPlayer.currentTime / 60);
        const seconds = Math.floor(audioPlayer.currentTime % 60);
        const formattedTime = padZero(minutes) + ':' + padZero(seconds);
        timer.textContent = formattedTime;
    }

    function padZero(num) {
        return num < 10 ? '0' + num : num;
    }

    audioPlayer.addEventListener('timeupdate', updateTimer);

    // Event listener for play/pause button
    playPauseButton.addEventListener("click", function () {
        togglePlayPause();
    });

    // Event listener for updating the progress bar
    audioPlayer.addEventListener("timeupdate", function () {
        updateProgressBar();
    });

    // Event listener for progress bar input
    progressBar.addEventListener("input", function () {
        seekAudio();
    });

    // Event listener for move to beginning button
    moveToBeginningButton.addEventListener("click", function () {
        moveAudioToBeginning();
    });

    // Event listener for move to end button
    moveToEndButton.addEventListener("click", function () {
        moveAudioToEnd();
    });

    // Set the maximum value for the progress bar
    progressBar.max = totalDuration;

    function togglePlayPause() {
        if (audioPlayer.paused) {
            playAudio();
        } else {
            pauseAudio();
        }
    }

    function playAudio() {
        audioPlayer.play();
    }

    function pauseAudio() {
        audioPlayer.pause();
    }


    function updateProgressBar() {
        const currentTime = audioPlayer.currentTime;
        progressBar.value = currentTime;
    }

    function seekAudio() {
        audioPlayer.currentTime = progressBar.value;
        updateProgressBar();
    }

    function moveAudioToBeginning() {
        if (audioPlayer.currentTime >= 3){
            audioPlayer.currentTime = 0; 
            updateProgressBar();
       } else{
            window.location.replace('../outoftime/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../moth/index.html');
    }
});

let isPaused = false;

    function togglePause() {
      isPaused = !isPaused;

      const toggleIcon = document.getElementById('pause-button-img');

      if (isPaused) {
        toggleIcon.src = 'data/pause.svg';
        toggleIcon.alt = 'Pause';
      } else {
        toggleIcon.src = 'data/play.svg';
        toggleIcon.alt = 'Play';
      }
    }


document.addEventListener('DOMContentLoaded', function() {
  const lyricsContainer = document.getElementById('lyric-card');
  const audio = document.getElementById('audio-player');

  // Replace this with your JSON data of lyrics with start and end timecodes
  const lyricsData = [
    { start: 9, end: 16, text: 'Remember I was your hero, yeah'},
    { start: 16, end: 19, text: 'I`d wear your heart like a symbol'},
    { start: 19, end: 33, text: 'I couldn`t save you from my darkest truth of all'},
    { start: 33, end: 36, text: 'I know'},
    { start: 36, end: 40, text: 'I`ll always be less than zero'},
    { start: 40, end: 42, text: 'Oh, yeah'},
    { start: 42, end: 46, text: 'You tried your best with me, I know'},
    { start: 46, end: 57, text: 'I couldn`t face you with my darkest truth of all'},
    { start: 57, end: 60, text: 'Oh, oh-oh'},
    { start: 60, end: 67, text: '`Cause I can`t get it out of my head'},
    { start: 67, end: 74, text: 'No, I can`t shake this feeling that crawls in my bed'},
    { start: 74, end: 78, text: 'I try to hide it, but I know you know me'},
    { start: 78, end: 83, text: 'I try to fight it, but I`d rather be free'},
    { start: 83, end: 87, text: 'Oh, oh'},
    { start: 87, end: 89, text: 'Oh, yeah'},
    { start: 89, end: 94, text: 'Can we meet in the middle?'},
    { start: 94, end: 96, text: 'Oh, yeah'},
    { start: 96, end: 100, text: '`Cause you were just like me before'},
    { start: 100, end: 111, text: 'Now you`d rather leave me than to watch me die in your arms'},
    { start: 111, end: 114, text: 'Oh, oh'},
    { start: 114, end: 121, text: 'But I can`t get it out of my head'},
    { start: 121, end: 128, text: 'No, I can`t shake this feeling that crawls in my bed'},
    { start: 128, end: 131, text: 'I try to hide it, but I know you know me'},
    { start: 131, end: 137, text: 'I try to fight it, but I`d rather be free'},
    { start: 137, end: 141, text: 'Oh, oh, huh!'},
    { start: 141, end: 147, text: 'I can`t get it out of my head'},
    { start: 147, end: 155, text: 'No, I can`t shake this feeling that crawls in my bed'},
    { start: 155, end: 169, text: 'I can`t get it out of my head'},
    { start: 169, end: 182, text: 'No, I can`t shake this feeling that crawls in my bed'},
    { start: 182, end: 185, text: 'I try to hide it, but I know you know me'},
    { start: 185, end: 195, text: 'I try to fight it, but I`d rather be free'},
    { start: 195, end: 197, text: 'Yeah'},
    { start: 197, end: 204, text: 'I`ll always be less than zero'},
    { start: 204, end: 10000, text: 'You tried your best with me, I know'},
    ];

   // Function to display lyrics
  function displayLyrics() {
    lyricsContainer.innerHTML = '';
    lyricsData.forEach(line => {
      const lyricLine = document.createElement('div');
      lyricLine.classList.add('lyrics-line');
      lyricLine.textContent = line.text;
      lyricsContainer.appendChild(lyricLine);

      // Highlight active line based on current audio time
      audio.addEventListener('timeupdate', function() {
        if (audio.currentTime >= line.start && audio.currentTime <= line.end) {
          lyricLine.classList.add('active');
          scrollToLyric(lyricLine.offsetTop);
        } else {
          lyricLine.classList.remove('active');
        }
      });
    });
  }

  // Function to display lyrics
  function displayLyrics() {
    lyricsContainer.innerHTML = '';
    lyricsData.forEach(line => {
      const lyricLine = document.createElement('div');
      lyricLine.classList.add('lyrics-line');
      lyricLine.textContent = line.text;
      lyricsContainer.appendChild(lyricLine);

      // Highlight active line based on current audio time
      audio.addEventListener('timeupdate', function() {
        if (audio.currentTime >= line.start && audio.currentTime <= line.end) {
          lyricLine.classList.add('active');
          scrollToLyric(lyricLine.offsetTop);
        } else {
          lyricLine.classList.remove('active');
        }
      });
    });
  }

  // Function for smooth scrolling to lyric line
  function scrollToLyric(offsetTop) {
    lyricsContainer.scrollTo({
      top: offsetTop - (lyricsContainer.clientHeight / 4),
      behavior: 'smooth'
    });
  }

  displayLyrics();
});