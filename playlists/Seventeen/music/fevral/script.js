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
            window.location.replace('../disania/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../vokne/index.html');
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
    { start: 10, end: 13, text: '302'},
    { start: 13, end: 16, text: 'Ты улетела, не увижу никогда'},
    { start: 16, end: 19, text: 'Теперь в моём сердце только февраль'},
    { start: 19, end: 22, text: 'Я не смогу избавить от мысли себя'},
    { start: 22, end: 25, text: 'От мысли, что мы были навсегда'},
    { start: 25, end: 27, text: 'Мир монохромен без тебя'},
    { start: 27, end: 30, text: 'Сообщения без ответа'},
    { start: 30, end: 33, text: 'Мне не достать, ты так далека'},
    { start: 33, end: 36, text: 'Ты как спичка, а я как вода'},
    { start: 36, end: 39, text: 'Что хочешь забирай, в башке апатия'},
    { start: 39, end: 42, text: 'Тебя вновь потерял, у-у'},
    { start: 42, end: 45, text: 'Мне не нужны слова, всё вижу по глазам'},
    { start: 45, end: 49, text: 'Я не вернусь назад'},
    { start: 49, end: 52, text: 'Ты улетела, не увижу никогда'},
    { start: 52, end: 55, text: 'Теперь в моём сердце только февраль, (Эй-эй)'},
    { start: 55, end: 58, text: 'Я не смогу избавить от мысли себя'},
    { start: 58, end: 61, text: 'От мысли, что мы были навсегда'},
    { start: 61, end: 64, text: 'Ты улетела, не увижу никогда'},
    { start: 64, end: 67, text: 'Теперь в моём сердце только февраль (Эй-эй)'},
    { start: 67, end: 69, text: 'Я не смогу избавить от мысли себя'},
    { start: 69, end: 80, text: 'От мысли, что мы были навсегда'},
    { start: 80, end: 83, text: 'Февраль, февраль'},
    { start: 83, end: 86, text: 'Я-Я-Я откашлялся — это вовсе не простуда, —туда'},
    { start: 86, end: 89, text: 'Проснулся, здесь хуёво, просыпаться я не буду'},
    { start: 89, end: 92, text: 'Закрыл глаза, будто бы я ожидаю чуда'},
    { start: 92, end: 95, text: 'Плевок крови на кроссы, забери меня отсюда'},
    { start: 95, end: 98, text: 'Это всё игра, я играю невнимательно'},
    { start: 98, end: 101, text: 'Выпиваю всё, чтоб проснуться после праздников'},
    { start: 101, end: 104, text: 'Разлетается холодный дождик и несчастье'},
    { start: 104, end: 109, text: 'И я в нём утопаю, я в них утопаю (А)'},
    { start: 109, end: 111, text: 'Что хочешь забирай, в башке апатия'},
    { start: 111, end: 114, text: 'Тебя вновь потерял, у-у'},
    { start: 114, end: 117, text: 'Мне не нужны слова, всё вижу по глазам'},
    { start: 117, end: 120, text: 'Я не вернусь назад'},
    { start: 120, end: 122, text: 'Ты улетела, не увижу никогда'},
    { start: 122, end: 126, text: 'Теперь в моём сердце только февраль, (Эй-эй)'},
    { start: 126, end: 128, text: 'Я не смогу избавить от мысли себя'},
    { start: 128, end: 131, text: 'От мысли, что мы были навсегда'},
    { start: 131, end: 134, text: 'Ты улетела, не увижу никогда'},
    { start: 134, end: 137, text: 'Теперь в моём сердце только февраль (Эй-эй)'},
    { start: 137, end: 140, text: 'Я не смогу избавить от мысли себя'},
    { start: 140, end: 10000, text: 'От мысли, что мы были навсегд'},

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