document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 339;

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
            window.location.replace('../moth/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../outoftime/index.html');
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
    { start: 23, end: 39, text: 'Take my breath'},
    { start: 39, end: 55, text: 'Take my breath'},
    { start: 55, end: 71, text: 'Take my breath'},
    { start: 71, end: 85, text: 'Take my breath'},
    { start: 85, end: 89, text: 'I saw the fire in your eyes'},
    { start: 89, end: 93, text: 'I saw the fire when I look into your eyes'},
    { start: 93, end: 97, text: 'You tell me things you wanna try, uh'},
    { start: 97, end: 101, text: 'I know temptation is the devil in disguise'},
    { start: 101, end: 105, text: 'You risk it all to feel alive, oh, yeah'},
    { start: 105, end: 109, text: 'You`re offering yourself to me like sacrifice'},
    { start: 109, end: 113, text: 'You said you do this all the time'},
    { start: 113, end: 118, text: 'Tell me you love me if I bring you to the light'},
    { start: 118, end: 122, text: 'It`s like a dream what she feels with me'},
    { start: 122, end: 126, text: 'She loves to be on the edge'},
    { start: 126, end: 130, text: 'Her fantasy is okay with me'},
    { start: 130, end: 134, text: 'Then suddenly, baby says'},
    { start: 134, end: 137, text: 'Take my breath away'},
    { start: 137, end: 140, text: 'And make it last forever, babe'},
    { start: 140, end: 142, text: 'Do it now or never, babe (ah)'},
    { start: 142, end: 144, text: 'Take my breath away'},
    { start: 144, end: 147, text: 'Nobody does it better, babe'},
    { start: 147, end: 149, text: 'Bring me close to-'},
    { start: 149, end: 153, text: 'Want me to hold on to you tight'},
    { start: 153, end: 157, text: 'You pull me close, I feel the heat between your thighs (uh, say)'},
    { start: 157, end: 161, text: 'You`re way too young to end your life, huh'},
    { start: 161, end: 165, text: 'Girl, I don`t wanna be the one who pays the price'},
    { start: 165, end: 169, text: 'Ooh, it`s like a dream what she feels with me'},
    { start: 169, end: 173, text: 'She loves to be on the edge'},
    { start: 173, end: 178, text: 'Her fantasy is okay with me'},
    { start: 178, end: 181, text: 'Then suddenly, baby says'},
    { start: 181, end: 187, text: 'Take my breath away'},
    { start: 187, end: 189, text: 'And make it last forever, babe'},
    { start: 189, end: 191, text: 'Do it now or never, babe (ah)'},
    { start: 191, end: 195, text: 'Take my breath away'},
    { start: 195, end: 197, text: 'Nobody does it better, babe'},
    { start: 197, end: 200, text: 'Bring me close to heaven, babe (uh)'},
    { start: 200, end: 240, text: 'Take my breath'},
    { start: 240, end: 273, text: 'Oh, oh-ooh'},
    { start: 273, end: 279, text: 'And they`ll see me'},
    { start: 279, end: 287, text: 'Oh-ooh, ooh (yeah, say)'},
    { start: 287, end: 291, text: 'Oh-oh, oh-oh'},
    { start: 291, end: 295, text: 'Oh-oh, oh-oh'},
    { start: 295, end: 297, text: 'Oh-oh, oh-oh'},
    { start: 297, end: 302, text: 'Oh-ooh-oh'},
    { start: 302, end: 307, text: 'Take my breath away (take my breath away)'},
    { start: 307, end: 308, text: 'And make it last forever, babe'},
    { start: 308, end: 310, text: 'Do it now or never, babe (ah)'},
    { start: 310, end: 314, text: 'Take my breath away (take my breath away)'},
    { start: 314, end: 316, text: 'Nobody does it better, babe'},
    { start: 316, end: 318, text: 'Bring me close to heaven, babe'},
    { start: 318, end: 323, text: 'Take my breath (take my breath a-, breath away)'},
    { start: 323, end: 326, text: 'Nobody'},
    { start: 326, end: 330, text: 'Take my breath (take my breath a-, breath away)'},
    { start: 330, end: 332, text: 'Nobody does it better, babe'},
    { start: 332, end: 334, text: 'Bring me close to heaven, babe (uh)'},
    { start: 334, end: 10000, text: 'Take my breath'},

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