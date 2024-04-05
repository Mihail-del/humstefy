document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 209;

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
            window.location.replace('../solitude/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../krasota/index.html');
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
    { start: 11, end: 14, text: 'Кто бы мог поверить?'},
    { start: 14, end: 16, text: 'Слушай'},
    { start: 16, end: 17, text: 'Завтра я еду жить в Киев'},
    { start: 17, end: 19, text: 'Сегодня дымит мобила (Окей)'},
    { start: 19, end: 21, text: 'Мои мысли далеко в облаках'},
    { start: 21, end: 23, text: '(Ведь) Ведь все там ждут Кирилла'},
    { start: 23, end: 26, text: 'Кто бы мог поверить? (Кто?)'},
    { start: 26, end: 30, text: 'Слева мой брат и мы на сцене'},
    { start: 30, end: 32, text: '(Куда ты снова едешь, Киря?)'},
    { start: 32, end: 33, text: 'Завтра я еду жить в Лондон'},
    { start: 33, end: 35, text: '(Еще) Со мной засыпает Мария'},
    { start: 35, end: 37, text: '(Еще) Звонили из лобби, вниз в халате'},
    { start: 37, end: 39, text: 'Все там ждут Кирилла'},
    { start: 39, end: 42, text: 'Кто бы мог поверить?'},
    { start: 42, end: 46, text: 'Падаю в кеб, и мы на сцене'},
    { start: 46, end: 48, text: '(Сегодня где ты?)'},
    { start: 48, end: 49, text: 'Сегодня я в городе, дома'},
    { start: 49, end: 51, text: 'Не шарю за литые диски'},
    { start: 51, end: 53, text: 'Братик втащил два лимона'},
    { start: 53, end: 55, text: 'И просто оставил пылиться'},
    { start: 55, end: 58, text: 'Кто бы мог поверить?'},
    { start: 58, end: 64, text: 'Тут так холодно, но вырастет зелень, е (Е)'},
    { start: 64, end: 71, text: 'Открой свои глаза, мой брат, и скажи мне: разве мы не будем жить тут вечно?'},
    { start: 71, end: 80, text: 'Я хочу, чтоб ты меня услышал как надо: Бери своё сейчас, ведь ничто не бесконечно'},
    { start: 80, end: 87, text: 'Открой свои глаза, мой брат, и скажи мне: разве мы не будем жить тут вечно?'},
    { start: 87, end: 96, text: 'Я хочу, чтоб ты меня услышал как надо: Бери своё сейчас, ведь ничто не бесконечно'},
    { start: 96, end: 99, text: 'Полный веры, молодой пацан'},
    { start: 99, end: 101, text: 'Мои братья спят в казармах'},
    { start: 101, end: 103, text: 'Мои братья есть на лагерях'},
    { start: 103, end: 105, text: 'Как бы только им не сдаться'},
    { start: 105, end: 107, text: 'Засыпаем мы в одном месте'},
    { start: 107, end: 109, text: 'Просыпаемся на разном'},
    { start: 109, end: 109, text: 'Но однажды'},
    { start: 109, end: 111, text: 'Дороги сведут обратно'},
    { start: 111, end: 113, text: 'Завтра я еду жить в Киев'},
    { start: 113, end: 115, text: 'Сегодня весь день на мобиле'},
    { start: 115, end: 117, text: 'На том берегу мои пацы звонили'},
    { start: 117, end: 119, text: 'Ведь все там ждут Кирилла'},
    { start: 119, end: 122, text: 'Кто бы мог поверить?'},
    { start: 122, end: 126, text: 'Всё, что захотели, поимели'},
    { start: 126, end: 128, text: '(Куда ты завтра?)'},
    { start: 128, end: 129, text: 'Завтра я еду жить в Питер'},
    { start: 129, end: 131, text: 'Так много людей в этой комнате'},
    { start: 131, end: 133, text: 'Мы делали то, что хотели делать'},
    { start: 133, end: 135, text: 'И нас просто несло (Вау)'},
    { start: 135, end: 138, text: 'Кто бы мог поверить?'},
    { start: 138, end: 142, text: 'Вышел с самолета, но я в небе'},
    { start: 142, end: 143, text: '(А сегодня чё?)'},
    { start: 143, end: 145, text: 'Сегодня я в городе, дома (Опять)'},
    { start: 145, end: 148, text: 'Разбирал старые диски (Да)'},
    { start: 148, end: 149, text: 'Братик втащил два лимона (И че?)'},
    { start: 149, end: 151, text: 'И просто оставил пылиться'},
    { start: 151, end: 154, text: 'Кто бы мог поверить?'},
    { start: 154, end: 160, text: 'Тут так холодно, но вырастает зелень, е (Е)'},
    { start: 160, end: 167, text: 'Открой свои глаза, мой брат, и скажи мне: разве мы не будем жить тут вечно?'},
    { start: 167, end: 176, text: 'Я хочу, чтоб ты меня услышал как надо: Бери своё сейчас, ведь ничто не бесконечно'},
    { start: 176, end: 183, text: 'Открой свои глаза, мой брат, и скажи мне: разве мы не будем жить тут вечно?'},
    { start: 183, end: 192, text: 'Я хочу, чтоб ты меня услышал как надо: Бери своё сейчас, ведь ничто не бесконечно'},
    { start: 192, end: 204, text: 'Открой свои глаза, мой брат'},
    { start: 204, end: 10000, text: 'Открой свои глаза, мой брат'},


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