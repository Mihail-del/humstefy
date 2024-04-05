document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 195;

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
            window.location.replace('../ustal/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../yunost/index.html');
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
    { start: 37, end: 39, text: 'Браво'},
    { start: 39, end: 42, text: 'Просто расскажи мне, на кой чёрт'},
    { start: 42, end: 44, text: 'Я на пол'},
    { start: 44, end: 47, text: 'Лёг, и жизнь мне села на лицо'},
    { start: 47, end: 49, text: 'Браво'},
    { start: 49, end: 52, text: 'Просто расскажи мне, на кой чёрт'},
    { start: 52, end: 53, text: 'Я на пол'},
    { start: 53, end: 55, text: 'Лёг, и жизнь мне села'},
    { start: 55, end: 58, text: 'Всё так одинаково — всё равно уходим'},
    { start: 58, end: 60, text: 'Завтра на урну, сегодня все в моде'},
    { start: 60, end: 63, text: 'Близкие люди не базарят о погоде'},
    { start: 63, end: 65, text: 'Близкие братья не уносят свои ноги'},
    { start: 65, end: 67, text: 'Близкие люди'},
    { start: 67, end: 70, text: 'Даже те, кто не пьёт, сегодня пить будет'},
    { start: 70, end: 72, text: 'Резиновые будни, эти руки'},
    { start: 72, end: 74, text: 'Эти томные улыбки заполняют промежутки'},
    { start: 74, end: 77, text: 'И я в них вырос'},
    { start: 77, end: 79, text: 'Кто-то звонит мне на телефон'},
    { start: 79, end: 81, text: 'Они хотят мне напомнить, что я никто'},
    { start: 81, end: 84, text: 'Что я серая жизнь, а не кино'},
    { start: 84, end: 87, text: 'И я в ней вырос'},
    { start: 87, end: 89, text: 'Показать мне мой потолок'},
    { start: 89, end: 91, text: 'Они хотят мне напомнить, что я никто'},
    { start: 91, end: 94, text: 'Что это серая жизнь, а не кино'},
    { start: 94, end: 97, text: 'Но я здесь вырос'},
    { start: 97, end: 101, text: 'Мне показалось, я опоздал'},
    { start: 101, end: 106, text: 'Раз не спешил, почему бежал?'},
    { start: 106, end: 111, text: 'Мне показалось, я опоздал'},
    { start: 111, end: 114, text: 'Начать жить так, чтобы мне сказали только «Вау»'},
    { start: 114, end: 116, text: 'Браво'},
    { start: 116, end: 119, text: 'Просто расскажи мне, на кой чёрт'},
    { start: 119, end: 121, text: 'Я на пол'},
    { start: 121, end: 123, text: 'Лёг, и жизнь мне села на лицо'},
    { start: 123, end: 125, text: 'Браво'},
    { start: 125, end: 128, text: 'Просто расскажи мне, на кой чёрт'},
    { start: 128, end: 130, text: 'Я на пол'},
    { start: 130, end: 154, text: 'Лёг, и жизнь мне села'},
    { start: 154, end: 159, text: 'Мне показалось, что я проспал'},
    { start: 159, end: 164, text: 'Раз не спешил, почему бежал?'},
    { start: 164, end: 169, text: 'Мне показалось, что я проспал'},
    { start: 169, end: 173, text: 'В этой комнате я всегда сам'},
    { start: 173, end: 178, text: 'Мне показалось, что я проспал'},
    { start: 178, end: 183, text: 'Раз не спешил, почему бежал?'},
    { start: 183, end: 188, text: 'Мне показалось, что я проспал'},
    { start: 188, end: 10000, text: 'Мне показалось'},

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