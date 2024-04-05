document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 136;

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
            window.location.replace('../vbudapeshte/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../kasanie/index.html');
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
    { start: 9, end: 15, text: 'Yo, nelly, what the fuck are you doing?'},
    { start: 15, end: 22, text: 'Rawr on the track Lil Buda'},
    { start: 22, end: 26, text: 'Е, 7-2 — мой город, маленькая бэйби, хочу туда свозить тебя'},
    { start: 26, end: 29, text: 'Познакомить с мамой, ближе узнать тебя'},
    { start: 29, end: 32, text: 'У меня загоны из-за тебя (Воу, е)'},
    { start: 32, end: 36, text: 'Нахуй ты ведёшь себя так? Я стараюсь только для тебя'},
    { start: 36, end: 42, text: 'Все эти суки с резинкой, но я кончаю только в тебя (Грязь, е)'},
    { start: 42, end: 45, text: 'Намочить тебя насквозь и нырнуть в тебя'},
    { start: 45, end: 48, text: 'Потерять, чтобы снова вернуть тебя'},
    { start: 48, end: 52, text: 'Деньги не жалко, уже вложил столько в тебя (У, е, кэшик, е)'},
    { start: 52, end: 55, text: 'Твои подруги — крысы, они пиздят про тебя (Фу)'},
    { start: 55, end: 58, text: 'Мои пацаны — дауны, жадно смотрят на тебя'},
    { start: 58, end: 62, text: 'Такое чувство, будто весь мир вокруг тебя (Девочка)'},
    { start: 62, end: 63, text: 'Одной (Damn)'},
    { start: 63, end: 66, text: 'Жёстко, что я больше не родной'},
    { start: 66, end: 68, text: 'Я теряю свой самоконтроль'},
    { start: 68, end: 71, text: 'Всем вокруг причиняю боль'},
    { start: 71, end: 74, text: 'Как итог: снова в ноль, мама (Е)'},
    { start: 74, end: 76, text: 'Я не актёр, это не роль, мама'},
    { start: 76, end: 78, text: 'Чувствую себя как малой, мама'},
    { start: 78, end: 82, text: 'Главное, что ты честна перед собой, мама'},
    { start: 82, end: 87, text: 'Е, 7-2 — мой город, маленькая бэйби, хочу туда свозить тебя'},
    { start: 87, end: 89, text: 'Познакомить с мамой, ближе узнать тебя'},
    { start: 89, end: 93, text: 'У меня загоны из-за тебя (Воу, е)'},
    { start: 93, end: 97, text: 'Нахуй ты ведёшь себя так? Я стараюсь только для тебя'},
    { start: 97, end: 102, text: 'Все эти суки с резинкой, но я кончаю только в тебя (Грязь, е)'},
    { start: 102, end: 107, text: 'Е, 7-2 — мой город, маленькая бэйби, хочу туда свозить тебя'},
    { start: 107, end: 109, text: 'Познакомить с мамой, ближе узнать тебя'},
    { start: 109, end: 113, text: 'У меня загоны из-за тебя (Воу, е)'},
    { start: 113, end: 117, text: 'Нахуй ты ведёшь себя так? Я стараюсь только для тебя'},
    { start: 117, end: 10000, text: 'Все эти суки с резинкой, но я кончаю только в тебя (Грязь, е)'},



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