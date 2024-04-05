document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 191;

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
            window.location.replace('../naivnaya/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../jad/index.html');
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
    { start: 11, end: 13, text: 'Мое тело горит огнем'},
    { start: 13, end: 16, text: 'Да я просто устану ждать'},
    { start: 16, end: 19, text: 'Я без зонтика под дождем'},
    { start: 19, end: 20, text: 'Выходил уже солнце'},
    { start: 20, end: 23, text: 'Где-то там мы с тобою как мед'},
    { start: 23, end: 25, text: 'Твое тело мёд, твое сердце как мед'},
    { start: 25, end: 28, text: 'Где-то там мы с тобой как мед'},
    { start: 28, end: 33, text: 'Только ты об этом не знаешь'},
    { start: 33, end: 38, text: 'Что сделать с дырой в моем сердце я больше не знаю'},
    { start: 38, end: 43, text: 'Я сам ее заделать не смогу'},
    { start: 43, end: 49, text: 'Долгое время я считал то что я первый парень'},
    { start: 49, end: 51, text: 'Твой но ты не сказала'},
    { start: 51, end: 54, text: 'А ты снилась мне сегодня во сне'},
    { start: 54, end: 56, text: 'Мы с тобою были где-то в лесу'},
    { start: 56, end: 59, text: 'Почему мне было весело с ней'},
    { start: 59, end: 63, text: 'Почему я был готовый на все'},
    { start: 63, end: 65, text: 'Мое тело горит огнем'},
    { start: 65, end: 68, text: 'Да я просто устану ждать'},
    { start: 68, end: 70, text: 'Я без зонтика под дождем'},
    { start: 70, end: 72, text: 'Выходил уже солнце'},
    { start: 72, end: 74, text: 'Где-то там мы с тобою как мед'},
    { start: 74, end: 77, text: 'Твое тело мёд, твое сердце как мед'},
    { start: 77, end: 80, text: 'Где-то там мы с тобой как мед'},
    { start: 80, end: 82, text: 'Только ты об этом не знаешь'},
    { start: 82, end: 85, text: 'Где-то там мы с тобою как мед'},
    { start: 85, end: 87, text: 'Твое тело мёд, твое сердце как мед'},
    { start: 87, end: 90, text: 'Где-то там мы с тобой как мед'},
    { start: 90, end: 93, text: 'Только ты об этом не знаешь'},
    { start: 93, end: 95, text: 'Знаешь, там вовсе не было правил'},
    { start: 95, end: 98, text: 'Ты тогда улыбалась всегда'},
    { start: 98, end: 100, text: 'Из нас никто больше не правил'},
    { start: 100, end: 103, text: 'Все мои обещания вода'},
    { start: 103, end: 105, text: 'Мысленно сжимаю тебя'},
    { start: 105, end: 107, text: 'Губы твои так далеко'},
    { start: 107, end: 110, text: 'Ты не понимаешь то, что всё не игра'},
    { start: 110, end: 113, text: 'Ты не понимаешь то, что всё не легко'},
    { start: 113, end: 115, text: 'Ты во мне искала изъян'},
    { start: 115, end: 118, text: 'Когда мне привыкнуть было очень легко'},
    { start: 118, end: 120, text: 'Можно было ехать без ям'},
    { start: 120, end: 125, text: 'Но ты так любила всё мне делать на зло'},
    { start: 125, end: 127, text: 'Моё тело горит огнём'},
    { start: 127, end: 130, text: 'Да, я просто устану ждать'},
    { start: 130, end: 132, text: 'Я без зонтика под дождём'},
    { start: 132, end: 134, text: 'Выходи уже солнце'},
    { start: 134, end: 136, text: 'Где-то там мы с тобою как мед'},
    { start: 136, end: 139, text: 'Твое тело мёд, твое сердце как мед'},
    { start: 139, end: 142, text: 'Где-то там мы с тобой как мед'},
    { start: 142, end: 144, text: 'Только ты об этом не знаешь'},
    { start: 144, end: 147, text: 'Где-то там мы с тобою как мед'},
    { start: 147, end: 149, text: 'Твое тело мёд, твое сердце как мед'},
    { start: 149, end: 152, text: 'Где-то там мы с тобой как мед'},
    { start: 152, end: 154, text: 'Только ты об этом не знаешь'},
    { start: 154, end: 157, text: 'Где-то там мы с тобою как мед'},
    { start: 157, end: 160, text: 'Твое тело мёд, твое сердце как мед'},
    { start: 160, end: 162, text: 'Где-то там мы с тобой как мед'},
    { start: 162, end: 165, text: 'Только ты об этом не знаешь'},
    { start: 165, end: 168, text: 'Где-то там мы с тобою как мед'},
    { start: 168, end: 174, text: 'Твое тело мёд, твое сердце как мед'},
    { start: 174, end: 177, text: 'Где-то там мы с тобой как мед'},
    { start: 177, end: 10000, text: 'Только ты об этом не знаеш'},

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