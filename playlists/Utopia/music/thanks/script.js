document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 184;

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
            window.location.replace('../fein/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../eyes/index.html');
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
    { start: 8, end: 9, text: 'I won`t doubt it, I won`t'},
    { start: 9, end: 11, text: 'He won`t mislead all His followers'},
    { start: 11, end: 14, text: 'Prayin` on the process, minus Spirit'},
    { start: 14, end: 16, text: 'Feel like'},
    { start: 16, end: 18, text: 'Like I`m'},
    { start: 18, end: 21, text: 'Floatin` in my prime time'},
    { start: 21, end: 25, text: 'One life, live it, right now'},
    { start: 25, end: 28, text: 'One life, live it, yeah'},
    { start: 28, end: 31, text: 'Goodbyes, that`s life'},
    { start: 31, end: 35, text: 'Fun times, for life'},
    { start: 35, end: 38, text: 'For life, from down my eyes'},
    { start: 38, end: 42, text: 'Thank God I`m free tonight'},
    { start: 42, end: 43, text: 'Got God on the line'},
    { start: 43, end: 45, text: 'Tell the devil I`m fine'},
    { start: 45, end: 47, text: 'He always tryin`'},
    { start: 47, end: 49, text: 'Tryin` his best (no question)'},
    { start: 49, end: 53, text: 'Top of the pole, me and my bros'},
    { start: 53, end: 54, text: 'When the story gets old'},
    { start: 54, end: 56, text: 'It`s gon` be BMF (muchas gracias)'},
    { start: 56, end: 58, text: 'This shit sound hard'},
    { start: 58, end: 60, text: 'It wasn`t made easy'},
    { start: 60, end: 61, text: 'You can`t live twice'},
    { start: 61, end: 63, text: 'Thank God I`m breathin`'},
    { start: 63, end: 64, text: 'We gotta go now'},
    { start: 64, end: 68, text: 'One life, live it, right now'},
    { start: 68, end: 70, text: 'One life, live it, yeah'},
    { start: 70, end: 74, text: 'Goodbyes, that`s life'},
    { start: 74, end: 77, text: 'Fun times, for life'},
    { start: 77, end: 81, text: 'For life, from down my eyes'},
    { start: 81, end: 88, text: 'Thank God I breathe tonight'},
    { start: 88, end: 101, text: 'Oh'},
    { start: 101, end: 103, text: 'Still no pressure'},
    { start: 103, end: 105, text: 'Thank God, I breathe'},
    { start: 105, end: 109, text: '`Cause shit I speak is what they need, I tell no lies'},
    { start: 109, end: 112, text: 'I`m still up top, they still can`t drop, but what if they not?'},
    { start: 112, end: 115, text: 'Yeah (yeah)'},
    { start: 115, end: 118, text: 'Last tape was filled up with slaps, I guess gotta run this shit back'},
    { start: 118, end: 121, text: 'Didn`t like the way that shit went down at the awards, I admit it, turned to a beast'},
    { start: 121, end: 125, text: 'This that shit right here that get me goin`, after I pop me a piece'},
    { start: 125, end: 129, text: 'Way that we killin` the critics and killin` the hate, might gotta talk to a priest'},
    { start: 129, end: 132, text: 'The way we evolved and knocked down walls, this shit`s outrageous'},
    { start: 132, end: 136, text: 'A quarterback calls, I don`t like 12, except Tom Brady'},
    { start: 136, end: 140, text: 'Can`t short my stock, I still stack tall, you still can`t trade me'},
    { start: 140, end: 143, text: 'Storm`s a minor but you know she livin` major (that`s right, daddy)'},
    { start: 143, end: 147, text: 'When you flyin` up this high, it ain`t no cables'},
    { start: 147, end: 150, text: 'Shit so lit, what happen in Vegas, it stay in Vegas'},
    { start: 150, end: 10000, text: 'Mornin` time, we check the news, we made the paper'},
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