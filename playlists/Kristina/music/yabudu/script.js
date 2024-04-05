document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 108;

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
            window.location.replace('../dzhek/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../holod/index.html');
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
    { start: 5, end: 7, text: 'Слушай'},
    { start: 7, end: 8, text: 'Твой взгляд, твой смех'},
    { start: 8, end: 10, text: 'Который так мне нужен'},
    { start: 10, end: 12, text: 'То счастье и успех,'},
    { start: 12, end: 13, text: 'Ведь он вполне заслужен'},
    { start: 13, end: 15, text: 'Твой взгляд, твой смех'},
    { start: 15, end: 17, text: 'Который так мне нужен'},
    { start: 17, end: 19, text: 'То счастье и успех,'},
    { start: 19, end: 20, text: 'Ведь он вполне заслужен'},
    { start: 20, end: 22, text: 'Я знаю, я буду'},
    { start: 22, end: 24, text: 'Лететь безумной вспышкой'},
    { start: 24, end: 25, text: 'Я буду, я буду'},
    { start: 25, end: 27, text: 'Шефить бро пока он дышит'},
    { start: 27, end: 29, text: 'Искусно, художник'},
    { start: 29, end: 30, text: 'Рисую по нем бритвой'},
    { start: 30, end: 32, text: 'И пухич больше не греет'},
    { start: 32, end: 34, text: 'Ведь там только остались дырки'},
    { start: 34, end: 35, text: 'Две shawty на съемках клипа'},
    { start: 35, end: 37, text: 'Не видели пушки в жизни'},
    { start: 37, end: 39, text: 'Когда закончу с альбомом,'},
    { start: 39, end: 40, text: 'Они увидят хлопушку Кристины'},
    { start: 40, end: 42, text: 'Хочет узнать мое ближе'},
    { start: 42, end: 44, text: 'Хочет узнать мое полное имя'},
    { start: 44, end: 45, text: 'Когда я сделаю суку,'},
    { start: 45, end: 47, text: 'Ищи меня в google, я призрак'},
    { start: 47, end: 48, text: 'Одет как goon'},
    { start: 48, end: 51, text: 'С капом чая завис на балконе'},
    { start: 51, end: 52, text: 'На мне full TRAPSTAR'},
    { start: 52, end: 54, text: 'No stylist, это последний в сезоне'},
    { start: 54, end: 55, text: 'Туман закрыл весь камень'},
    { start: 55, end: 57, text: 'Утро я встречаю как loner'},
    { start: 57, end: 59, text: 'Fabient мне скинул этот бит'},
    { start: 59, end: 61, text: 'После vacay на Комо'},
    { start: 61, end: 62, text: 'Слушай'},
    { start: 62, end: 65, text: 'Знаю, буду'},
    { start: 65, end: 68, text: 'Знаю, буду'},
    { start: 68, end: 74, text: 'Знаю, буду'},
    { start: 74, end: 75, text: 'Слушай'},
    { start: 75, end: 76, text: 'Твой взгляд, твой смех'},
    { start: 76, end: 78, text: 'Который так мне нужен'},
    { start: 78, end: 79, text: 'То счастье и успех,'},
    { start: 79, end: 81, text: 'Ведь он вполне заслужен'},
    { start: 81, end: 83, text: 'Твой взгляд, твой смех'},
    { start: 83, end: 85, text: 'Который так мне нужен'},
    { start: 85, end: 86, text: 'То счастье и успех,'},
    { start: 86, end: 88, text: 'Ведь он вполне заслужен'},
    { start: 88, end: 89, text: 'я знаю, я буду'},
    { start: 89, end: 91, text: 'Лететь безумной вспышкой'},
    { start: 91, end: 93, text: 'Я буду, я буду'},
    { start: 93, end: 95, text: 'Для тебя всегда твоей малышкой'},
    { start: 95, end: 97, text: 'Знаю, буду'},
    { start: 97, end: 100, text: 'Рисую бритвой'},
    { start: 100, end: 10000, text: 'Пока он дыши'},

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