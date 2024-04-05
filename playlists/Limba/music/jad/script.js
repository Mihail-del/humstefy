document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 179;

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
            window.location.replace('../med/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../vpole/index.html');
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
    { start: 14, end: 18, text: 'Тебе можно кричать на меня сколько тебе надо'},
    { start: 18, end: 22, text: 'Тебе можно поплакать до утра, чтоб было легче'},
    { start: 22, end: 24, text: 'Пожалей себя'},
    { start: 24, end: 27, text: 'Детка просто пожалей себя'},
    { start: 27, end: 30, text: 'Детка, пожалей себя'},
    { start: 30, end: 32, text: 'Стоп, я прошу тебя - не ной'},
    { start: 32, end: 34, text: 'Ты, наверное, уйдёшь'},
    { start: 34, end: 35, text: 'Типа, я теперь с другой'},
    { start: 35, end: 37, text: 'Я вонзаю в тебя'},
    { start: 37, end: 39, text: 'Стоп, я прошу тебя - не ной'},
    { start: 39, end: 41, text: 'Ты, наверное, уйдёшь'},
    { start: 41, end: 43, text: 'Типа, я теперь с другой'},
    { start: 43, end: 50, text: 'Я вонзаю в тебя нож (Оо-о-у)'},
    { start: 50, end: 58, text: 'Я вонзаю в тебя нож (Оо-о-у)'},
    { start: 58, end: 59, text: 'Я вонзаю в тебя нож (Оо-о-у)'},
    { start: 59, end: 60, text: 'Ты мне не поверишь'},
    { start: 60, end: 66, text: 'Я не стану тебе врать - послушай'},
    { start: 66, end: 69, text: 'На самом деле, всё было не так'},
    { start: 69, end: 74, text: 'Прошу, услышь меня (меня)'},
    { start: 74, end: 77, text: 'Сегодня, я приду к тебе, ты больше не откроешь'},
    { start: 77, end: 81, text: 'Почему ты снова пьяная, откуда столько боли?'},
    { start: 81, end: 84, text: 'Может, точно не увидимся - я так хочу остаться'},
    { start: 84, end: 89, text: 'Я так хочу остаться (так хочу, так хочу)'},
    { start: 89, end: 91, text: 'Стоп, я прошу тебя - не ной'},
    { start: 91, end: 93, text: 'Ты, наверное, уйдёшь'},
    { start: 93, end: 95, text: 'Типа, я теперь с другой'},
    { start: 95, end: 96, text: 'Я вонзаю в тебя'},
    { start: 96, end: 98, text: 'Стоп, я прошу тебя - не ной'},
    { start: 98, end: 100, text: 'Ты, наверное, уйдёшь'},
    { start: 100, end: 102, text: 'Типа, я теперь с другой'},
    { start: 102, end: 109, text: 'Я вонзаю в тебя нож (Оо-о-у)'},
    { start: 109, end: 117, text: 'Я вонзаю в тебя нож (Оо-о-у)'},
    { start: 117, end: 10000, text: 'Я вонзаю в тебя нож'},

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