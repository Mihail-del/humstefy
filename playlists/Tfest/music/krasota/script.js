document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 294;

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
            window.location.replace('../nebeskonechno/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../odno/index.html');
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
    { start: 17, end: 22, text: 'Детка, расскажи мне, что ты видела'},
    { start: 22, end: 26, text: 'Кроме ночи по делам'},
    { start: 26, end: 30, text: 'В их глазах ты независима'},
    { start: 30, end: 32, text: 'Но мы-то знаем, что куда'},
    { start: 32, end: 36, text: 'Деньги, огни, ссоры, твой вид'},
    { start: 36, end: 41, text: 'Как клёво: ты хочешь быть ещё сильней'},
    { start: 41, end: 45, text: 'Ярких ролей, всех звёзд планет'},
    { start: 45, end: 53, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 53, end: 61, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 61, end: 69, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 69, end: 81, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 81, end: 96, text: 'Но что для тебя значит эта красота?'},
    { start: 96, end: 100, text: 'Что для тебя значит мир, круг или мячик'},
    { start: 100, end: 102, text: 'Спорт, секс, я в лежащем?'},
    { start: 102, end: 104, text: 'Эфир оплачен, но'},
    { start: 104, end: 106, text: 'Что для тебя значит'},
    { start: 106, end: 108, text: 'Плач, что недостача?'},
    { start: 108, end: 110, text: 'Грам, шмот? Я не знаю'},
    { start: 110, end: 117, text: 'В чём есть твоя красота'},
    { start: 117, end: 125, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 125, end: 133, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 133, end: 145, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 145, end: 148, text: 'Ты так легко отдала мне громкие слова'},
    { start: 148, end: 152, text: 'Ты говорила, что найдёшь себя, но не смогла'},
    { start: 152, end: 156, text: 'Твой приход, он холодный, лоб и глаза'},
    { start: 156, end: 160, text: 'Как приборы, этот шум среди запаха'},
    { start: 160, end: 164, text: 'Что в нём есть, твой мир исчез'},
    { start: 164, end: 168, text: 'Мы были в нём, как в облаках'},
    { start: 168, end: 174, text: 'Выше ролей всех звёзд планет'},
    { start: 174, end: 181, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 181, end: 189, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 189, end: 197, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 197, end: 224, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 224, end: 228, text: 'Что для тебя значит мир, круг или мячик'},
    { start: 228, end: 230, text: 'Спорт, секс, я в лежащем?'},
    { start: 230, end: 232, text: 'Эфир оплачен, но'},
    { start: 232, end: 234, text: 'Что для тебя значит'},
    { start: 234, end: 236, text: 'Плач, что недостача?'},
    { start: 236, end: 238, text: 'Грам, шмот? Я не знаю'},
    { start: 238, end: 246, text: 'В чём есть твоя красота'},
    { start: 246, end: 253, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 253, end: 261, text: 'Расскажи мне, в чём есть твоя красота'},
    { start: 261, end: 10000, text: 'Расскажи мне, в чём есть твоя красотa'},

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