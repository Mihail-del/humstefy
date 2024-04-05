document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 177;

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
            window.location.replace('../yunost/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../ustal/index.html');
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
    { start: 16, end: 17, text: 'Я знаю, что ты с ним спишь'},
    { start: 17, end: 19, text: 'Я вообще много чё знаю про вас'},
    { start: 19, end: 22, text: 'Сорри, но я спал со всеми твоими подругами'},
    { start: 22, end: 23, text: 'Со всеми по пару раз'},
    { start: 23, end: 25, text: 'Не вини меня за это (М-м)'},
    { start: 25, end: 27, text: 'Не оправдывай меня то, что я пацан'},
    { start: 27, end: 30, text: 'Я прыгнул на поезд с ковбоями с детства'},
    { start: 30, end: 31, text: 'И просто скакал (Oh my)'},
    { start: 31, end: 34, text: 'Эти подруги с Инсты — просто малые за сценой'},
    { start: 34, end: 36, text: 'Не по любви, у них у всех есть ценник'},
    { start: 36, end: 38, text: 'И любовь ко мне — это просто монета'},
    { start: 38, end: 42, text: 'Но моя монета для мамы на лето (Ха-ха)'},
    { start: 42, end: 47, text: 'Я для них мишень (Поу)'},
    { start: 47, end: 50, text: 'Я отпустил тебя'},
    { start: 50, end: 52, text: 'Обоим всё равно'},
    { start: 52, end: 53, text: 'Ты теперь не моя'},
    { start: 53, end: 56, text: 'Но я снова буду твой'},
    { start: 56, end: 58, text: 'Я для них мишень'},
    { start: 58, end: 60, text: 'Ставлю всем блокшот'},
    { start: 60, end: 62, text: 'Но не для тебя'},
    { start: 62, end: 64, text: 'Я снова буду твой'},
    { start: 64, end: 66, text: 'В моём стакане бурбон'},
    { start: 66, end: 68, text: 'Вещи пахнут табаком (Табаком)'},
    { start: 68, end: 70, text: 'Здесь всё на показ, детка'},
    { start: 70, end: 73, text: 'Мы в городе больших окон (Больших окон)'},
    { start: 73, end: 74, text: 'Мы не танцуем — мы двигаемся'},
    { start: 74, end: 76, text: 'Ты назовёшь это бизнесом (Бизнесом)'},
    { start: 76, end: 79, text: 'Слать нахуй обиженных — не значит обидеться'},
    { start: 79, end: 81, text: 'Ты знаешь, я вспыльчивый, потому бесишь'},
    { start: 81, end: 83, text: 'Вы с ним другие на камеру, вешаешь'},
    { start: 83, end: 86, text: 'Все эти басни, истории, вы не счастливые вместе'},
    { start: 86, end: 88, text: 'Когда одна — ты в депрессии'},
    { start: 88, end: 89, text: 'Все мои песни о тёлках'},
    { start: 89, end: 91, text: 'Все мои дни о конкретике'},
    { start: 91, end: 93, text: 'Да, я скатился по твоей ленте'},
    { start: 93, end: 95, text: 'Пока втихую считал бабки в конвертике, сучка'},
    { start: 95, end: 97, text: 'Да, ты любишь, чтоб громко, сучка'},
    { start: 97, end: 99, text: 'Чтоб все с тебя охуевали, сучка'},
    { start: 99, end: 101, text: 'Твой парень на пьедестале, сучка'},
    { start: 101, end: 103, text: 'Теперь он для тебя твоя сучка'},
    { start: 103, end: 105, text: 'Да, ты любишь, чтоб громко, сучка'},
    { start: 105, end: 107, text: 'Чтоб все с тебя охуевали, сучка'},
    { start: 107, end: 109, text: 'Твой парень на пьедестале, сучка'},
    { start: 109, end: 128, text: 'Но ты всё ещё звонишь мне на трубочку (Ха)'},
    { start: 128, end: 130, text: 'Я отпустил тебя'},
    { start: 130, end: 132, text: 'Обоим всё равно'},
    { start: 132, end: 134, text: 'Ты теперь не моя'},
    { start: 134, end: 136, text: 'Но я снова буду твой (Раз)'},
    { start: 136, end: 138, text: 'Я для них мишень'},
    { start: 138, end: 140, text: 'Ставлю всем блокшот'},
    { start: 140, end: 142, text: 'Но не для тебя'},
    { start: 142, end: 10000, text: 'Я снова буду твой (Два)'},
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