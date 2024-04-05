document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 221;

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
            window.location.replace('../around/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../nights/index.html');
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
    { start: 5, end: 7, text: 'Just can`t believe this man'},
    { start: 7, end: 10, text: '(Metro Boomin want some more --)'},
    { start: 10, end: 15, text: 'Somebody said they saw you'},
    { start: 15, end: 21, text: 'The person you were kissing wasn`t me'},
    { start: 21, end: 28, text: 'And I would never ask you, I just kept it to myself'},
    { start: 28, end: 33, text: 'I don`t wanna know, if you`re playing me'},
    { start: 33, end: 36, text: 'Keep it on the low'},
    { start: 36, end: 40, text: 'Cause my heart can`t take it anymore'},
    { start: 40, end: 46, text: 'And if you creeping, please don`t let it show'},
    { start: 46, end: 57, text: 'Oh baby, I don`t wanna know'},
    { start: 57, end: 64, text: 'I think about it when I hold you'},
    { start: 64, end: 69, text: 'When looking in your eyes, I can`t believe'},
    { start: 69, end: 74, text: 'And I don`t need to know the truth'},
    { start: 74, end: 77, text: 'But baby keep it to yourself'},
    { start: 77, end: 82, text: 'I don`t wanna know, if you`re playing me'},
    { start: 82, end: 85, text: 'Keep it on the low'},
    { start: 85, end: 89, text: 'Cause my heart can`t take it anymore'},
    { start: 89, end: 94, text: 'And if you creeping, please don`t let it show'},
    { start: 94, end: 99, text: 'Oh baby, I don`t wanna know'},
    { start: 99, end: 101, text: 'Did he touch you better than me? (touch you better than me?)'},
    { start: 101, end: 103, text: 'Did he watch you fall asleep (watch you fall asleep?)'},
    { start: 103, end: 108, text: 'Did you show him all those things that you used to do to me?'},
    { start: 108, end: 111, text: 'If you`re better off that way (better off that way)'},
    { start: 111, end: 114, text: 'Baby all that I can say (all that I can say)'},
    { start: 114, end: 119, text: 'If you`re gonna do your thing, then don`t come back to me'},
    { start: 119, end: 124, text: 'Ooh'},
    { start: 124, end: 126, text: 'Woah, woah, woah'},
    { start: 126, end: 127, text: '21'},
    { start: 127, end: 130, text: 'Had me crushing, I was cuffing like the precinct'},
    { start: 130, end: 132, text: 'How you go from housewife to a sneaky link'},
    { start: 132, end: 135, text: 'Got you ridin round in all types of benz`s and rovers'},
    { start: 135, end: 137, text: 'Girl you used to ride in a rinky dink'},
    { start: 137, end: 139, text: 'I`m the one put you in Eliante (on God)'},
    { start: 139, end: 142, text: 'Fashion Nova model, I put you on the runway (on God)'},
    { start: 142, end: 144, text: 'You was rocking coach bags, got you chanaynay'},
    { start: 144, end: 147, text: 'Side --in frisco, I call her my bae bae (21)'},
    { start: 147, end: 149, text: 'I got a girl but I still feel alone'},
    { start: 149, end: 152, text: 'If you playing me that mean my home aint home'},
    { start: 152, end: 154, text: 'Having nightmares of going through your phone (21)'},
    { start: 154, end: 155, text: 'Can`t even record you got me out my zone'},
    { start: 155, end: 160, text: 'I don`t wanna know, if you`re playing me'},
    { start: 160, end: 163, text: 'Keep it on the low'},
    { start: 163, end: 168, text: 'Cause my heart can`t take it anymore'},
    { start: 168, end: 172, text: 'And if you creeping, please don`t let it show'},
    { start: 172, end: 175, text: 'Oh baby'},
    { start: 175, end: 180, text: 'I don`t wanna know, if you`re playing me'},
    { start: 180, end: 183, text: 'Keep it on the low'},
    { start: 183, end: 187, text: 'Cause my heart can`t take it anymore'},
    { start: 187, end: 192, text: 'And if you creeping, please don`t let it show'},
    { start: 192, end: 201, text: 'Oh baby I don`t wanna know'},
    { start: 201, end: 203, text: 'If you creeping just don`t let me find out (on God)'},
    { start: 203, end: 206, text: 'Get a hotel never bring him to the house (on God)'},
    { start: 206, end: 209, text: 'If you`re better off that way (better off that way)'},
    { start: 209, end: 211, text: 'Baby all that I can say (all that I can say)'},
    { start: 211, end: 10000, text: 'If you`re gonna do your thing, then don`t come back to me'},
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