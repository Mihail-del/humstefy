document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 198;

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
            window.location.replace('../bravo/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../mishen/index.html');
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
    { start: 12, end: 16, text: 'Он же самый…'},
    { start: 16, end: 20, text: 'Неужели хоть кого-то не интересует, сколько денег на моём счету'},
    { start: 20, end: 22, text: 'Почему я так редко сплю'},
    { start: 22, end: 24, text: 'Для чего я говорю, что люблю'},
    { start: 24, end: 26, text: 'Если просто говорю, что люблю, м'},
    { start: 26, end: 28, text: 'Если выходные — то в будни'},
    { start: 28, end: 31, text: 'Если по работе — занятой, и на трубке'},
    { start: 31, end: 35, text: 'Увидеть бы тёплое солнце за окном этой маршрутки, е'},
    { start: 35, end: 41, text: 'Я верю в тебя, обожаю, как ты говоришь со мной'},
    { start: 41, end: 44, text: 'Ты юность, мы ещё придём в наш двор'},
    { start: 44, end: 50, text: 'Я верю в тебя, наши дороги сойдутся вновь'},
    { start: 50, end: 56, text: 'Ты юность, мы ещё придём в наш двор'},
    { start: 56, end: 61, text: 'Ты моя юность'},
    { start: 61, end: 65, text: 'Ой, моя юность'},
    { start: 65, end: 67, text: 'Ой, моя юность (Ой-ой)'},
    { start: 67, end: 70, text: 'Я верю в тебя'},
    { start: 70, end: 73, text: 'Наши дороги сойдутся вновь (Ты юность)'},
    { start: 73, end: 78, text: 'Ты моя юность'},
    { start: 78, end: 82, text: 'Ой, моя юность'},
    { start: 82, end: 84, text: 'Ой, моя юность'},
    { start: 84, end: 87, text: 'Ты моя юность'},
    { start: 87, end: 91, text: 'Ой, моя юность'},
    { start: 91, end: 93, text: 'Ой, моя юность'},
    { start: 93, end: 96, text: 'Юность, молодость'},
    { start: 96, end: 99, text: 'Дай мне ещё один шанс познать тебя заново'},
    { start: 99, end: 104, text: 'Прикинь, меня знают теперь люди'},
    { start: 104, end: 106, text: 'Твои сёстры и даже твоя мама (Оу, ма)'},
    { start: 106, end: 108, text: 'Ты боялась показать меня им, но теперь я для них — звезда из квартала (Вау)'},
    { start: 108, end: 113, text: 'Концерты, фотки, фанатки — реклама'},
    { start: 113, end: 115, text: 'Перевод, переезд — охрана'},
    { start: 115, end: 117, text: 'Конторы, фирмы, отдельный въезд в банках'},
    { start: 117, end: 119, text: 'Их братья в понятке, где наши рамки'},
    { start: 119, end: 122, text: 'Дай мне шанс, банально'},
    { start: 122, end: 123, text: 'Я бы всё повторил заново'},
    { start: 123, end: 126, text: 'Помню, что ты мне сказала тогда'},
    { start: 126, end: 128, text: 'И я всё ещё держу свою осанку'},
    { start: 128, end: 130, text: '[Предприпев]'},
    { start: 130, end: 135, text: 'Ты моя юность'},
    { start: 135, end: 137, text: 'Ой, моя юность'},
    { start: 137, end: 140, text: 'Ой, моя юность (Ой-ой)'},
    { start: 140, end: 143, text: 'Я верю в тебя (Я верю)'},
    { start: 143, end: 146, text: 'Наши дороги сойдутся вновь (Ой, ты юность)'},
    { start: 146, end: 152, text: 'Ты моя юность (Ты моя юность)'},
    { start: 152, end: 154, text: 'Ой, моя юность (Ой, моя юность)'},
    { start: 154, end: 156, text: 'Ой, моя юность (Ой, моя юность)'},
    { start: 156, end: 161, text: 'Ты моя юность (Ты моя юность)'},
    { start: 161, end: 163, text: 'Ой, моя юность'},
    { start: 163, end: 166, text: 'Ой, моя юность'},
    { start: 166, end: 169, text: 'Юность, молодость'},
    { start: 169, end: 174, text: 'Дай мне ещё один шанс познать тебя заново'},
    { start: 174, end: 178, text: 'Юность, молодость'},
    { start: 178, end: 10000, text: 'Дай мне ещё один шанс познать тебя заново'},
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