document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 234;

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
            window.location.replace('../less/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../takemy/index.html');
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
    { start: 15, end: 21, text: 'Like a moth to a flame'},
    { start: 15, end: 21, text: 'Like a moth to a flame'},
    { start: 21, end: 31, text: 'I`ll pull you in, I`ll pull you back to what you need initially'},
    { start: 31, end: 37, text: 'It`s just one call away'},
    { start: 37, end: 41, text: 'And you`ll leave him, you`re loyal to me'},
    { start: 41, end: 46, text: 'But this time I let you be'},
    { start: 46, end: 50, text: '`Cause he seems like he`s good for you'},
    { start: 50, end: 54, text: 'And he makes you feel like you should'},
    { start: 54, end: 58, text: 'And all your friends say he`s the one'},
    { start: 58, end: 62, text: 'His love for you is true'},
    { start: 62, end: 70, text: 'But does he know you call me when he sleeps?'},
    { start: 70, end: 78, text: 'But does he know the pictures that you keep?'},
    { start: 78, end: 86, text: 'But does he know the reasons that you cry?'},
    { start: 86, end: 94, text: 'Or tell me, does he know where your heart lies?'},
    { start: 94, end: 99, text: 'Where it truly lies'},
    { start: 99, end: 100, text: 'Yeah'},
    { start: 100, end: 102, text: 'You should be with him, I let you go from time'},
    { start: 102, end: 108, text: 'You should stay with him'},
    { start: 108, end: 114, text: '`Cause he seems like he`s good for you'},
    { start: 114, end: 118, text: 'And he makes you feel like you should'},
    { start: 118, end: 122, text: 'And all your friends say he`s the one'},
    { start: 122, end: 126, text: 'His love for you is true (hey)'},
    { start: 126, end: 134, text: 'But does he know you call me when he sleeps? (No, no)'},
    { start: 134, end: 141, text: 'But does he know the pictures that you keep? (Oh)'},
    { start: 141, end: 142, text: 'But does he know the reasons that you cry?'},
    { start: 142, end: 158, text: 'Or tell me, does he know where your heart lies?'},
    { start: 158, end: 165, text: 'Where it truly lies'},
    { start: 165, end: 166, text: 'Right here with me, babe'},
    { start: 166, end: 171, text: 'Where it truly lies'},
    { start: 171, end: 174, text: 'My bed, babe'},
    { start: 174, end: 180, text: 'Where it truly lies'},
    { start: 180, end: 182, text: 'In my arms, babe'},
    { start: 182, end: 187, text: 'Where it truly lies'},
    { start: 187, end: 190, text: '(Oh-oh-oh)'},
    { start: 190, end: 206, text: 'Where it truly lies'},
    { start: 206, end: 215, text: 'Where it truly lies'},
    { start: 215, end: 222, text: '(Hey)'},
    { start: 222, end: 10000, text: 'Where it truly lie'},

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