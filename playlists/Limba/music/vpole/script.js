document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 144;

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
            window.location.replace('../jad/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../naivnaya/index.html');
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
    { start: 20, end: 21, text: 'Вышел из дыма, пришёл из траншеи'},
    { start: 21, end: 23, text: 'Смотри на караты да на моей шее'},
    { start: 23, end: 25, text: 'Карате панчи, на чеки целюсь'},
    { start: 25, end: 27, text: 'Челюсти три, дай мне челюсть'},
    { start: 27, end: 29, text: 'Бью ее жопу это фэтшейминг'},
    { start: 29, end: 30, text: 'Я не хочу отношений'},
    { start: 30, end: 32, text: 'Новые деньги каждый день недели'},
    { start: 32, end: 33, text: 'Братья Бензо суперзлодеи'},
    { start: 33, end: 35, text: 'Твоя шалава тут давится молли'},
    { start: 35, end: 37, text: 'Я был в полях, когда ты был на море'},
    { start: 37, end: 39, text: 'Я дерьмо не могу с этим поспорить'},
    { start: 39, end: 40, text: 'Я не имею блядей в своей зоне'},
    { start: 40, end: 42, text: 'И не имею змей в этой зоне'},
    { start: 42, end: 44, text: 'Имею чек в этой зоне'},
    { start: 44, end: 45, text: 'Твой кэш минор мои бабки в мажоре'},
    { start: 45, end: 49, text: 'Мы бля с районов, и мы не мажоры'},
    { start: 49, end: 51, text: 'Меня всегда бесили мажоры'},
    { start: 51, end: 52, text: 'Картье на мне, твоя сука хуеет'},
    { start: 52, end: 54, text: 'Ведь ты покупаешь ей только пандору'},
    { start: 54, end: 56, text: 'Я люблю дур, не люблю дору'},
    { start: 56, end: 58, text: 'Я не ебу сучек как дора'},
    { start: 58, end: 60, text: 'Вспоминал суку, я ей так дорог'},
    { start: 60, end: 61, text: 'Но у нас нет с ней фоток'},
    { start: 61, end: 65, text: 'Мы бля с района'},
    { start: 65, end: 66, text: 'Да я был в поле'},
    { start: 66, end: 67, text: 'Да я был в поле'},
    { start: 67, end: 68, text: 'Да я был в поле'},
    { start: 68, end: 69, text: 'Да я был в поле'},
    { start: 69, end: 70, text: 'Да я был в поле'},
    { start: 70, end: 70, text: 'Да я был в поле'},
    { start: 70, end: 71, text: 'Да я был в поле'},
    { start: 71, end: 72, text: 'Да я был в поле'},
    { start: 72, end: 73, text: 'Да я был в поле'},
    { start: 73, end: 74, text: 'Да я был в поле'},
    { start: 74, end: 75, text: 'Да я был в поле'},
    { start: 75, end: 76, text: 'Да я был в поле'},
    { start: 76, end: 79, text: 'Говорит мне, я был милым пока меня не узнала'},
    { start: 79, end: 83, text: 'Не подходи ко мне близко ведь ты не деньги и слава'},
    { start: 83, end: 86, text: 'Я из темных кварталов, мне всегда всего будет мало'},
    { start: 86, end: 90, text: 'Она пишет мне снова, пишет ведь я ее не позвал'},
    { start: 90, end: 93, text: 'Нажми окей или кэнсел или кэнсел или кэнсел'},
    { start: 93, end: 96, text: 'Драконо-рождённый как бензо, бензо, бензо'},
    { start: 96, end: 100, text: 'Атака тигра я в кензо, кензо, кензо'},
    { start: 100, end: 103, text: 'Она понимает меня без слов, без слов, без слов'},
    { start: 103, end: 107, text: 'Тебе не повезло, моя катана светит всем'},
    { start: 107, end: 110, text: 'Я уже далеко за пределами твоих стен'},
    { start: 110, end: 114, text: 'Делаю сам свой саунд и никогда не привыкаю'},
    { start: 114, end: 120, text: 'Все дело в том, что я не вижу зла'},
    { start: 120, end: 121, text: 'Да я был в поле'},
    { start: 121, end: 122, text: 'Да я был в поле'},
    { start: 122, end: 123, text: 'Да я был в поле'},
    { start: 123, end: 123, text: 'Да я был в поле'},
    { start: 123, end: 124, text: 'Да я был в поле'},
    { start: 124, end: 125, text: 'Да я был в поле'},
    { start: 125, end: 126, text: 'Да я был в поле'},
    { start: 126, end: 127, text: 'Да я был в поле'},
    { start: 127, end: 128, text: 'Да я был в поле'},
    { start: 128, end: 129, text: 'Да я был в поле'},
    { start: 129, end: 129, text: 'Да я был в поле'},
    { start: 129, end: 130, text: 'Да я был в поле'},
    { start: 130, end: 131, text: 'Да я был в поле'},
    { start: 131, end: 132, text: 'Да я был в поле'},
    { start: 132, end: 133, text: 'Да я был в поле'},
    { start: 133, end: 134, text: 'Да я был в поле'},
    { start: 134, end: 135, text: 'Да я был в поле'},
    { start: 135, end: 135, text: 'Да я был в поле'},
    { start: 135, end: 136, text: 'Да я был в поле'},
    { start: 136, end: 10000, text: 'Да я был в полe'},

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