document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 120;

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
            window.location.replace('../yabudu/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../kristina/index.html');
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
    { start: 11, end: 17, text: 'Эй, хочешь знать, у меня что внутри?'},
    { start: 17, end: 20, text: 'Но я прячу там холод'},
    { start: 20, end: 23, text: 'Перестань говорить о любви'},
    { start: 23, end: 26, text: 'Ты теперь будешь соло'},
    { start: 26, end: 30, text: 'Эй, хочешь знать, у меня что внутри?'},
    { start: 30, end: 33, text: 'Но я прячу там холод'},
    { start: 33, end: 36, text: 'Перестань говорить о любви'},
    { start: 36, end: 39, text: 'Ты теперь будешь соло'},
    { start: 39, end: 42, text: 'Углы, углы, углы, я не срезаю углы (С них)'},
    { start: 42, end: 45, text: 'Рыб много, меньше воды (Да), прям с востока мои корни'},
    { start: 45, end: 49, text: 'С малой немного corny (Е), я взял, её накормил (Ага)'},
    { start: 49, end: 52, text: 'Maybach, Maybach стоит (Е), не китаец, мой drive legit'},
    { start: 52, end: 55, text: 'Моя подруга legit, мой антураж legit'},
    { start: 55, end: 58, text: 'Мой рэп, он тоже legit, эт не музон, эт жизнь'},
    { start: 58, end: 60, text: 'Твой бро в часах залез в бассейн'},
    { start: 60, end: 63, text: 'Rollie встал, не бежит, им нужен аванс кредит'},
    { start: 63, end: 65, text: 'Ей нужен KRYSTALLL, торчит'},
    { start: 65, end: 67, text: 'Просто не иди за мной (За мной)'},
    { start: 67, end: 71, text: 'Да, я вижу твой пропущенный звонок (Ага, алло?)'},
    { start: 71, end: 73, text: 'Те-тебя отпустил давно (Да)'},
    { start: 73, end: 77, text: 'Тебе стало слишком тесно среди этих звёзд (Эй)'},
    { start: 77, end: 82, text: 'Эй, хочешь знать, у меня что внутри?'},
    { start: 82, end: 85, text: 'Но я прячу там холод'},
    { start: 85, end: 88, text: 'Перестань говорить о любви'},
    { start: 88, end: 90, text: 'Ты теперь будешь соло'},
    { start: 90, end: 95, text: 'Эй, хочешь знать, у меня что внутри?'},
    { start: 95, end: 98, text: 'Но я прячу там холод'},
    { start: 98, end: 101, text: 'Перестань говорить о любви'},
    { start: 101, end: 10000, text: 'Ты теперь будешь солo'},

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