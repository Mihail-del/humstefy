document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 182;

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
            window.location.replace('../vpole/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../med/index.html');
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
    { start: 11, end: 14, text: 'Все эти слова – обман'},
    { start: 14, end: 17, text: 'Это не любовь, детка, просто я пьян'},
    { start: 17, end: 20, text: 'Все эти слова – обман'},
    { start: 20, end: 23, text: 'Это не любовь, детка, просто я пьян'},
    { start: 23, end: 26, text: 'Все эти слова о том, что ты мне нужна'},
    { start: 26, end: 29, text: 'Я забуду твоё имя и не вспомню с утра'},
    { start: 29, end: 32, text: 'Ты хочешь быть со мной, но проснёшься одна'},
    { start: 32, end: 35, text: 'Просто перестань писать мне, сегодня недоступны мои номера'},
    { start: 35, end: 40, text: 'Скажи, зачем тебе такой, как я'},
    { start: 40, end: 43, text: 'Услышишь, всё не будет, как вчера'},
    { start: 43, end: 47, text: 'Не называй меня любимым, прости за всё, что я наговорил тебе'},
    { start: 47, end: 50, text: 'Все эти слова – обман'},
    { start: 50, end: 53, text: 'Это не любовь, детка, просто я пьян'},
    { start: 53, end: 56, text: 'Все эти слова – обман'},
    { start: 56, end: 59, text: 'Это не любовь, детка, просто я пьян'},
    { start: 59, end: 62, text: 'Все эти слова – обман'},
    { start: 62, end: 65, text: 'Это не любовь, детка, просто я пьян'},
    { start: 65, end: 68, text: 'Все эти слова – обман'},
    { start: 68, end: 72, text: 'Это не любовь, детка, просто я пьян'},
    { start: 72, end: 74, text: 'Всё вроде не так, ты не готова'},
    { start: 74, end: 77, text: 'Я тебе не обещал, лучше не усложняй'},
    { start: 77, end: 80, text: 'Я дам тебе знак, в виде одного слова'},
    { start: 80, end: 85, text: 'Напишу: "Приезжай", по-другому никак'},
    { start: 85, end: 88, text: 'Если так, то я опять выиграл'},
    { start: 88, end: 91, text: 'Тут так жарко, может быть, выйдем'},
    { start: 91, end: 94, text: 'Мне так не хватает тебя взять'},
    { start: 94, end: 96, text: 'Твой каприз для меня был вызов'},
    { start: 96, end: 99, text: 'Все эти слова – обман'},
    { start: 99, end: 102, text: 'Это не любовь, детка, просто я пьян'},
    { start: 102, end: 104, text: 'Все эти слова – обман'},
    { start: 104, end: 108, text: 'Это не любовь, детка, просто я пьян'},
    { start: 108, end: 111, text: 'Все эти слова – обман'},
    { start: 111, end: 113, text: 'Это не любовь, детка, просто я пьян'},
    { start: 113, end: 117, text: 'Все эти слова – обман'},
    { start: 117, end: 120, text: 'Это не любовь, детка, просто я пьян'},
    { start: 120, end: 123, text: 'Стоп-стоп, я думал то, что всё, как в кино'},
    { start: 123, end: 126, text: 'Дальше мне будет только легче одуматься'},
    { start: 126, end: 129, text: 'Знаю, что это всё не так хорошо'},
    { start: 129, end: 133, text: 'Нужно ещё, нужно ещё'},
    { start: 133, end: 136, text: 'Буду с тобой честным так, чтобы уйти'},
    { start: 136, end: 138, text: 'Знаю, что так будет лучше'},
    { start: 138, end: 142, text: 'Буду с тобой честным, как мы не хотим'},
    { start: 142, end: 144, text: 'Чтобы нам не стало скучно'},
    { start: 144, end: 147, text: 'Все эти слова – обман'},
    { start: 147, end: 150, text: 'Это не любовь, детка, просто я пьян'},
    { start: 150, end: 153, text: 'Все эти слова – обман'},
    { start: 153, end: 156, text: 'Это не любовь, детка, просто я пьян'},
    { start: 156, end: 159, text: 'Все эти слова – обман'},
    { start: 159, end: 162, text: 'Это не любовь, детка, просто я пьян'},
    { start: 162, end: 165, text: 'Все эти слова – обман'},
    { start: 165, end: 10000, text: 'Это не любовь, детка, просто я пьян'},
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