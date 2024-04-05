document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 214;

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
            window.location.replace('../takemy/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../less/index.html');
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
    { start: 19, end: 21, text: 'Yeah, yeah'},
    { start: 21, end: 26, text: 'The last few months, I`ve been working on me, baby'},
    { start: 26, end: 32, text: 'There`s so much trauma in my life'},
    { start: 32, end: 36, text: 'I`ve been so cold to the ones who loved me, baby'},
    { start: 36, end: 41, text: 'I look back now and I realize'},
    { start: 41, end: 47, text: 'I remember when I held you'},
    { start: 47, end: 52, text: 'You begged me with your drowning eyes to stay'},
    { start: 52, end: 56, text: 'And I regret I didn`t tell you'},
    { start: 56, end: 61, text: 'Now I can`t keep you from loving him, you made up your mind'},
    { start: 61, end: 66, text: 'Say I love you, girl, but I`m out of time'},
    { start: 66, end: 71, text: 'Say I`m there for you, but I`m out of time'},
    { start: 71, end: 76, text: 'Say that I`ll care for you, but I`m out of time'},
    { start: 76, end: 82, text: 'Said, I`m too late to make you mine, out of time (ah)'},
    { start: 82, end: 87, text: 'If he mess up just a little, baby, you know my line'},
    { start: 87, end: 92, text: 'If you don`t trust him a little, then come right back, girl, come right back'},
    { start: 92, end: 97, text: 'Gimme one chance, just a little, baby, I`ll treat you right'},
    { start: 97, end: 103, text: 'And I`ll love you like I should`ve loved you all the time'},
    { start: 103, end: 109, text: 'And I remember when I held you (held you, baby)'},
    { start: 109, end: 113, text: 'You begged me with your drowning eyes to stay (never again, baby)'},
    { start: 113, end: 118, text: 'And I regret I didn`t tell you'},
    { start: 118, end: 123, text: 'Now I can`t keep you from loving him, you made up your mind (uh)'},
    { start: 123, end: 128, text: 'Say I love you, girl, but I`m out of time'},
    { start: 128, end: 133, text: 'Say I`m there for you, but I`m out of time (no)'},
    { start: 133, end: 139, text: 'Say that I`ll care for you, but I`m out of time (hey)'},
    { start: 139, end: 144, text: 'Said, I`m too late to make you mine, out of time (ah)'},
    { start: 144, end: 149, text: 'Ooh-ooh-ooh, singing (out of time)'},
    { start: 149, end: 154, text: 'Said, I had you to myself, but I`m (out of time)'},
    { start: 154, end: 159, text: 'Say that I`ll care for you, but I`m out of time'},
    { start: 159, end: 167, text: 'But I`m too late to make you mine, out of time (uh)'},
    { start: 167, end: 181, text: 'Out of time, out of time'},
    { start: 181, end: 183, text: 'Don`t you dare touch that dial'},
    { start: 183, end: 187, text: 'Because like the song says, you are out of time'},
    { start: 187, end: 189, text: 'You`re almost there, but don`t panic'},
    { start: 189, end: 192, text: 'There`s still more music to come before you`re completely engulfed'},
    { start: 192, end: 196, text: 'In the blissful embrace of that little light you see in the distance'},
    { start: 196, end: 201, text: 'Soon you`ll be healed, forgiven, and refreshed, free from all trauma, pain, guilt, and shame'},
    { start: 201, end: 206, text: 'You may even forget your own name, but before you dwell in that house forever'},
    { start: 206, end: 10000, text: 'Here`s 30 minutes of easy listening to some slow tracks, on 103.5 Dawn F'},

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