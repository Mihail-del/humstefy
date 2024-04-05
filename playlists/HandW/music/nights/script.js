document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 199;

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
            window.location.replace('../creepin/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../trance/index.html');
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
    { start: 5, end: 10, text: 'Honorable C.N.O.T.E'},
    { start: 10, end: 15, text: 'Metroo'},
    { start: 15, end: 23, text: 'Keep the bitch jump, uh-uh'},
    { start: 23, end: 29, text: 'Keep it on jump, uh-uh (jump)'},
    { start: 29, end: 32, text: 'Keep the bitch ju-u-ump'},
    { start: 32, end: 34, text: 'I caught it cool, for a ten'},
    { start: 34, end: 37, text: 'The bitch get loose, she tryna win'},
    { start: 37, end: 40, text: 'I beat her by the house, I beat her in'},
    { start: 40, end: 43, text: 'There`s forty in the couch, I let her spend'},
    { start: 43, end: 45, text: 'When the car`s lit, better call in'},
    { start: 45, end: 48, text: 'She done popped all out, she done called twin'},
    { start: 48, end: 51, text: 'I done went too spazzed out, I put the raw in'},
    { start: 51, end: 53, text: 'I done hit the strip club and spent a tall ten'},
    { start: 53, end: 56, text: 'Lil` shawty off the Clicquot'},
    { start: 56, end: 58, text: 'She been comin` hot just like a heat stroke (heat stroke)'},
    { start: 58, end: 61, text: 'I could see you lurkin` through the peephole'},
    { start: 61, end: 63, text: 'I`m stackin` different money, type of C notes (C notes)'},
    { start: 63, end: 68, text: 'I`m talkin` C notes, nigga, hit C notes'},
    { start: 68, end: 71, text: 'You spend what you want and you get what you want'},
    { start: 71, end: 73, text: 'I guess you got what you wanted'},
    { start: 73, end: 75, text: 'You`re hittin` the pole and you give it your all'},
    { start: 75, end: 78, text: 'Now, you keepin` it honest (Yeah)'},
    { start: 78, end: 81, text: 'It`s too many nights I went nameless'},
    { start: 81, end: 83, text: 'It`s too many nights I went famous'},
    { start: 83, end: 86, text: 'It`s too many nights I went brainless'},
    { start: 86, end: 89, text: 'Sayin`, "Uh-uh-uh-uh" (yeah)'},
    { start: 89, end: 92, text: 'Let`s get drunk, uh-uh'},
    { start: 92, end: 94, text: 'Keep the bitch jump, uh-uh'},
    { start: 94, end: 97, text: 'Keep the bitch jump, uh-uh (jump)'},
    { start: 97, end: 98, text: 'Keep the'},
    { start: 98, end: 100, text: 'I caught it cool, for a ten'},
    { start: 100, end: 102, text: 'The bitch get loose, she tryna win'},
    { start: 102, end: 105, text: 'I beat her by the house, I beat her in'},
    { start: 105, end: 108, text: 'There`s forty in the couch, I let her spend'},
    { start: 108, end: 110, text: 'You made a hundred and you fall back'},
    { start: 110, end: 112, text: 'Need you on a call back'},
    { start: 112, end: 114, text: 'Knowin` that you`re all that, bae'},
    { start: 114, end: 115, text: 'Oh, it`s two-hundred on your dashboard'},
    { start: 115, end: 117, text: 'Stampin` out your passport'},
    { start: 117, end: 119, text: 'Ask me if I`m really okay'},
    { start: 119, end: 121, text: 'You get what you want, you want, you want'},
    { start: 121, end: 124, text: 'You get what you want, you want, you want'},
    { start: 124, end: 127, text: 'You get what you want, you want, you want'},
    { start: 127, end: 132, text: 'You get what you want, you want, you want'},
    { start: 132, end: 135, text: 'You spend what you want and you get what you want'},
    { start: 135, end: 138, text: 'I guess you got what you wanted'},
    { start: 138, end: 140, text: 'You`re hittin` the pole and you give it your all'},
    { start: 140, end: 143, text: 'Now, you keepin` it honest (yeah)'},
    { start: 143, end: 146, text: 'It`s too many nights I went nameless'},
    { start: 146, end: 149, text: 'It`s too many nights I went famous'},
    { start: 149, end: 151, text: 'It`s too many nights I went brainless'},
    { start: 151, end: 155, text: 'Sayin`, "Uh-uh-uh-uh" (yeah)'},
    { start: 155, end: 157, text: 'Let`s get drunk, uh-uh'},
    { start: 157, end: 160, text: 'Keep it on jump, uh-uh (jump)'},
    { start: 160, end: 165, text: 'Keep it on jump, uh-uh'},
    { start: 165, end: 168, text: 'Ooh-ooh, ooh-ooh (Keep it on jump, uh-uh)'},
    { start: 168, end: 171, text: 'Ooh-ooh, ooh-ooh (Keep it on jump, uh-uh)'},
    { start: 171, end: 173, text: 'Ooh-ooh, ooh-ooh (Keep it on jump, uh-uh)'},
    { start: 173, end: 175, text: 'Ooh-ooh (haha)'},
    { start: 175, end: 178, text: 'Bottega Veneta whenever you ride with me'},
    { start: 178, end: 180, text: 'It ain`t like I`m askin` you to ride for free'},
    { start: 180, end: 183, text: 'From trappin` to rappin`, need to be proud of me (proud of me)'},
    { start: 183, end: 186, text: 'Pack out the studio and throw parties (throw parties)'},
    { start: 186, end: 188, text: 'Money comin` too fast, I can`t slow it (I can`t slow it)'},
    { start: 188, end: 191, text: 'Feel like I`m runnin` from my past, I can`t slow down'},
    { start: 191, end: 191, text: 'Too many nights, `bout to crash (skrrt)'},
    { start: 191, end: 195, text: 'Now I`m buyin` the foreigns, all cash'},
    { start: 195, end: 10000, text: 'I can`t slow down'},
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